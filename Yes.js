// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZUVU8KgQXe6IXauVYqB9neQQza6Ctc60",
    authDomain: "testing123-5d357.firebaseapp.com",
    projectId: "testing123-5d357",
    storageBucket: "testing123-5d357.appspot.com",
    messagingSenderId: "505513258276",
    appId: "1:505513258276:web:9e18c25dcdca296fda97b1",
    measurementId: "G-9Q26HJVX27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Falling stars creation
document.addEventListener("DOMContentLoaded", () => {
    const fallingStarsContainer = document.querySelector(".falling-stars-container");

    // Function to create a single star
    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        // Random position for the star along the top of the screen
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = "-20px"; // Start just above the viewport
        star.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random duration

        fallingStarsContainer.appendChild(star);

        // Remove the star after its animation ends
        setTimeout(() => {
            star.remove();
        }, 5000); // Adjust based on animation duration
    }

    // Call the function to start creating stars continuously
    function createFallingStars() {
        setInterval(createStar, 300); // Creates a new star every 300ms
    }

    // Start creating stars
    createFallingStars();
});

// Button and input handling
const submitButton = document.getElementById('submit-button');
const textarea = document.getElementById('riddle');
const inputContainer = document.querySelector('.input-container');

// Create explosion element
const explosion = document.createElement('div');
explosion.classList.add('explosion');
document.body.appendChild(explosion);

submitButton.addEventListener('click', async () => {
    const message = textarea.value;

    // Save the message to Firestore
    try {
        await addDoc(collection(db, 'messages'), {
            content: message,
            timestamp: new Date()
        });
        console.log('Message saved successfully!');

        // Clear the textarea
        textarea.value = '';

        // Show the explosion effect
        const rect = submitButton.getBoundingClientRect();
        explosion.style.left = `${rect.left + rect.width / 2 - 50}px`; // Center the explosion
        explosion.style.top = `${rect.top + rect.height / 2 - 50}px`; // Adjust according to button's position
        explosion.style.opacity = 1;
        explosion.style.transform = 'scale(1)';

        // Trigger explosion animation
        explosion.classList.add('animate');
        explosion.style.animation = 'explode 0.5s forwards';

        // After explosion, redirect to a new page
        setTimeout(() => {
            explosion.style.opacity = 0; // Hide the explosion after animation
            window.location.href = 'No.html'; // Redirect to new page
        }, 500); // 500ms to match the animation duration
    } catch (error) {
        console.error('Error saving message: ', error);
    }
});
