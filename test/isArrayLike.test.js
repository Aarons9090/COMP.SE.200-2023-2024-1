import { expect } from "chai"
import isArrayLike from "../src/isArrayLike.js"

describe("isArrayLike", () => {
  it("should return true for array-like values", () => {
    expect(isArrayLike([1, 2, 3])).to.be.true
    expect(isArrayLike("abc")).to.be.true
    expect(isArrayLike([])).to.be.true
  })

  it("should return false for non-array-like values", () => {
    expect(isArrayLike(Function)).to.be.false
    expect(isArrayLike(null)).to.be.false
  })
})
