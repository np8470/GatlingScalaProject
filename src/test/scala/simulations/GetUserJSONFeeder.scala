package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class GetUserJSONFeeder extends Simulation {
  //http config
  val httpConfig = http
    .baseUrl(url = "https://gorest.co.in")
    .header(name = "Authorization",value = "Bearer 88a903ed6c6839509c188a26c69840483d85ca1990b8f82ef913641a177a8814")

  // read json file
  val jsonFeeder = jsonFile(fileName = "./src/test/resources/testdata/GetUser.json").circular

  // reusable method
  def getUserByJSONFeeder() = {
    repeat(times = 8) {
      feed(jsonFeeder)
        .exec(http(requestName = "Get Specific User using JSON Feeder")
          .get(url = "/public/v2/users/${id}")
          .check(jsonPath(path = "$.name").is(expected = "${name}"))
          .check(status in(expected = 200,304)))
        .pause(2)
    }
  }

  //scenario
  val scn = scenario("Get User using JSON Feeder test data")
    .exec(getUserByJSONFeeder())

  //setup
  setUp(
    scn.inject(atOnceUsers(1))
  ).protocols(httpConfig)


}
