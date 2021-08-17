const validateHexSubmit = (input) => {
    let validChars = ["0" ,"1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f"]

    if(input.includes('#')) {
        let split = input.split("")
        if (split[0] != "#") {
            return false
        }
        if(split.length != 7) {
            return false
        }
        for (let i = 1; i < split.length; i++) {
            if (!validChars.includes(split[i])) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

module.exports = {
    validateHexSubmit: validateHexSubmit
}