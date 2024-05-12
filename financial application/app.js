// let incomeHistory = [];
// let expenseHistory = [];

// function recordIncome () {    
//     let amount = parseFloat(document.getElementById('inputField').value);
//     if(!isNaN(amount)) {
//         incomeHistory.push(amount);
//         updateSummary();
//     } else {
//         alert('please enter a valid amount!');
//     }
// }

// function recordExpense() {
//     let amount = parseFloat(document.getElementById('inputField').value);
//     if(!isNaN(amount)) {
//         expenseHistory.push(amount);
//         updateSummary();
//     } else {
//         alert('please enter a valid amountQ!');
    
//     }
// }

// function updateSummary() {
//     let totalIncome = incomeHistory.reduce((total, income) => total + income, 0);
//     let totalExpense = expenseHistory.reduce((total, expense) => total + expense, 0);
//     let savings = totalIncome - totalExpense;

//     document.getElementById('totalincome').textContent = totalIncome.toFixed(2);
//     document.getElementById('totalexpense').textContent = totalExpense.toFixed(2);
//     document.getElementById('savings').textContent = savings.toFixed(2);
// }
let incomeHistory = [];
        let expenseHistory = [];

        function recordIncome() {
            let amount = parseFloat(document.getElementById('inputField').value);
            if (!isNaN(amount)) {
                incomeHistory.push(amount);
                updateSummary();
            } else {
                alert('Please enter a valid amount!');
            }
        }

        function recordExpense() {
            let amount = parseFloat(document.getElementById('inputField').value);
            if (!isNaN(amount)) {
                expenseHistory.push(amount);
                updateSummary();
            } else {
                alert('Please enter a valid amount!');
            }
        }

        function updateSummary() {
            let totalIncome = incomeHistory.reduce((total, income) => total + income, 0);
            let totalExpense = expenseHistory.reduce((total, expense) => total + expense, 0);
            let savings = totalIncome - totalExpense;

            document.getElementById('totalIncome').textContent = totalIncome.toFixed(2);
            document.getElementById('totalExpense').textContent = totalExpense.toFixed(2);
            document.getElementById('savings').textContent = savings.toFixed(2);
        }