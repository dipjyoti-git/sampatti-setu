function calculateBudget() {
    let budget = parseFloat(document.getElementById("budgetInput").value);
    
    if (isNaN(budget) || budget <= 0) {
        alert("Please enter a valid budget amount.");
        return;
    }

    let needs = budget * 0.50;
    let wants = budget * 0.30;
    let savings = budget * 0.20;

    document.getElementById("needsAmount").textContent = `$${needs.toFixed(2)}`;
    document.getElementById("wantsAmount").textContent = `$${wants.toFixed(2)}`;
    document.getElementById("savingsAmount").textContent = `$${savings.toFixed(2)}`;

    document.getElementById("result").classList.remove("hidden");
}
