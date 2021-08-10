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