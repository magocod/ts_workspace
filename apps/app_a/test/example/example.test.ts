import { assert } from "chai";
import app from "../../app";
import supertest from "supertest";

const httpClient = supertest(app);

describe("example_integration", function () {
    it("example route", async function () {
        const response = await httpClient.get("/examples/example");

        // console.log(response.body);

        assert.equal(response.status, 200);
        assert.deepEqual(response.body, { message: "example" })
    });
});
