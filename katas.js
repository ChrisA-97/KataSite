// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

const vowelCount = (str) => {
    let regex = /[aeiou]/g
    return (str.match(regex) || []).length
}

// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

function incrementString (strng) {
    const regex = new RegExp('\d*', 'g');
    if (!/\d/.test(strng)) {
      return `${strng}1`
    } else {
      let split = strng.split(/(\d*$)/)
      let newNumber = parseInt(split[1], 10) + 1
      return `${split[0]}${newNumber}`
    }
  }

//When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:
//Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
//Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
function hexStringToRGB(hexString) {
    let split = hexString.split("")
    let rStr = split[1] + split[2]
    let gStr = split[3] + split[4]
    let bStr = split[5] + split[6]
  
    return {
      r: parseInt(rStr, 16),
      g: parseInt(gStr, 16),
      b: parseInt(bStr, 16)
    } 
  }
  

module.exports = {
    vowelCount: vowelCount,
    incrementString: incrementString,
    hexStringToRGB: hexStringToRGB
}