// script.js

// Random Joke Generator using external API
function getRandomJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(joke => {
            console.log(joke.setup + ' - ' + joke.punchline);
        })
        .catch(error => console.error('Error fetching joke:', error));
}

// Show Program Function
function showProgram() {
    // Logic to show fitness programs
    console.log('Showing fitness programs...');
}

// Show PPL Function
function showPPL() {
    // Logic to show Push/Pull/Legs program
    console.log('Showing Push/Pull/Legs program...');
}

// Show Goal Function
function showGoal() {
    // Logic to display user’s goals
    console.log('Showing user goals...');
}

// Show Arm Technique Function
function showArmTechnique() {
    // Logic to show arm techniques
    console.log('Showing arm techniques...');
}

// Calculate BMI Function
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// Modal close function
function closeModal(modal) {
    modal.style.display = 'none';
}

// Modal open function
function openModal(modal) {
    modal.style.display = 'block';
}

// Navbar scroll effects
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Smooth scrolling functionality
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Example function call to get a random joke
getRandomJoke();