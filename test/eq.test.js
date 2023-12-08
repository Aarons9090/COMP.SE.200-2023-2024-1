import { expect } from "chai"
import eq from "../src/eq.js"

describe("eq", () => {
  it("should return true for equal primitive values", () => {
    expect(eq(1, 1)).to.be.true
    expect(eq("hello", "hello")).to.be.true
    expect(eq(true, true)).to.be.true
  })

  it("should return false for different primitive values", () => {
    expect(eq(1, 2)).to.be.false
    expect(eq("hello", "world")).to.be.false
    expect(eq(true, false)).to.be.false
  })

  it("should return true for equal reference values", () => {
    const obj = { name: "John" }
    const arr = [1, 2, 3]
    expect(eq(obj, obj)).to.be.true
    expect(eq(arr, arr)).to.be.true
  })

  it("should return false for different reference values", () => {
    expect(eq({ name: "John" }, { name: "John" })).to.be.false
    expect(eq([1, 2, 3], [1, 2])).to.be.false
  })
})
