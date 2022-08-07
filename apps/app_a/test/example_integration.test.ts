import app from "../app";
import supertest from "supertest";

const httpClient = supertest(app);

describe("example_integration", function () {
    it("baser url (/) responds with json", async function () {
        const response = await supertest(app).get("/");

        // console.log(response.body);

        expect(response.status).toEqual(200);
        expect(response.body).toStrictEqual({
            a: 2,
            alias_a: 2,
            app: "app_a",
            b: 3
        })
    });

    it("unknown route responds with 404", async function () {
        const response = await httpClient.get("/not_found");

        // console.log(response.body);

        expect(response.status).toEqual(404);
        expect(response.body).toStrictEqual({})
    });
});
