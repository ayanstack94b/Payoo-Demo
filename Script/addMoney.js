
document.getElementById('add-money-btn').addEventListener('click', function (event) {

    event.preventDefault()
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);

    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin)

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedBalance = parseFloat(mainBalance)
    console.log(typeof convertedBalance)

    if (amount && pin) {
        if (convertedPin === 1234) {
            const sum = convertedBalance + convertedAmount;
            document.getElementById('main-balance').innerText = sum;
            console.log(sum, 'pin is correct')

        }
        else {
            console.log('pin is Incorrect')

        }
    }
    else {
        alert('enter Amount and valid pin')
    }

})