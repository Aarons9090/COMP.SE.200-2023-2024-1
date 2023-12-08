import { expect } from "chai"
import upperFirst from "../src/upperFirst.js"

describe("upperFirst", () => {
  it("should return upper from all lower", () => {
    expect(upperFirst("hello")).to.equal("Hello")
  })

  it("should return upper from all upper", () => {
    expect(upperFirst("HELLO")).to.equal("HELLO")
  })

  it("should return empty string", () => {
    expect(upperFirst("")).to.equal("")
  })

  it("should return number string", () => {
    expect(upperFirst("123")).to.equal("123")
  })
})
