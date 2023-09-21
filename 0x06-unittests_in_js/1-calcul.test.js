const calculateNumber = require("./1-calcul");
const assert = require("assert");

describe("calculateNumber - 'SUM', 'SUBTRACT', 'DIVIDE'", () => {
  describe("SUM", () => {
    it("should return 4", () => {
      assert.strictEqual(calculateNumber("SUM", 1, 3), 4);
    });
    it("should return 5", () => {
      assert.strictEqual(calculateNumber("SUM", 1.6, 3), 5);
    });
    it("should return 5", () => {
      assert.strictEqual(calculateNumber("SUM", 1.2, 3.8), 5);
    });
  });
  describe("SUBTRACT", () => {
    it("should return 1", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 3, 2), 1);
    });
    it("should return -1", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 2, 3), -1);
    });
    it("should return 0", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 2.4, 2.4), 0);
    });
  });
  describe("DIVIDE", () => {
    it("should return 5", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 10, 2), 5);
    });
    it("should return 0.2", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 2, 10), 0.2);
    });
    it("should return Error", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 2, 0), "Error");
    });
  });
  it("should throw error", () => {
    assert.throws(() => calculateNumber("DIVIDE", 2, "string"), {
      name: "TypeError",
      message: "Parameters must be numbers",
    });
  });
});
