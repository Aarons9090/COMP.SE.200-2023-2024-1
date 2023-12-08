import { expect } from "chai"
import map from "../src/map.js"

describe("map", () => {
  it("should return an array of mapped values", () => {
    expect(map([1, 2, 3], x => x * 2)).to.eql([2, 4, 6])
  })

  it("should return an array of mapped values with index", () => {
    expect(map([1, 2, 3], (x, i) => x + i)).to.eql([1, 3, 5])
  })

  it("should return an array of mapped values with string", () => {
    expect(map("abc", x => x + x)).to.eql(["aa", "bb", "cc"])
  })

  it("should return an empty array for null", () => {
    expect(map(null, x => x + x)).to.eql([])
  })

  it("should return an empty array for undefined", () => {
    expect(map(undefined, x => x + x)).to.eql([])
  })

  it("should return an empty array for empty string", () => {
    expect(map("", x => x + x)).to.eql([])
  })

  it("should return an empty array for empty array", () => {
    expect(map([], x => x + x)).to.eql([])
  })
})
