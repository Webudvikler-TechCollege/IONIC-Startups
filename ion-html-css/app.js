const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const resetBtn = document.querySelector('#btn-reset');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#list-expenses');
const totalExpensesOutput = document.querySelector('#total-amount');
const alertCtrl = document.querySelector('ion-alert-controller');
let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
    if(enteredReason.trim() <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        alertCtrl.create({
            message: "Feltet må ikke være tomt!",
            header: 'Invalid inputs',
            buttons: ['Okay']
        });
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': ' + enteredAmount + ' DKK';
    expensesList.appendChild(newItem);

    totalExpenses += +enteredAmount;
    console.log(totalExpenses);

    totalExpensesOutput.textContent = totalExpenses;

    clear();
});

resetBtn.addEventListener('click', () => {
    clear();
});