document.getElementById('btn-deposit').addEventListener('click', function () {
    /*  Deposit Field Complete Start */
    const depositField = document.getElementById('deposit-field');
    const newDepositvalueString = depositField.value;
    const newDepositvalue = parseFloat(newDepositvalueString);
    depositField.value = '';
    if (isNaN(newDepositvalue)) {
        alert('Please Provide Your Deposit Amount')
        return;
    }
    /* Deposit Field Complete End */

    /* deposit Total added complete Start */
    const addDeposit = document.getElementById('deposit-total');
    const previousDepositValueString = addDeposit.innerText;
    const previousDepositValue = parseFloat(previousDepositValueString);

    const newDepositTotal = previousDepositValue + newDepositvalue;
    addDeposit.innerText = newDepositTotal;
    /* deposit Total added complete End */

    /* deposit Total Balance Box Add Complete Start */
    const addDepositBalance = document.getElementById('balance-total');
    const depositBalanceValueString = addDepositBalance.innerText;
    const depositBalanceValue = parseFloat(depositBalanceValueString);

    const depositCurrentBalance = depositBalanceValue + newDepositvalue;
    addDepositBalance.innerText = depositCurrentBalance;

    /* deposit Total Balance Box Add Complete End */
})


/* Get Start btn */
