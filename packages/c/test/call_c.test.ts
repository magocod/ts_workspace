import { callFromC, internalCallBFromC } from "../src"
import { expect } from "chai";

describe("call_c", () => {
  it("call src function", () => {
    const v = callFromC();

    expect(v).equal(4);
  });

  it("call other package from src function", () => {
    const v = internalCallBFromC();

    expect(v).equal(3 + 4);
  });
});
