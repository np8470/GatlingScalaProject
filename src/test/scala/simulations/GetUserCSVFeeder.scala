package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class GetUserCSVFeeder extends Simulation {
  //http config
  val httpConfig = http
    .baseUrl(url = "https://gorest.co.in")
    .header(name = "Authorization",value = "Bearer 88a903ed6c6839509c188a26c69840483d85ca1990b8f82ef913641a177a8814")

  // read csv file
  val csvFeeder = csv(fileName = "./src/test/resources/testdata/GetUser.csv").circular

  // reusable method
  def getUserByCSVFeeder() = {
    repeat(times = 8) {
      feed(csvFeeder)
      .exec(http(requestName = "Get User using CSV Feeder")
      .get(url = "/public-api/users/${userid}")
      .check(jsonPath(path = "$.data.name").is(expected = "${username}"))
      .check(status in(expected = 200,304)))
      .pause(2)
    }
  }

  //scenario
  val scn = scenario("Get User using CSV Feeder test data")
    .exec(getUserByCSVFeeder())

  //setup
  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConfig)

}
