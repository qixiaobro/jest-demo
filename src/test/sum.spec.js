
import { sum } from '../js/sum.js'

describe("jest quick start", () => {
  it("test sum function", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
