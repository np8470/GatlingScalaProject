package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class GetUserSimulation extends Simulation {

  //http conf
  val httpConf = http.baseUrl("https://reqres.in/")
    .header(name="Accept",value="application/json")
    .header(name="Content-Type",value="application/json")

  // scenario
    val scn = scenario("Get User")
      .exec(http(requestName = "Get User API request")
      .get("/api/users/2")
      .check(status is 200))

  //setup
  setUp(
    scn.inject(atOnceUsers(10))
  ).protocols(httpConf)

}