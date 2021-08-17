const handleVowelSubmit = (event) => {
    event.preventDefault()
    console.log("!!!")
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

const handleIncrementSubmit = (event) => {
    event.preventDefault()
    let output = document.getElementById('incrementOutput')
    let incrementValue
    if (output.innerHTML == "") {
        incrementValue = document.getElementById("incrementInput").value
    } else {
        incrementValue = document.getElementById('incrementOutput').innerHTML
    }
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

const handleHexSubmit = (event) => {
    event.preventDefault()

    let colorOutput = document.getElementById('hexColor')
    let redOutput = document.getElementById('red')
    let greenOutput = document.getElementById('green')
    let blueOutput = document.getElementById('blue')

    let hexValue = document.getElementById('hexInput').value
    
    let isValid = validateHexSubmit(hexValue)

    if(isValid) {
        document.getElementById('hexInput').classList.add("is-valid")
        console.log("im valid")
    } else {
        document.getElementById('hexInput').classList.add("is-invalid")
        document.getElementById('hexInput').style.borderColor = 'red'
        console.log("im not")
        return false
    }
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

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()