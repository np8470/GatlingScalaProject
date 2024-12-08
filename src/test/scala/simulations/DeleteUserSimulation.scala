package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class DeleteUserSimulation extends Simulation {

  //http config
  val httpConfig = http
    .baseUrl(url = "https://reqres.in/")
    .header(name = "Accept",value = "application/json")
    .header(name = "Content-type",value = "application/json")

  val scn = scenario(scenarioName = "Delete User request")
    .exec(http(requestName = "Delete user : DELETE Request")
      .delete(url = "/api/users/2")
      .check(status is 204))

  //setup
  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConfig)
}
