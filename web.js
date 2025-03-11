let totalExpense = 0;

function addExpense() {
    let expenseInput = document.getElementById("expenseAmount");
    let expenseValue = parseFloat(expenseInput.value);
    
    if (!isNaN(expenseValue) && expenseValue > 0) {
        totalExpense += expenseValue;
        document.getElementById("totalExpense").textContent = totalExpense.toFixed(2);
        expenseInput.value = ""; // Clear input field
    } else {
        alert("Please enter a valid expense amount.");
    }
    
}