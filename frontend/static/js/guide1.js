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
const guidesData = {
    Visakhapatnam: [
        {
            id: 1,
            name: "Ravi Kumar",
            rating: 4.9,
            languages: ["English", "Telugu", "Hindi"],
            experience: 12,
            specialties: ["Heritage Sites", "Local Cuisine", "Beach Tours"],
            phone: "+91 9876543210",
            email: "ravi@localguides.com"
        }
    ],
    Tirupati: [
        {
            id: 2,
            name: "Venkat Rao",
            photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
            rating: 4.9,
            languages: ["English", "Telugu", "Tamil", "Sanskrit"],
            experience: 15,
            specialties: ["Temple History", "Spiritual Tours", "Local Traditions"],
            phone: "+91 9876543212",
            email: "venkat@localguides.com"
        }
    ],
    Vijayawada: [
        {
            id: 3,
            name: "Lakshmi Devi",
            photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
            rating: 4.9,
            languages: ["English", "Telugu", "Hindi"],
            experience: 10,
            specialties: ["Cultural Tours", "Historical Sites", "Food Tours"],
            phone: "+91 9876543213",
            email: "lakshmi@localguides.com"
        }
    ],
    Guntur: [
        {
            id: 4,
            name: "Suresh Kumar",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
            rating: 4.9,
            languages: ["English", "Telugu", "Urdu"],
            experience: 11,
            specialties: ["Local Markets", "Historical Sites", "Photography Tours"],
            phone: "+91 9876543214",
            email: "suresh@localguides.com"
        }
    ],
    Nellore: [
        {
            id: 5,
            name: "Anjali Reddy",
            photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
            rating: 4.9,
            languages: ["English", "Telugu", "Tamil"],
            experience: 9,
            specialties: ["Beach Tours", "Wildlife Sanctuary", "Local Culture"],
            phone: "+91 9876543215",
            email: "anjali@localguides.com"
        }
    ],
    Kakinada: [
        {
            id: 6,
            name: "Krishna Prasad",
            photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
            rating: 4.9,
            languages: ["English", "Telugu", "Hindi"],
            experience: 13,
            specialties: ["Port Tours", "Beach Walks", "Historical Sites"],
            phone: "+91 9876543216",
            email: "krishna@localguides.com"
        }
    ],
    Chittoor: [
        {
            id: 7,
            name: "Padma Priya",
            photo: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&q=80&w=200&h=200",
            rating: 4.9,
            languages: ["English", "Telugu", "Tamil", "Kannada"],
            experience: 14,
            specialties: ["Temple Tours", "Local Festivals", "Cultural Experience"],
            phone: "+91 9876543217",
            email: "padma@localguides.com"
        }
    ],
    Kadapa: [
        {
            id: 8,
            name: "Ramesh Babu",
            photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200&h=200",
            rating: 4.9,
            languages: ["English", "Telugu", "Urdu"],
            experience: 16,
            specialties: ["Historical Monuments", "Local Art", "Cultural Tours"],
            phone: "+91 9876543218",
            email: "ramesh@localguides.com"
        }
    ],
    Anantapur: [
        {
            id: 9,
            name: "Srinivas Rao",
            photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
            rating: 4.9,
            languages: ["English", "Telugu", "Kannada"],
            experience: 11,
            specialties: ["Rural Tourism", "Heritage Sites", "Local Crafts"],
            phone: "+91 9876543219",
            email: "srinivas@localguides.com"
        }
    ],
    Srikakulam: [
        {
            id: 10,
            name: "Durga Prasad",
            photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200&h=200",
            rating: 4.9,
            languages: ["English", "Telugu", "Oriya"],
            experience: 12,
            specialties: ["Beach Tours", "Temple Visits", "Local Culture"],
            phone: "+91 9876543220",
            email: "durga@localguides.com"
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const destinationSelect = document.getElementById('destination');
    const guidesGrid = document.getElementById('guides-grid');

    destinationSelect.addEventListener('change', (e) => {
        const selectedLocation = e.target.value;
        displayGuides(selectedLocation);
    });

    function displayGuides(location) {
        const guides = guidesData[location] || [];
        guidesGrid.innerHTML = '';

        if (guides.length === 0 && location) {
            guidesGrid.innerHTML = `
                <div class="no-guides">
                    No guides available in ${location} at the moment.
                </div>
            `;
            return;
        }

        guides.forEach(guide => {
            const guideCard = document.createElement('div');
            guideCard.className = 'guide-card';
            guideCard.innerHTML = `
                <div class="guide-content">
                    <div class="guide-header">
                        
                        <div>
                            <h3 class="guide-name">${guide.name}</h3>
                            <div class="guide-rating">
                                <span class="star">⭐</span>
                                <span>${guide.rating}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="guide-info">
                        <div class="info-item">
                            <span>🗣️</span>
                            <span>${guide.languages.join(", ")}</span>
                        </div>
                        <div class="info-item">
                            <span>🌍</span>
                            <span>${guide.experience} years experience</span>
                        </div>
                        
                        <div class="specialties">
                            <strong>Specialties:</strong>
                            <div class="specialty-tags">
                                ${guide.specialties.map(specialty => 
                                    `<span class="specialty-tag">${specialty}</span>`
                                ).join('')}
                            </div>
                        </div>
                        
                        <div class="contact-info">
                            <div class="info-item">
                                <span>📞</span>
                                <span>${guide.phone}</span>
                            </div>
                            <div class="info-item">
                                <span>📧</span>
                                <span>${guide.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            guidesGrid.appendChild(guideCard);
        });
    }
});