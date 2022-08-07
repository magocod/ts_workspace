import { callFromB } from "../src"

describe("call_b", () => {
  const name = "js";

  it("call src function", () => {
    const v = callFromB();

    expect(v).toEqual(3);
  });
});
