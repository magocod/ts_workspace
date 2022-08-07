import { callFromSrc } from "../src"

describe("call_packages", () => {
  it("call src function", () => {
    const v = callFromSrc();

    expect(v).toEqual({
      src: 1,
      a: 2,
      alias_a: 2,
      b: 3
    });
  });
});
