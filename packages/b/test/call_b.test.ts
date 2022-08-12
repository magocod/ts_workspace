import { callFromB, callUUUI } from "../src";

describe("call_b", () => {
  it("call src function", () => {
    const v = callFromB();

    expect(v).toEqual(3);
  });

  it("call local dependencies", () => {
    const v = callUUUI();

    expect(typeof v).toBe("string")
  });
});
