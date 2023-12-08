import { expect } from "chai"
import toInteger from "../src/toInteger.js"

describe("toInteger", () => {
  it("should return integer for integer", () => {
    expect(toInteger(1)).to.equal(1)
    expect(toInteger(123)).to.equal(123)
    expect(toInteger(0)).to.equal(0)
    expect(toInteger(-0)).to.equal(0)
    expect(toInteger(-123)).to.equal(-123)
  })

  it("should return integer for float", () => {
    expect(toInteger(1.5)).to.equal(1)
    expect(toInteger(123.456)).to.equal(123)
    expect(toInteger(0.0)).to.equal(0)
    expect(toInteger(-0.0)).to.equal(0)
    expect(toInteger(-123.456)).to.equal(-123)
  })

  it("should return integer for string", () => {
    expect(toInteger("1")).to.equal(1)
    expect(toInteger("123")).to.equal(123)
    expect(toInteger("0")).to.equal(0)
    expect(toInteger("-0")).to.equal(0)
    expect(toInteger("-123")).to.equal(-123)
  })

  it("should return integer for boolean", () => {
    expect(toInteger(true)).to.equal(1)
    expect(toInteger(false)).to.equal(0)
  })

  it("should return integer for null", () => {
    expect(toInteger(null)).to.equal(0)
  })

  it("should return integer for undefined", () => {
    expect(toInteger(undefined)).to.equal(0)
  })

  it("should return integer for NaN", () => {
    expect(toInteger(NaN)).to.equal(0)
  })

  it("should return integer for Infinity", () => {
    expect(toInteger(Infinity)).to.equal(1.7976931348623157e308)
  })

  it("should return integer for object", () => {
    expect(toInteger({ a: 1, b: 2 })).to.equal(0)
  })
})
