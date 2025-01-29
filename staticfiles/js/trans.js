const transportData = {
    bus: {
        routes: [
            { from: "Vijayawada", to: "Tirupati", timings: ["5:00 AM", "10:00 AM", "2:00 PM", "8:00 PM", "10:30 PM"], price: "₹850", duration: "12 hours" },
            { from: "Visakhapatnam", to: "Vijayawada", timings: ["6:00 AM", "2:00 PM", "10:00 PM"], price: "₹800", duration: "8 hours" },
            { from: "Vijayawada", to: "Guntur", timings: ["7:00 AM", "9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"], price: "₹200", duration: "1 hour" },
            { from: "Guntur", to: "Tirupati", timings: ["6:30 AM", "2:30 PM", "9:30 PM"], price: "₹750", duration: "11 hours" },
            { from: "Visakhapatnam", to: "Tirupati", timings: ["4:00 PM", "8:00 PM"], price: "₹1200", duration: "18 hours" },
            { from: "Kurnool", to: "Vijayawada", timings: ["7:30 AM", "3:30 PM", "11:00 PM"], price: "₹500", duration: "6 hours" },
            { from: "Anantapur", to: "Tirupati", timings: ["8:00 AM", "4:00 PM", "11:30 PM"], price: "₹400", duration: "5 hours" },
            { from: "Kakinada", to: "Vijayawada", timings: ["6:00 AM", "12:00 PM", "6:00 PM"], price: "₹350", duration: "4 hours" }
        ]
    },
    train: {
        routes: [
            { from: "Vijayawada", to: "Tirupati", timings: ["6:00 AM", "12:30 PM", "7:00 PM", "11:00 PM"], price: "₹750", duration: "10 hours" },
            { from: "Visakhapatnam", to: "Vijayawada", timings: ["5:00 AM", "2:30 PM", "11:30 PM"], price: "₹600", duration: "7 hours" },
            { from: "Vijayawada", to: "Guntur", timings: ["6:30 AM", "8:30 AM", "10:30 AM", "2:30 PM", "4:30 PM"], price: "₹150", duration: "45 minutes" },
            { from: "Guntur", to: "Tirupati", timings: ["5:30 AM", "1:30 PM", "8:30 PM"], price: "₹650", duration: "9 hours" },
            { from: "Visakhapatnam", to: "Tirupati", timings: ["3:00 PM", "9:00 PM"], price: "₹1000", duration: "15 hours" },
            { from: "Kurnool", to: "Vijayawada", timings: ["6:30 AM", "2:30 PM", "10:00 PM"], price: "₹450", duration: "5 hours" },
            { from: "Anantapur", to: "Tirupati", timings: ["7:00 AM", "3:00 PM", "10:30 PM"], price: "₹350", duration: "4 hours" },
            { from: "Kakinada", to: "Vijayawada", timings: ["5:30 AM", "11:30 AM", "5:30 PM"], price: "₹300", duration: "3.5 hours" }
        ]
    }
};

function findTransport() {
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const transportType = document.querySelector('input[name="transport"]:checked').value;
    const resultsContainer = document.getElementById('results');

    if (!source || !destination) {
        showError("Please select both source and destination");
        return;
    }

    if (source === destination) {
        showError("Source and destination cannot be the same");
        return;
    }

    const routes = findRoutes(source, destination, transportType);
    displayResults(routes, transportType);
}

function findRoutes(source, destination, transportType) {
    return transportData[transportType].routes.filter(route => 
        route.from === source && route.to === destination
    );
}

function displayResults(routes, transportType) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    resultsContainer.className = 'results-container active';

    if (routes.length === 0) {
        resultsContainer.innerHTML = `<p class="error">No direct ${transportType} services found for this route.</p>`;
        return;
    }

    routes.forEach(route => {
        const card = document.createElement('div');
        card.className = 'transport-card';
        card.innerHTML = `
            <h3>${transportType.toUpperCase()} Details</h3>
            <div class="transport-details">
                <p><strong>From:</strong> ${route.from}</p>
                <p><strong>To:</strong> ${route.to}</p>
                <p><strong>Price:</strong> ${route.price}</p>
                <p><strong>Duration:</strong> ${route.duration}</p>
                <p><strong>Available Timings:</strong></p>
                <ul>
                    ${route.timings.map(time => `<li>${time}</li>`).join('')}
                </ul>
            </div>
        `;
        resultsContainer.appendChild(card);
    });
}

function showError(message) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.className = 'results-container active';
    resultsContainer.innerHTML = `<p class="error">${message}</p>`;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Clear any previous selections
    document.getElementById('source').value = '';
    document.getElementById('destination').value = '';
});