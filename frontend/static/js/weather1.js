const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    menu.classList.add("active");
    gsap.from(".menu", {
        opacity: 0,
        duration: .3
    })

    gsap.from(".menu ul", {
        opacity: 0,
        x: -300
    })
});

close.addEventListener("click", () => {
    menu.classList.remove("active")
});
const apiKey = "c218d2aa126c54faeb01ccb7c71df631";
const destinations = ["Visakhapatnam","Nellore","Vijayawada", "Tirupati", "Rajahmundry", "Guntur"];
const weatherDataCache = {};

const selectElement = document.getElementById("destination-select");
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");
const getWeatherButton = document.getElementById("get-weather-btn");
const weatherResult = document.getElementById("weather-result");
const loadingElement = document.getElementById("loading");

// Populate the destination dropdown
destinations.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    selectElement.appendChild(option);
});

// Fetch and cache weather data
async function preloadWeatherData() {
    loadingElement.classList.remove("hidden");
    for (const city of destinations) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},IN&units=metric&appid=${apiKey}`);
            const data = await response.json();
            weatherDataCache[city] = data;
        } catch (error) {
            console.error(`Failed to fetch weather data for ${city}: ${error}`);
        }
    }
    loadingElement.classList.add("hidden");
}

// Validate dates
function validateDates(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (!startDate || !endDate) {
        alert("Please select both start and end dates!");
        return false;
    }
    if (start > end) {
        alert("Start date cannot be after the end date!");
        return false;
    }
    return true;
}

// Filter and format weather data for specific timings
function filterWeatherData(forecast) {
    const specificTimes = ["09:00:00", "15:00:00", "21:00:00"]; // 9 AM, 3 PM, 9 PM
    return forecast.filter(item => specificTimes.includes(item.dt_txt.split(" ")[1]))
        .map(item => ({
            date: item.dt_txt.split(" ")[0],
            time: item.dt_txt.split(" ")[1],
            temp: item.main.temp,
            description: item.weather[0].description,
            icon: item.weather[0].icon,
        }));
}

// Display weather in horizontal table format
function displayHorizontalWeatherTable(city, forecast) {
    const groupedData = forecast.reduce((acc, item) => {
        if (!acc[item.date]) acc[item.date] = [];
        acc[item.date].push(item);
        return acc;
    }, {});

    const dates = Object.keys(groupedData);
    const timeSlots = ["09:00:00", "15:00:00", "21:00:00"];

    weatherResult.innerHTML = `
        <h2>Weather Forecast for ${city}</h2>
        <table class="weather-table">
            <thead>
                <tr>
                    <th>Time</th>
                    ${dates.map(date => `<th>${new Date(date).toLocaleDateString()}</th>`).join("")}
                </tr>
            </thead>
            <tbody>
                ${timeSlots.map(time => `
                    <tr>
                        <td>${time.slice(0, 5)} ${time === "09:00:00" ? "AM" : time === "21:00:00" ? "PM" : "PM"}</td>
                        ${dates.map(date => {
                            const slot = groupedData[date].find(item => item.time === time);
                            return slot
                                ? `<td>
                                    <p>${slot.temp}°C</p>
                                    <p>${slot.description}</p>
                                    <img src="https://openweathermap.org/img/wn/${slot.icon}.png" alt="${slot.description}">
                                   </td>`
                                : "<td>N/A</td>";
                        }).join("")}
                    </tr>`).join("")}
            </tbody>
        </table>`;
}

// Handle button click
getWeatherButton.addEventListener("click", () => {
    const selectedCity = selectElement.value;
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;

    if (!selectedCity) {
        alert("Please select a city!");
        return;
    }

    if (!validateDates(startDate, endDate)) return;

    const weatherData = weatherDataCache[selectedCity];
    if (weatherData) {
        const filteredForecast = filterWeatherData(weatherData.list);
        const forecastInRange = filteredForecast.filter(item => {
            const date = new Date(item.date);
            return date >= new Date(startDate) && date <= new Date(endDate);
        });

        if (forecastInRange.length > 0) {
            displayHorizontalWeatherTable(selectedCity, forecastInRange);
        } else {
            weatherResult.innerHTML = "<p>No weather data available for the selected dates and times.</p>";
        }
    } else {
        weatherResult.innerHTML = "<p>Weather data is not available for the selected city.</p>";
    }
});

// Preload weather data on page load
document.addEventListener("DOMContentLoaded", preloadWeatherData);
