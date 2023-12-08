import { expect } from "chai"
import add from "../src/add.js"

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(1, 2)).to.equal(3)
  })

  it("should add two negative numbers", () => {
    expect(add(-1, -2)).to.equal(-3)
  })

  it("should add a number and a string", () => {
    expect(add(1, "2")).to.equal("12")
  })

  it("should add two strings", () => {
    expect(add("1", "2")).to.equal("12")
  })

  it("should add two numbers in scientific notation", () => {
    expect(add(1e3, 2e3)).to.equal(3000)
  })

  it("should add two numbers in scientific notation", () => {
    expect(add(1e-3, 2e-3)).to.equal(0.003)
  })
})
