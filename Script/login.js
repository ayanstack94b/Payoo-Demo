

document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault()

    const accountNumber = document.getElementById('account-number').value;

    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);


    if (accountNumber.length === 11) {
        if (convertedPin === 1234 && convertedPin !== 'number') {
            window.location.href = './main.html';
        }
        else {
            alert('Wrong PIN')
        }
    }

    else {
        alert('Incorrect A/C Number')
    }

})