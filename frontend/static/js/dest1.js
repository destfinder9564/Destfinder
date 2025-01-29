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


const destinations = {
    "Visakhapatnam": {
        overview: "A coastal city known for its beaches and cultural landmarks.",
        places: [
            { 
                name: "R.K. Beach", 
                distance: "5 km", 
                image: "https://via.placeholder.com/280x180?text=RK+Beach", 
                overview: "A popular beach with beautiful views and a relaxing atmosphere." 
            },
            { 
                name: "Rushikonda Beach", 
                distance: "8 km", 
                image: "https://via.placeholder.com/280x180?text=Rushikonda+Beach", 
                overview: "A scenic beach known for water sports and its clean surroundings." 
            }
        ]
    },
    "Vijayawada": {
        overview: "A city known for its temples and the Krishna River.",
        places: [
            { 
                name: "Kanaka Durga Temple", 
                distance: "3 km", 
                image: "https://via.placeholder.com/280x180?text=Durga+Temple", 
                overview: "A famous temple located atop a hill." 
            },
            { 
                name: "Prakasam Barrage", 
                distance: "2 km", 
                image: "https://via.placeholder.com/280x180?text=Prakasam+Barrage", 
                overview: "A scenic dam over the Krishna River." 
            }
        ]
    }
};

document.getElementById("submit-btn").addEventListener("click", () => {
    const city = document.getElementById("city").value;
    const destinationInfo = document.getElementById("destination-info");
    const options = document.getElementById("options");
    destinationInfo.innerHTML = "";

    if (city && destinations[city]) {
        const { overview, places } = destinations[city];

        const cityTitle = document.createElement("h2");
        cityTitle.textContent = city;
        destinationInfo.appendChild(cityTitle);

        const cityOverview = document.createElement("p");
        cityOverview.textContent = overview;
        destinationInfo.appendChild(cityOverview);

        places.forEach(place => {
            const placeCard = `
                <div class="card">
                    <img src="${place.image}" alt="${place.name}">
                    <div class="card-content">
                        <h3>${place.name}</h3>
                        <p>${place.overview}</p>
                        <p class="distance">Distance: ${place.distance}</p>
                    </div>
                </div>
            `;
            destinationInfo.innerHTML += placeCard;
        });

        // Show the buttons after displaying destination details
        options.style.display = "flex";
    } else {
        destinationInfo.innerHTML = "<p>Please select a valid city.</p>";
        options.style.display = "none"; // Hide buttons if no valid city is selected
    }
});
