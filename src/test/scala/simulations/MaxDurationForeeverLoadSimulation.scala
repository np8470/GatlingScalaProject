package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.language.postfixOps

class MaxDurationForeeverLoadSimulation extends Simulation {
  //http conf
  val httpConfig = http.proxy(Proxy(host = "localhost",port = 8888))
    .baseUrl("https://reqres.in/")
    .header(name="Accept",value="application/json")
    .header(name="Content-Type",value="application/json")

  // method using ChainBuilder to reuse method
  def getAllUsers() = {
    //repeat(2){
      exec(http(requestName = "Get All users request")
      .get(url = "api/users?page=2")
      .check(status is 200))
    //}
  }

  def getSingleUser() = {
    repeat(2){
      exec(http(requestName = "Get Single User")
      .get(url ="api/users/2")
      .check(status is 200))
    }
  }

  def addUser() = {
    repeat(2){
      exec(http(requestName = "Add User request")
      .post(url = "api/users")
      .body(RawFileBody(filePath = "./src/test/resources/testdata/AddUser.json")).asJson
      .check(status is 201))
    }
  }

  //scenario
  val scn = scenario("Fixed duration load simulation")
    .forever() {
        exec(getAllUsers())
        .pause(3)
        .exec(getSingleUser())
        .pause(3)
        .exec(addUser())
    }
  //setup
  setUp(
    scn.inject(
      nothingFor(5),
      atOnceUsers(10)
    )
  ).protocols(httpConfig).maxDuration(duration = 1 minute)

}
