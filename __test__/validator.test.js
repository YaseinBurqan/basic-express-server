"use strict";

const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);

describe("testing person route", () => {
  test("500 if no name in the query string", async () => {
    const response = await request.get("/person?name=");
    expect(response.status).toEqual(500);
  });

  test("200 if the name is in the query string", async () => {
    const response = await request.get("/person?name=randomString");
    expect(response.status).toEqual(200);
  });

  test("given an name in the query string, the output object is correct", async () => {
    const response = await request.get("/person?name=yasein");
    expect(response.body).toEqual({ name: "yasein" });
  });

  test("given an name is not a string, the output object is not correct", async () => {
    const response = await request.get(`/person?name=123`);
    expect(response.status).toEqual(500, { name: "invalid name" });
  });
});
