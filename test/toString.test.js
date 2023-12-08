import { expect } from "chai"
import toString from "../src/toString.js"

describe("toString", () => {
  it("should return string for string", () => {
    expect(toString("abc")).to.equal("abc")
  })

  it("should return string for number", () => {
    expect(toString(123)).to.equal("123")
  })

  it("should return string for boolean", () => {
    expect(toString(true)).to.equal("true")
    expect(toString(false)).to.equal("false")
  })

  it("should return string for null", () => {
    expect(toString(null)).to.equal("")
  })

  it("should return string for symbol", () => {
    expect(toString(Symbol("abc"))).to.equal("Symbol(abc)")
  })

  it("should return string for array", () => {
    expect(toString([1, 2, 3])).to.equal("1,2,3")
  })

  it("should return string for object", () => {
    expect(toString({ a: 1, b: 2 })).to.equal("[object Object]")
  })
})
