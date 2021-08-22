"use strict";

const { describe, beforeEach, afterEach } = require("@jest/globals");

const loggerMode = require("../src/middleware/logger");

describe("logger midware", () => {
  // arrange
  let conlole;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => (conlole = jest.spyOn(console, "log").mockImplementation()));
  afterEach(() => conlole.mockRestore());

  it("'should console log", () => {
    //act
    loggerMode(req, res, next);
    //assert
    expect(conlole).toHaveBeenCalled();
  });

  it("should move next", () => {
    //act
    loggerMode(req, res, next);
    //assert
    expect(next).toHaveBeenCalledWith();
  });
});
