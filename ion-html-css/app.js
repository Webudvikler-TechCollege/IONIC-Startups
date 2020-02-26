// Deklarerer konstanter med DOM elementer
const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const resetBtn = document.querySelector('#btn-reset');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#list-expenses');
const totalExpensesOutput = document.querySelector('#total-amount');
const alertCtrl = document.querySelector('ion-alert-controller');

// Deklarerer var til totale beløb
let totalExpenses = 0;

// Deklarerer funktion til at rense felter med
const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

// Deklarerer funktion til fejl meddelelser
const presentAlert = () => {
    const alert = document.createElement('ion-alert');
    alert.message = "Feltet må ikke være tomt!",
    alert.header = 'Invalid inputs',
    alert.buttons = ['Okay'];
    document.body.appendChild(alert);
    return alert.present();
}

// Eventlistener på submit knap
confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
    
    // Vis fejlmeddelelse hvis felt er tomt
    if(enteredReason.trim() <= 0 ||
        enteredAmount <= 0 || 
        enteredAmount.trim().length <= 0) {
        presentAlert();
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': ' + enteredAmount + ' DKK';
    expensesList.appendChild(newItem);

    // Beregner totalbeløb
    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totalExpenses;

    clear();
});

// Eventlistener på reset knap
resetBtn.addEventListener('click', () => {
    clear();
});