import * as helpers from "../helpers";

jest.mock("uuid", () => {
  return () => "123";
});

describe("sum", () => {
  it("returns null if fed no arguments", () => {
    expect(helpers.sum()).toBe(null);
  });
  it("returns null if fed a single argument", () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it("adds positive number correctly", () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it("adds negative number correctly", () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it("throws if fed something which is not a number", () => {
    expect(() => helpers.sum("1", "2")).toThrow();
  });
  it("can add three positive numbers", () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe("can multiply two numbers together", () => {
  expect(helpers.multiply(4, 4)).toBe(16);
  expect(helpers.multiply(0, 4)).toBe(0);
  expect(helpers.multiply(-2, 10)).toBe(-20);
  expect(helpers.multiply(0.5, 50)).toBe(25);
});

describe("personMaker", () => {
  it("makes a person with name and age", () => {
    expect(helpers.personMaker("peter", 4)).toMatchObject({
      id: "123",
      name: "peter",
      age: 4
    });
  });

  it("throws an error if age is less than 0", () => {
    expect(() => helpers.personMaker("lisa", -5)).toThrow();
  });

  describe("findTheSquare", () => {
    it("only takes a number as a parameter", () => {
      expect(() => helpers.reverseNumber("lisa")).toThrow();
    });
    it("returns the square of a whole number", () => {
      expect(helpers.findTheSquare(5)).toBe(25);
    });
  });
});
