document.getElementById('cashOut-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);

    const amount = document.getElementById('cashout-amount').value;
    const convertedCashoutAmount = parseFloat(amount);

    

})