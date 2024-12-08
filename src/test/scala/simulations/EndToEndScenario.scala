package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

class EndToEndScenario extends Simulation {
  //http conf
  val httpConf = http.baseUrl("https://reqres.in/")
    .header(name="Accept",value="application/json")
    .header(name="Content-Type",value="application/json")

  // scenario
  val scn = scenario("End to End scenario for Users API")
    .exec(http(requestName = "Get User API request")
      .get("/api/users/2")
      .check(status is 200))

    .pause(1,10)

    .exec(http("Get all users request")
      .get("/api/users?page=2")
      .check(status in(expected = 200 to 210)))

    .pause(3)

    .exec(http("Get single user not found request")
      .get("/api/users/100")
      .check(status.not(expected = 400), status.not(expected = 500)))

    .pause(3)

    .exec(http("Add User request")
      .post(url = "/api/users")
      .body(RawFileBody(filePath = "./src/test/resources/testdata/AddUser.json")).asJson
      .header(name = "Content-Type", value = "application/json")
      .check(status is 201))

    .pause(3)

    .exec(http(requestName = "Update user PUT Request")
      .put(url = "/api/users/2")
      .body(RawFileBody(filePath = "./src/test/resources/testdata/UpdateUser.json")).asJson
      .check(status is 200))

    .pause(3)

    .exec(http(requestName = "Delete user : DELETE Request")
      .delete(url = "/api/users/2")
      .check(status is 204))

  //setup
  setUp(
    scn.inject(atOnceUsers(10))
  ).protocols(httpConf)
}
