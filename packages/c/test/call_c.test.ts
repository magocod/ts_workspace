import { callFromC, internalCallBFromC } from "../src"

describe("call_c", () => {
  it("call src function", () => {
    const v = callFromC();

    expect(v).toEqual(4);
  });

  it("call other package from src function", () => {
    const v = internalCallBFromC();

    expect(v).toEqual(3 + 4);
  });
});
