package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.language.postfixOps

class LoadSimulation extends Simulation {
  //http config and set Fiddler proxy setup
  val httpConfig = http.proxy(Proxy(host = "localhost",port = 8888))
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
    exec(getUserByJSONFeeder())


  //setup
  setUp(
    scn.inject(
      nothingFor(5),
      constantUsersPerSec(10).during(10),
      rampUsersPerSec(rate1 = 1) to (rate2 = 5) during(20),
      atOnceUsers(10),
      rampUsers(15).during(10)
    )
  ).protocols(httpConfig)


}
