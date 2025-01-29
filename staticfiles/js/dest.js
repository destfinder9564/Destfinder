const destinations = [
    {
        id: 1,
        name: "Visakhapatnam",
        image: "https://images.unsplash.com/photo-1624457545029-c9e32d27bf8f",
        description: "Known for its beautiful beaches and industrial harbor",
        places: [
            {
                name: "RK Beach",
                description: "Popular beach with the iconic submarine museum",
                image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd"
            },
            {
                name: "Kailasagiri",
                description: "Hill-top park offering panoramic views of the city",
                image: "https://images.unsplash.com/photo-1623846736569-a75d74af6814"
            }
        ]
    },
    {
        id: 2,
        name: "Tirupati",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
        description: "Famous for Sri Venkateswara Temple and spiritual tourism",
        places: [
            {
                name: "Tirumala Temple",
                description: "One of the most visited religious places in the world",
                image: "https://images.unsplash.com/photo-1583977637552-d187fc448c1e"
            }
        ]
    },
    {
        id: 3,
        name: "Vijayawada",
        image: "https://images.unsplash.com/photo-1623060386759-861200c55f93",
        description: "Commercial center and cultural capital of Andhra Pradesh",
        places: [
            {
                name: "Kanaka Durga Temple",
                description: "Historic temple on Indrakeeladri hill",
                image: "https://images.unsplash.com/photo-1624457544175-16c8400c10f7"
            }
        ]
    },
    {
        id: 4,
        name: "Araku Valley",
        image: "https://images.unsplash.com/photo-1599689019338-50deb475f380",
        description: "Hill station famous for coffee plantations and tribal culture",
        places: [
            {
                name: "Borra Caves",
                description: "Ancient limestone caves with stunning formations",
                image: "https://images.unsplash.com/photo-1591025207163-942350e47db2"
            }
        ]
    },
    {
        id: 5,
        name: "Amaravati",
        image: "https://images.unsplash.com/photo-1588084603723-41322210d44d",
        description: "Ancient Buddhist site and capital region",
        places: [
            {
                name: "Amaravati Stupa",
                description: "Historic Buddhist monument",
                image: "https://images.unsplash.com/photo-1588084603723-41322210d44d"
            }
        ]
    },
    {
        id: 6,
        name: "Srisailam",
        image: "https://images.unsplash.com/photo-1518002054494-3a6f23e2c05f",
        description: "Temple town and wildlife sanctuary",
        places: [
            {
                name: "Mallikarjuna Temple",
                description: "One of the 12 Jyotirlinga temples",
                image: "https://images.unsplash.com/photo-1583977637552-d187fc448c1e"
            }
        ]
    },
    {
        id: 7,
        name: "Anantapur",
        image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd",
        description: "Historic city with unique architecture",
        places: [
            {
                name: "Lepakshi Temple",
                description: "Ancient temple with remarkable paintings",
                image: "https://images.unsplash.com/photo-1583977637552-d187fc448c1e"
            }
        ]
    },
    {
        id: 8,
        name: "Guntur",
        image: "https://images.unsplash.com/photo-1588084603723-41322210d44d",
        description: "Known for agriculture and educational institutions",
        places: [
            {
                name: "Uppalapadu Bird Sanctuary",
                description: "Home to various migratory birds",
                image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890"
            }
        ]
    },
    {
        id: 9,
        name: "Kakinada",
        image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd",
        description: "Port city with beautiful beaches",
        places: [
            {
                name: "Hope Island",
                description: "Natural sand bar with pristine beaches",
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            }
        ]
    },
    {
        id: 10,
        name: "Nellore",
        image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd",
        description: "Coastal city known for agriculture and temples",
        places: [
            {
                name: "Pulicat Lake",
                description: "Second largest brackish water lake in India",
                image: "https://images.unsplash.com/photo-1580182152039-9e9fc8c5e636"
            }
        ]
    }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('destinationSelect');
    const content = document.getElementById('destinationContent');
    const transportBtn = document.getElementById('transportBtn');
    const guideBtn = document.getElementById('guideBtn');
    const transportInfo = document.getElementById('transportInfo');
    const guideInfo = document.getElementById('guideInfo');

    // Populate select options
    destinations.forEach(destination => {
        const option = document.createElement('option');
        option.value = destination.id;
        option.textContent = destination.name;
        select.appendChild(option);
    });

    // Handle destination selection
    select.addEventListener('change', (e) => {
        const selectedId = parseInt(e.target.value);
        const destination = destinations.find(d => d.id === selectedId);
        
        if (destination) {
            updateDestinationContent(destination);
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }

        // Reset info boxes
        transportInfo.classList.add('hidden');
        guideInfo.classList.add('hidden');
    });

    // Toggle transport info
    transportBtn.addEventListener('click', () => {
        transportInfo.classList.toggle('hidden');
        guideInfo.classList.add('hidden');
    });

    // Toggle guide info
    guideBtn.addEventListener('click', () => {
        guideInfo.classList.toggle('hidden');
        transportInfo.classList.add('hidden');
    });
});

function updateDestinationContent(destination) {
    // Update hero section
    document.getElementById('destinationImage').src = destination.image;
    document.getElementById('destinationImage').alt = destination.name;
    document.getElementById('destinationName').textContent = destination.name;
    document.getElementById('destinationDescription').textContent = destination.description;

    // Update places
    const placesList = document.getElementById('placesList');
    placesList.innerHTML = '';

    destination.places.forEach(place => {
        const placeCard = document.createElement('div');
        placeCard.className = 'place-card';
        placeCard.innerHTML = `
            <img src="${place.image}" alt="${place.name}" class="place-image">
            <div class="place-info">
                <h3 class="place-title">${place.name}</h3>
                <p class="place-description">${place.description}</p>
            </div>
        `;
        placesList.appendChild(placeCard);
    });
}