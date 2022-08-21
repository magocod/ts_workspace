import { callFromB, callUUUI } from "../src";
import { expect } from "chai";

describe("call_b", () => {
  it("call src function", () => {
    const v = callFromB();

    expect(v).equal(3);
  });

  it("call local dependencies", () => {
    const v = callUUUI();

    expect(typeof v).equal("string")
  });
});
