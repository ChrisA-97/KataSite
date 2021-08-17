var { vowelCount, incrementString, hexStringToRGB } = require('../katas')

describe("Vowel Count", () => {
    it("Should return the number of vowels in a given sentence", () => {
        let test1 = "aaabbbccc" //3
        let test2 = "The quick brown fox jumped over the lazy dog" //12
        let test3 = "This sentence should twelve have vowels" //12

        let result1 = vowelCount(test1)
        let result2 = vowelCount(test2)
        let result3 = vowelCount(test3)

        expect(result1).toEqual(3)
        expect(result2).toEqual(12)
        expect(result3).toEqual(12)
    })
})

describe("Increment String", () => {
    it("Should add a one to the end of the string if no number exists", () => {
        let test1 = "aaa"
        let test2 = "foo"
        let test3 = "string"

        let result1 = incrementString(test1)
        let result2 = incrementString(test2)
        let result3 = incrementString(test3)

        expect(result1).toEqual("aaa1")
        expect(result2).toEqual("foo1")
        expect(result3).toEqual("string1")
    })

    it("Should add one to the number at the end of the string if one exists", () => {
        let test1 = "aaa0"
        let test2 = "foo1"
        let test3 = "string123"

        let result1 = incrementString(test1)
        let result2 = incrementString(test2)
        let result3 = incrementString(test3)

        expect(result1).toEqual("aaa1")
        expect(result2).toEqual("foo2")
        expect(result3).toEqual("string124")
    })
})

describe("hexStringtoRGB", () => {
    it("Should convert a hex color value into an object containing it's rgb values", () => {
        let test1 = "#CF1C1C" 
        let test2 = "#63D9CA"
        let test3 = "#910A82"

        let expected1 = {r:207, g:28, b:28}
        let expected2 = {r:99, g:217, b:202}
        let expected3 = {r:145, g:10, b:130}

        expect(hexStringToRGB(test1)).toEqual(expected1)
        expect(hexStringToRGB(test2)).toEqual(expected2)
        expect(hexStringToRGB(test3)).toEqual(expected3)

    })
})