package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class AddUserSimulation extends Simulation {

  // http config
  val httpConfig = http
    .baseUrl(url="https://reqres.in/")
    .header(name="Accept",value="application/json")
    .header(name="Content-Type",value="application/json")

  // scenario
  val scn = scenario(scenarioName = "Add user Post Request")
    .exec(http("Add User request")
    .post(url = "/api/users")
    .body(RawFileBody(filePath = "./src/test/resources/testdata/AddUser.json")).asJson
    .header(name = "Content-Type", value = "application/json")
    .check(status is 201))

  // setup
  setUp(
    scn.inject(atOnceUsers(users = 1))
      .protocols(httpConfig)
  )
}
