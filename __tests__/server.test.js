"use strict";

const { server } = require("../src/server");
const supertest = require("supertest");
const request = supertest(server); // use the app from the server (server from the line:3)

describe("express server", () => {
  // (500)
  it("should check 500 errors", async () => {
    // arrange
    let path = "/bad";
    let status = 500;

    // act
    const response = await request.get(path);

    // assert
    expect(response.status).toBe(status);
    expect(typeof response.body).toEqual("object");
  });

  // (404)
  it("shoud check 404 errors", async () => {
    // arrange
    let path = "/notfound";
    let status = 404;
    // act
    const response = await request.get(path);
    // assert
    expect(response.status).toBe(status);
  });

  //////////////////////////////////////////////////// CRUD

  it("should post to table", async () => {
    let path = "/signin";
    let status = 200;

    let reqBody = "admin1 YWRtaW4xOjEyMzQ1Ng==";
    const response = await request.post(path).send(reqBody);
    expect(response.status).toEqual(status);
    expect(response.body.password).toBe("YWRtaW4xOjEyMzQ1Ng==");
  });
  it("should chack the name and post to table", async () => {
    let path = "/signup";
    let status = 403;

    let reqBody = {
      username: "admin2",
      password: "000000",
    };
    const response = await request.post(path).send(reqBody);
    expect(response.status).toEqual(status);
  });
});
