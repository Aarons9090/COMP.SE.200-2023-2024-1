import { expect } from "chai"
import filter from "../src/filter.js"

describe("filter", () => {
  it("should return an array of elements that satisfy the predicate", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ]

    const result = filter(users, ({ active }) => active)
    expect(result).to.deep.equal([{ user: "barney", active: true }])
  })

  it("should return an empty array if no elements satisfy the predicate", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: true },
    ]

    const result = filter(users, ({ active }) => !active)
    expect(result).to.deep.equal([[]])
  })

  it("should return a new array", () => {
    const array = [1, 2, 3, 4, 5]
    const result = filter(array, () => true)
    expect(result).to.not.equal(array)
  })

  it("should return an empty array if the input is an empty array", () => {
    const result = filter([], () => true)
    expect(result).to.deep.equal([[]])
  })

  it("should return an empty array if the input is null or undefined", () => {
    const result = filter(null, () => true)
    expect(result).to.deep.equal([[]])
  })
})
