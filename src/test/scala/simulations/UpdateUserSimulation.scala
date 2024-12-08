package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class UpdateUserSimulation extends Simulation {
  //http config
  val httpConfig = http
    .baseUrl(url = "https://reqres.in/")
    .header(name = "Accept",value = "application/json")
    .header(name = "Content-type",value = "application/json")

  // scenario
  val scn = scenario(scenarioName = "Update User request")
    .exec(http(requestName = "Update user PUT Request")
    .put(url = "/api/users/2")
    .body(RawFileBody(filePath = "./src/test/resources/testdata/UpdateUser.json")).asJson
    .check(status is 200))

  //setup
  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConfig)

}
