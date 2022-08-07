import { callFromB } from "../src"

describe("call_b", () => {
  it("call src function", () => {
    const v = callFromB();

    expect(v).toEqual(3);
  });
});
