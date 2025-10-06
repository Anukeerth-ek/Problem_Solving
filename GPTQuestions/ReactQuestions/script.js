
const inputBox = document.getElementById('inputBox');

const handleDebounce = (value, timeout) => {
        console.log(value)
    }

inputBox.addEventListener('change', handleDebounce(inputBox.innerText, 3000))