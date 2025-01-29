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
// Simulating user registration status
const isRegistered = localStorage.getItem('isRegistered') === 'true';

// Hide or show navigation items based on registration status
const registrationItem = document.getElementById('registration-item');
const destinationItem = document.getElementById('destination-item');
const findFriendItem = document.getElementById('findfriend-item');
const budgetItem = document.getElementById('budget-item');

if (isRegistered) {
    registrationItem.style.display = 'none';
    destinationItem.classList.remove('hidden');
    findFriendItem.classList.remove('hidden');
    budgetItem.classList.remove('hidden');
}

// Simulating registration process
function registerUser() {
    localStorage.setItem('isRegistered', 'true');
    location.reload(); // Reload the page to apply changes
}


// Simulating user registration status

// Update navigation based on registration status
if (isRegistered) {
    registrationItem.style.display = 'none'; // Hide registration
    profileItem.classList.remove('hidden'); // Show profile
    destinationItem.classList.remove('hidden'); // Show destination
    findFriendItem.classList.remove('hidden'); // Show find friends
    budgetItem.classList.remove('hidden'); // Show budget calculator
}

// Simulating the registration process
function registerUser() {
    localStorage.setItem('isRegistered', 'true'); // Save registration status
    location.reload(); // Reload the page to update the navbar
}


animateContent([".home .content h5, .home .content h1, .home .content p, .home .content .search"]);

scrollTirggerAnimation(".travel", [".travel .box1", ".travel .box2", ".travel .box3"]);

scrollTirggerAnimation(".feedback .container", [".feedback .label", ".feedback .heading", ".feedback .paragraph"]);

scrollTirggerAnimation(".article", [".article .label", ".article .heading"]);

swipeAnimation(".destinations", [".destinations .heading", ".destinations .content"])

swipeAnimation(".article", [".article .latest-article", ".article .box1", ".article .box2", ".article .box3", ".article .box4"])

galleryAnimation(".destinations .gallery", [".destinations .gallery .box1",".destinations .gallery .box2",".destinations .gallery .box3",".destinations .gallery .box4",".destinations .gallery .box5"])

galleryAnimation(".featured .gallery", [".featured .gallery .box1",".featured .gallery .box2",".featured .gallery .box3",".featured .gallery .box4"])

galleryAnimation(".feedback .voices", [".feedback .voices .box1",".feedback .voices .box2",".feedback .voices .box3",".feedback .voices .box4",".feedback .voices .box5",".feedback .voices .box6"])

