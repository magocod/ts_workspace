import { assert } from "chai";
import { callFromSrc } from "../src";

describe("call_packages", () => {
  it("call src function", () => {
    const v = callFromSrc();

    assert.deepEqual(v, { src: 1, a: 2, alias_a: 2, b: 3 });
  });
});
