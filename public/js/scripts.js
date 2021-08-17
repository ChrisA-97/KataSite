const handleVowelSubmit = () => {
    let output = document.getElementById('vowelOutput')
    let vowelValue = document.getElementById('vowelInput').value
    let request = {
        "message": vowelValue
    }
    axios.post("http://localhost:3000/vowelCount", request)
        .then((response) => {
            output.innerHTML = response.data.result 
        })
}

const handleIncrementSubmit = () => {
    let output = document.getElementById('incrementOutput')
    let incrementValue = document.getElementById("incrementInput").value
    let request = {
        "message": incrementValue
    }
    axios.post("http://localhost:3000/incrementString", request)
        .then((response) => {
            output.innerHTML = response.data.result
        })
}

const incrementAgain = () => {
    let output = document.getElementById('incrementOutput')
    let incrementValue = output.innerHTML
    let request = {
        "message": incrementValue
    }
    axios.post("http://localhost:3000/incrementString", request)
        .then((response) => {
            output.innerHTML = response.data.result
        })
}

const handleHexSubmit = () => {
    let colorOutput = document.getElementById('hexColor')
    let redOutput = document.getElementById('red')
    let greenOutput = document.getElementById('green')
    let blueOutput = document.getElementById('blue')
    let hexValue = document.getElementById('hexInput').value
    let request = {
        "message": hexValue
    }
    axios.post("http://localhost:3000/hexValue", request)
        .then((response) => {
            let result = response.data.result
            colorOutput.style.color = hexValue
            redOutput.innerHTML = result.r
            greenOutput.innerHTML = result.g
            blueOutput.innerHTML = result.b
        })
}