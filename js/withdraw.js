
document.getElementById('bnt-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdrawField')
    const neWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(neWithdrawAmountString)
    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return
    }


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previewWithdrawTotalString = withdrawTotalElement.innerText;
    const previewWithdrawTotal = parseFloat(previewWithdrawTotalString);
    // const currentWithdrawTotal = previewWithdrawTotal + newWithdrawAmount;
    // withdrawTotalElement.innerText = currentWithdrawTotal;
    


    const balanceTotalElement = document.getElementById('balance-total');
    const previewBalanceTotalString = balanceTotalElement.innerText;
    const previewBalanceTotal = parseFloat(previewBalanceTotalString)
    


    withdrawField.value = '';

    if (newWithdrawAmount > previewBalanceTotal) {
        alert('tor baper bank amount nai');
        return;
    }


    const currentWithdrawTotal = previewWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previewBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;





    // console.log(depositTotal)
})