import { assert } from "chai";
import app from "../src/app";
import supertest from "supertest";

const httpClient = supertest(app);

describe("example_integration", function () {
  it("baser url (/) responds with json", async function () {
    const response = await supertest(app).get("/");

    // console.log(response.body);

    assert.equal(response.status, 200);
    assert.deepEqual(response.body, {
      a: 2,
      alias_a: 2,
      app: "app_c",
      b: 3,
      b_utils: "a",
      c_service: {},
    });
  });

  it("unknown route responds with 404", async function () {
    const response = await httpClient.get("/not_found");

    // console.log(response.body);

    assert.equal(response.status, 404);
    assert.deepEqual(response.body, { message: "Not Found" })
  });
});
