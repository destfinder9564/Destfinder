function calculateBudget(event) {
    event.preventDefault();

    // Get input values
    const destination = document.getElementById('destination').value;
    const days = parseInt(document.getElementById('days').value);
    const transportation = document.getElementById('transportation').value;
    const transportCost = parseFloat(document.getElementById('transportCost').value);
    const accommodation = parseFloat(document.getElementById('accommodation').value);
    const foodCost = parseFloat(document.getElementById('foodCost').value);
    const guideCost = parseFloat(document.getElementById('guideCost').value);

    // Calculate totals
    const accommodationTotal = accommodation * days;
    const foodTotal = foodCost * days;
    const totalBudget = transportCost + accommodationTotal + foodTotal + guideCost;

    // Update the summary
    document.getElementById('transportationTotal').textContent = formatCurrency(transportCost);
    document.getElementById('accommodationTotal').textContent = formatCurrency(accommodationTotal);
    document.getElementById('foodTotal').textContent = formatCurrency(foodTotal);
    document.getElementById('guideTotal').textContent = formatCurrency(guideCost);
    document.getElementById('totalBudget').textContent = formatCurrency(totalBudget);

    // Show the result with animation
    const result = document.getElementById('result');
    result.style.opacity = '0';
    result.style.display = 'block';
    setTimeout(() => {
        result.style.opacity = '1';
    }, 10);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
}

// Add input validation
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value < 0) {
            this.value = 0;
        }
    });
});

// Initialize the form
document.getElementById('budgetForm').reset();