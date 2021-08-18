const handleVowelSubmit = (event) => {
    event.preventDefault()
    let output = document.getElementById('vowelOutput')
    let vowelValue = document.getElementById('vowelInput').value

    if(vowelValue != "") {
        document.getElementById('vowelInput').classList.remove('is-invalid')
        document.getElementById('vowelInput').classList.add("is-valid")
    } else {
        document.getElementById('vowelInput').classList.remove('is-valid')
        document.getElementById('vowelInput').classList.add("is-invalid")
        return false
    }

    const options = {
        method: 'GET',
        url: 'https://personal-kata-site.herokuapp.com/vowelCount',
        params: {message: vowelValue},
        headers: {'Content-Type': 'application/json'}
      };
      
      axios.request(options).then(function (response) {
        output.innerHTML = response.data.result
      }).catch(function (error) {
        console.error(error);
      });
}

const handleIncrementSubmit = (event) => {
    event.preventDefault()
    let output = document.getElementById('incrementOutput')
    let incrementValue
    if (output.innerHTML == "") {
        incrementValue = document.getElementById("incrementInput").value
    } else {
        incrementValue = document.getElementById('incrementOutput').innerHTML
    }

    if(incrementValue != "") {
        document.getElementById('incrementInput').classList.remove('is-invalid')
        document.getElementById('incrementInput').classList.add("is-valid")
    } else {
        document.getElementById('incrementInput').classList.remove('is-valid')
        document.getElementById('incrementInput').classList.add("is-invalid")
        return false
    }

    const options = {
        method: 'GET',
        url: 'https://personal-kata-site.herokuapp.com/incrementString',
        params: {message: incrementValue},
        headers: {'Content-Type': 'application/json'}
      };
      
      axios.request(options).then(function (response) {
        output.innerHTML = response.data.result
      }).catch(function (error) {
        console.error(error);
      });
}

const handleHexSubmit = (event) => {
    event.preventDefault()

    let colorOutput = document.getElementById('hexColor')
    let redOutput = document.getElementById('red')
    let greenOutput = document.getElementById('green')
    let blueOutput = document.getElementById('blue')

    let hexValue = document.getElementById('hexInput').value
    
    let isValid = validateHexSubmit(hexValue)

    if(isValid) {
        document.getElementById('hexInput').classList.remove('is-invalid')
        document.getElementById('hexInput').classList.add("is-valid")
    } else {
        document.getElementById('hexInput').classList.remove('is-valid')
        document.getElementById('hexInput').classList.add("is-invalid")
        return false
    }
    const options = {
        method: 'GET',
        url: 'https://personal-kata-site.herokuapp.com/hexValue',
        params: {message: hexValue},
        headers: {'Content-Type': 'application/json'}
      };
      
      axios.request(options).then(function (response) {
        let result = response.data.result
            colorOutput.style.color = hexValue
            redOutput.innerHTML = result.r
            greenOutput.innerHTML = result.g
            blueOutput.innerHTML = result.b
      }).catch(function (error) {
        console.error(error);
      });
}
