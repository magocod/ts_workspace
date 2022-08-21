import { callFromA } from "../src";
import { expect } from "chai";

describe("call_a", () => {
  it("call src function", () => {
    const v = callFromA();

    expect(v).equal(2);
  });
});
