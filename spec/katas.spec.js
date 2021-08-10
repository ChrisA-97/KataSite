var { vowelCount } = require('../katas')

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