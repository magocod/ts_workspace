import { callFromA } from "../src"

describe("call_a", () => {
  const name = "js";

  it("call src function", () => {
    const v = callFromA();

    expect(v).toEqual(2);
  });
});
