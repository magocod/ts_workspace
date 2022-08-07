import { callFromSrc } from "../src"

describe("call_packages", () => {
  const name = "js";

  it("call src function", () => {
    const v = callFromSrc();

    expect(v).toEqual({
      src: 1
    });
  });
});
