document.getElementById('btn-withdraw').addEventListener('click', function () {
    /* Withdaraw Field Complete Start */
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawBalanceString = withdrawField.value;
    const newWithdrawBalance = parseFloat(newWithdrawBalanceString);
    withdrawField.value = '';
    if (isNaN(newWithdrawBalance)) {
        alert('Please Provide Your Withdraw Amount')
        return;
    }
    /* Withdaraw Field Complete End */

    /* Withdaraw Total added complete */
    const addWithadraw = document.getElementById('withdraw-total');
    const previousWithdrawBalanceString = addWithadraw.innerText;
    const previousWithdrawBalance = parseFloat(previousWithdrawBalanceString);


    /* Withdraw Total Balance Box Cut Complete */
    const cutWithdrawBalance = document.getElementById('balance-total');
    const WithdrawBalanceValueString = cutWithdrawBalance.innerText;
    const WithdrawBalanceValue = parseFloat(WithdrawBalanceValueString);

    if (newWithdrawBalance > WithdrawBalanceValue) {
        alert('Baap er Bank a Ato Taka ney')
        return;
    }

    /* Withdaraw Total added complete */
    const currentWithdrawAndBalance = previousWithdrawBalance + newWithdrawBalance;
    addWithadraw.innerText = currentWithdrawAndBalance;


    /* Withdraw Total Balance Box Cut Complete */
    const totalBalanceCut = WithdrawBalanceValue - newWithdrawBalance;
    cutWithdrawBalance.innerText = totalBalanceCut

})

/* LOGOUT */
document.getElementById('btn-logout').addEventListener('click', function () {
    window.location.href = 'login.html'
})