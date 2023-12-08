import { expect } from "chai"
import memoize from "../src/memoize.js"

describe("memoize", () => {
  it("should return a memoized function", () => {
    const memoized = memoize((a, b) => a + b)
    expect(memoized(1, 2)).to.equal(3)
  })

  it("should return a memoized function with custom resolver", () => {
    const memoized = memoize(
      (a, b) => a + b,
      (a, b) => a * b
    )
    expect(memoized(1, 2)).to.equal(3)
  })

  it("should return a memoized function with custom cache", () => {
    const memoized = memoize(
      (a, b) => a + b,
      undefined,
      () => new Map()
    )
    expect(memoized(1, 2)).to.equal(3)
  })

  it("should return a memoized function with custom cache size", () => {
    const memoized = memoize((a, b) => a + b, undefined, undefined, 1)
    expect(memoized(1, 2)).to.equal(3)
  })
})
