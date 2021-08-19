const assert = require("assert");
const { forEach, map } = require("./index");

// Commented out to utilize Mocha.js
// const test = (desc, fn) => {
//   console.log("---", desc);
//   try {
//     fn();
//   } catch (err) {
//     console.log(err.message);
//   }
// };

it("The forEach function", () => {
  // changed from test() to it() for mocha
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });

  assert.strictEqual(sum, 6, "Expected forEach to sum the array");
  // above assertion replaces the below if statement
  // if (sum !== 6) {
  //   throw new Error("Expected summing array to equal 6");
  // }
});

it("The map function", () => {
  // changed from test() to it() for mocha
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });

  assert.deepStrictEqual(result, [2, 4, 6]);
  // assert.strictEqual(result[0], 2);
  // assert.strictEqual(result[1], 4);
  // assert.strictEqual(result[2], 6);

  // if (result[0] !== 2) {
  //   throw new Error(`Expected to find 2, but found ${result[0]}`);
  // }
  // if (result[1] !== 4) {
  //   throw new Error(`Expected to find 4, but found ${result[1]}`);
  // }
  // if (result[2] !== 6) {
  //   throw new Error(`Expected to find 6, but found ${result[2]}`);
  // }
});
