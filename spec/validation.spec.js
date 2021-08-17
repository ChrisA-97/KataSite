var { validateHexSubmit } = require('../public/js/validation')

describe('validate hex submit' , () => {

    it("should return true if the input is a valid hex value", () => {
        let goodInput1 = "#AABB33"
        let goodInput2 = "#123456"
        let badInput1 = "asdf"
        let badInput2 = "#123"
        let badInput3 = "AABB33"
        let badInput4 = "AA#BB12"

        expect(validateHexSubmit(goodInput1)).toBe(true)
        expect(validateHexSubmit(goodInput2)).toBe(true)

        expect(validateHexSubmit(badInput1)).toBe(false)
        expect(validateHexSubmit(badInput2)).toBe(false)
        expect(validateHexSubmit(badInput3)).toBe(false)
        expect(validateHexSubmit(badInput4)).toBe(false)
    })
})