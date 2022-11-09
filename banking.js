function getInputValue(inputId)
{
    const inputField  = document.getElementById(inputId);
    const inputAmountText =inputField .value;
    const depositAmount =parseFloat(inputAmountText);
    inputField .value ='';
    return depositAmount;
}
function updateTotalFild(totalFieldId, Amount){
    const totalFild =document.getElementById(totalFieldId);
    const totalText = totalFild.innerText;
    const previousTotal = parseFloat(totalText);
    totalFild.innerText= Amount + previousTotal;
}
function updateBalance(blanceFild, Amount, isAdd){
    const balanceTotal = document.getElementById(blanceFild);  
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
   if(isAdd == true)
   {
    balanceTotal.innerText = previousBalanceTotal + Amount;
   }
   else{
    balanceTotal.innerText = previousBalanceTotal - Amount;
   }
   
}

document.getElementById('deposit-button').addEventListener('click',function(){
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText =depositInput.value;
    // const depositAmount =parseFloat(depositAmountText);
   
    //get current deposit
//     const depositTotal =document.getElementById('deposit-total');
//    const depositTotalText = depositTotal.innerText;
//    const previousDepositTotal = parseFloat(depositTotalText);
//    depositTotal.innerText= depositAmount + previousDepositTotal;

 
   //clr input fild
   //depositInput.value ='';

   //balance ubdt
//    const balanceTotal = document.getElementById('balance-total');  
//    const balanceTotalText = balanceTotal.innerText;
//    const previousBalanceTotal = parseFloat(balanceTotalText);
//    balanceTotal.innerText = previousBalanceTotal + depositAmount;

const depositAmount =getInputValue('deposit-input');
if(depositAmount>0)
{
    updateTotalFild('deposit-total',depositAmount);
    updateBalance('balance-total',depositAmount,true)
}


});


//withdraw 
document.getElementById('withdraw-button').addEventListener('click',function(){
    // const WithdrawInput = document.getElementById('withdraw-input');
    // const WithdrawInputText = WithdrawInput.value;
    // const WithdrawInputAmount = parseFloat(WithdrawInputText);
   

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawTotalText);
    // withdrawTotal.innerText=WithdrawInputAmount + previousWithdrawTotal;
  

    //clr withdraw input
   //WithdrawInput.value='';

    // updt blance
//     const balanceTotal = document.getElementById('balance-total');  
//    const balanceTotalText = balanceTotal.innerText;
//    const previousBalanceTotal = parseFloat(balanceTotalText);
//     balanceTotal.innerText = previousBalanceTotal - WithdrawInputAmount ;
const WithdrawInputAmount = getInputValue('withdraw-input');
if(WithdrawInputAmount>0)
{
    updateTotalFild('withdraw-total', WithdrawInputAmount);
    updateBalance('balance-total',WithdrawInputAmount,false);
}

})

