
document.getElementById('bnt-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('depositField')
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    if(isNaN(newDepositAmount)){
        alert('please provide a valid number');
        return
    }


    const depositTotalElement = document.getElementById('deposit-total');
    const previewDepositTotalString = depositTotalElement.innerText;
    const previewDepositTotal = parseFloat(previewDepositTotalString);
    const currentDepositTotal = previewDepositTotal + newDepositAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const previewBalanceTotalString = balanceTotalElement.innerText;
    const previewBalanceTotal = parseFloat(previewBalanceTotalString)
    const currentBalanceTotal = previewBalanceTotal +  newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;
    balanceTotalElement.innerText = currentBalanceTotal;


    depositField.value = '';

    // console.log(depositTotal)
})