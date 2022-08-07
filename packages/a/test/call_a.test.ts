import { callFromA } from "../src"

describe("call_a", () => {
  it("call src function", () => {
    const v = callFromA();

    expect(v).toEqual(2);
  });
});
