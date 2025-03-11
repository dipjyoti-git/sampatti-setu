const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/expensesDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define Expense Schema & Model
const Expense = mongoose.model("Expense", new mongoose.Schema({
    amount: Number,
    date: { type: Date, default: Date.now }
}));

// Add an Expense
app.post("/add-expense", async (req, res) => {
    const { amount } = req.body;
    if (!amount || amount <= 0) return res.status(400).json({ message: "Invalid amount" });

    await new Expense({ amount }).save();
    res.json({ message: "Expense added" });
});

// Get All Expenses
app.get("/expenses", async (req, res) => {
    const expenses = await Expense.find();
    res.json(expenses);
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
