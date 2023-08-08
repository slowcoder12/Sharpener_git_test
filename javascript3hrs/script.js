const form = document.getElementById('form-content');

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let amount = document.getElementById('amount').value;
    let description = document.getElementById('expenseName').value;
    let category = document.getElementById('category').value;

    var expenses = JSON.parse(localStorage.getItem("Expenses")) || [];

    var newExpense = {
        Amount: amount,
        Description: description,
        Category: category,
    };

    expenses.push(newExpense);

    localStorage.setItem("Expenses", JSON.stringify(expenses));

    addLiFromLocalStorage(newExpense);

    // Reset form fields after adding expense
    document.getElementById('amount').value = '';
    document.getElementById('expenseName').value = '';
    document.getElementById('category').value = '';
});

// Function to load expenses from local storage and populate the list
function loadExpensesFromLocalStorage() {
    var expenses = JSON.parse(localStorage.getItem("Expenses")) || [];

    expenses.forEach(expense => {
        addLiFromLocalStorage(expense);
    });
}

// Call the function to load expenses when the page is loaded
window.addEventListener('load', loadExpensesFromLocalStorage);

function addLiFromLocalStorage(expense) {
    var expensesList = document.getElementById("expenses-list");

    var li = document.createElement("li");
    li.textContent = expense.Amount + " - " + expense.Description + " - " + expense.Category;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Expense";
    deleteButton.className = "btn btn-danger";

    deleteButton.addEventListener("click", function () {
        expensesList.removeChild(li);
        removeExpenseFromLocalStorage(expense.Amount, expense.Description, expense.Category);
    });

    var editButton = document.createElement("button");
    editButton.textContent = "Edit Expense";
    editButton.className = "btn btn-warning";

    editButton.addEventListener("click", function () {
        document.getElementById('amount').value = expense.Amount;
        document.getElementById('expenseName').value = expense.Description;
        document.getElementById('category').value = expense.Category;


        
    });

    li.appendChild(deleteButton);
    li.appendChild(editButton);

    expensesList.appendChild(li);
}

function removeExpenseFromLocalStorage(amount, description, category) {
    var expenses = JSON.parse(localStorage.getItem("Expenses")) || [];

    // Find and remove the expense from the array
    expenses = expenses.filter(expense => !(expense.Amount === amount && expense.Description === description && expense.Category === category));

    // Update local storage with the modified array
    localStorage.setItem("Expenses", JSON.stringify(expenses));
}
