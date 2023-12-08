import { expect } from "chai"
import isObjectLike from "../src/isObjectLike.js"

describe("isObjectLike", () => {
  it("should return true for object-like values", () => {
    expect(isObjectLike({})).to.be.true
    expect(isObjectLike([1, 2, 3])).to.be.true
  })

  it("should return false for non-object-like values", () => {
    expect(isObjectLike(Function)).to.be.false
    expect(isObjectLike(null)).to.be.false
  })
})
