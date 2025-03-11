document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expense-form");
    const categorySelect = document.getElementById("category");
    const amountInput = document.getElementById("amount");

    // Initial data for the chart
    let dailyExpenseData = {
        Food: 0,
        Travel: 0,
        Entertainment: 0
    };

    let monthlyExpenseData = {
        January: 0,
        February: 0,
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0
    };

    // Chart.js setup for Daily Expense Chart
    const dailyCtx = document.getElementById("dailyExpenseChart").getContext("2d");
    const dailyExpenseChart = new Chart(dailyCtx, {
        type: "bar",
        data: {
            labels: Object.keys(dailyExpenseData),
            datasets: [{
                label: "Expenses ($)",
                data: Object.values(dailyExpenseData),
                backgroundColor: [
                    "#FF6384", "#36A2EB", "#FFCE56"
                ],
                borderColor: "#333",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: "Today's Expenses",
                    font: {
                        size: 16
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Chart.js setup for Monthly Expense Chart
    const monthlyCtx = document.getElementById("monthlyExpenseChart").getContext("2d");
    const monthlyExpenseChart = new Chart(monthlyCtx, {
        type: "line",
        data: {
            labels: Object.keys(monthlyExpenseData),
            datasets: [
                {
                    label: 'Travel Expenses (in ₹)',
                    data: [2000, 2500, 3000, 2800, 3500, 4000, 3800],
                    borderColor: '#4285f4',
                    backgroundColor: 'rgba(66, 133, 244, 0.2)',
                    borderWidth: 2,
                    fill: true,
                },
                {
                    label: 'Food (in ₹)',
                    data: [1500, 1800, 2000, 2200, 2500, 2800, 3000],
                    borderColor: '#34a853',
                    backgroundColor: 'rgba(52, 168, 83, 0.2)',
                    borderWidth: 2,
                    fill: true,
                },
                {
                    label: 'Entertainment (in ₹)',
                    data: [1000, 1200, 1500, 1300, 1700, 2000, 1800],
                    borderColor: '#fbbc05',
                    backgroundColor: 'rgba(251, 188, 5, 0.2)',
                    borderWidth: 2,
                    fill: true,
                },
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Expenses by Category',
                    font: {
                        size: 16,
                    }
                },
                legend: {
                    position: 'bottom',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Amount (₹)',
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Month',
                    }
                }
            }
        }
    });

    // Handle form submission
    expenseForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const category = categorySelect.value;
        const amount = parseFloat(amountInput.value);

        if (!isNaN(amount) && amount > 0) {
            expenseData[category] += amount; // Update expense amount
            updateChart();
        }

        expenseForm.reset();
    });

    // Function to update the chart
    function updateChart() {
        expenseChart.data.datasets[0].data = Object.values(expenseData);
        expenseChart.update();
    }
});