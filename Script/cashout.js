document.getElementById('cashOut-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);

    const amount = document.getElementById('cashout-amount').value;
    const convertedCashoutAmount = parseFloat(amount);

    const mainBalance = document.getElementById('main-balance').innerText;
    const covertedMainBal = parseFloat(mainBalance);

    if (convertedPin === 1234) {
        const sum = covertedMainBal - convertedCashoutAmount;
        console.log(sum)
        const mainBalance = document.getElementById('main-balance').innerText = sum
    }
    else {
        alert('enter valid pin')
    }

})