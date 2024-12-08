package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class CheckResponseAndExtractData extends Simulation {

  //http cpnfig
  val httpConfig = http
    .baseUrl(url = "https://gorest.co.in/")
    .header(name = "Authorization", value = "Bearer 88a903ed6c6839509c188a26c69840483d85ca1990b8f82ef913641a177a8814")

  //reusable method using ChainBuilder
  def getAllUsers() = {
      exec(http(requestName = "To Get all Users")
        .get(url = "public-api/users")
        .check(jsonPath(path = "$.data[0].id").saveAs(key = "id"))) // https://jsonpath.com/ - jsonpath expression evaluation
  }

    def getSpecificUser() = {
        exec(http(requestName = "To get specific users")
          .get(url = "public-api/users/${id}")
          .check(jsonPath(path = "$.data.id").is(expected = "7572100"))
          .check(jsonPath(path = "$.data.name").is(expected = "Devagya Nambeesan"))
          .check(jsonPath(path = "$.data.email").is(expected = "devagya_nambeesan@prohaska.test"))
          .check(jsonPath(path = "$.data.gender").is(expected = "female"))
          .check(jsonPath(path = "$.data.status").is(expected = "inactive"))
          .check(jsonPath(path = "$.code").is(expected = "200")))
  }

  //scenario"
  val scn = scenario("Get response and extract data")
    .exec(getAllUsers())
    .pause(3)
    .exec(getSpecificUser())

  //setup
  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConfig)
}
