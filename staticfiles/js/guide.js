const destinations = {
    tirupati: {
        name: "Tirupati",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1000",
        guides: [
            {
                name: "Ramesh Kumar",
                phone: "+91-9876543210",
                email: "ramesh@example.com",
                languages: ["Telugu", "English", "Tamil"],
                experience: 8,
                rating: 4.8
            },
            {
                name: "Priya Reddy",
                phone: "+91-9876543211",
                email: "priya@example.com",
                languages: ["Telugu", "English", "Hindi"],
                experience: 6,
                rating: 4.7
            }
        ]
    },
    vizag: {
        name: "Visakhapatnam",
        image: "https://images.unsplash.com/photo-1623677375828-30c246f6a338?auto=format&fit=crop&q=80&w=2000",
        guides: [
            {
                name: "Suresh Babu",
                phone: "+91-9876543212",
                email: "suresh@example.com",
                languages: ["Telugu", "English"],
                experience: 10,
                rating: 4.9
            },
            {
                name: "Lakshmi Devi",
                phone: "+91-9876543213",
                email: "lakshmi@example.com",
                languages: ["Telugu", "English", "Sanskrit"],
                experience: 7,
                rating: 4.6
            }
        ]
    },
    araku: {
        name: "Araku Valley",
        image: "https://images.unsplash.com/photo-1544134243-c4ea2d45c42d?auto=format&fit=crop&q=80&w=2000",
        guides: [
            {
                name: "Ravi Kiran",
                phone: "+91-9876543214",
                email: "ravi@example.com",
                languages: ["Telugu", "English", "Tribal dialects"],
                experience: 9,
                rating: 4.8
            }
        ]
    },
    amaravati: {
        name: "Amaravati",
        image: "https://images.unsplash.com/photo-1623677375828-30c246f6a338?auto=format&fit=crop&q=80&w=2000",
        guides: [
            {
                name: "Krishna Murthy",
                phone: "+91-9876543215",
                email: "krishna@example.com",
                languages: ["Telugu", "English", "Sanskrit"],
                experience: 12,
                rating: 4.9
            }
        ]
    },
    anantapur: {
        name: "Anantapur",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=2000",
        guides: [
            {
                name: "Venkatesh",
                phone: "+91-9876543216",
                email: "venkatesh@example.com",
                languages: ["Telugu", "Kannada", "English"],
                experience: 5,
                rating: 4.5
            }
        ]
    },
    srisailam: {
        name: "Srisailam",
        image: "https://images.unsplash.com/photo-1623677375828-30c246f6a338?auto=format&fit=crop&q=80&w=2000",
        guides: [
            {
                name: "Shiva Kumar",
                phone: "+91-9876543217",
                email: "shiva@example.com",
                languages: ["Telugu", "English", "Sanskrit"],
                experience: 15,
                rating: 4.9
            }
        ]
    },
    gandikota: {
        name: "Gandikota",
        image: "https://images.unsplash.com/photo-1623677375828-30c246f6a338?auto=format&fit=crop&q=80&w=2000",
        guides: [
            {
                name: "Mahesh Babu",
                phone: "+91-9876543218",
                email: "mahesh@example.com",
                languages: ["Telugu", "English"],
                experience: 6,
                rating: 4.7
            }
        ]
    },
    konark: {
        name: "Konark Beach",
        image: "https://images.unsplash.com/photo-1623677375828-30c246f6a338?auto=format&fit=crop&q=80&w=2000",
        guides: [
            {
                name: "Surya Prakash",
                phone: "+91-9876543219",
                email: "surya@example.com",
                languages: ["Telugu", "English"],
                experience: 4,
                rating: 4.6
            }
        ]
    },
    horsley: {
        name: "Horsley Hills",
        image: "https://images.unsplash.com/photo-1623677375828-30c246f6a338?auto=format&fit=crop&q=80&w=2000",
        guides: [
            {
                name: "Rajesh Kumar",
                phone: "+91-9876543220",
                email: "rajesh@example.com",
                languages: ["Telugu", "English", "Tamil"],
                experience: 7,
                rating: 4.8
            }
        ]
    },
    lepakshi: {
        name: "Lepakshi",
        image: "https://images.unsplash.com/photo-1623677375828-30c246f6a338?auto=format&fit=crop&q=80&w=2000",
        guides: [
            {
                name: "Anand Kumar",
                phone: "+91-9876543221",
                email: "anand@example.com",
                languages: ["Telugu", "English", "Kannada"],
                experience: 8,
                rating: 4.7
            }
        ]
    }
};

document.getElementById('findGuides').addEventListener('click', function() {
    const selectedDestination = document.getElementById('destination').value;
    
    if (!selectedDestination) {
        alert('Please select a destination');
        return;
    }

    const destination = destinations[selectedDestination];
    const guidesContainer = document.getElementById('guides-container');
    const destinationTitle = document.getElementById('destination-title');
    const destinationImage = document.getElementById('destination-image');
    const guidesList = document.getElementById('guides-list');

    destinationTitle.textContent = destination.name;
    destinationImage.style.backgroundImage = `url('${destination.image}')`;
    
    guidesList.innerHTML = destination.guides.map(guide => `
        <div class="guide-card">
            <h3>${guide.name}</h3>
            <div class="guide-info">📞 ${guide.phone}</div>
            <div class="guide-info">✉️ ${guide.email}</div>
            <div class="guide-info">🎯 ${guide.experience} years experience</div>
            <div class="guide-languages">
                ${guide.languages.map(lang => `
                    <span class="language-tag">${lang}</span>
                `).join('')}
            </div>
            <div class="rating">★ ${guide.rating}/5.0</div>
        </div>
    `).join('');

    guidesContainer.classList.remove('hidden');
});