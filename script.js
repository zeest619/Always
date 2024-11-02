

function checkPassword() {
    console.log('checkPassword function called'); 
    const passwordInput = document.getElementById("password").value;
    const correctPassword = "Gurya"; // Set your desired password for the riddle
    const twinkleMusic = document.getElementById("twinkleMusic");

  

   

    if (passwordInput === correctPassword) {
        document.querySelector(".password-box").style.display = "none";
        document.getElementById("birthdayMessage").style.display = "block";
   


        // Update background to a starry sky effect
        document.body.style.background = "radial-gradient(circle, rgba(0,0,10,1) 0%, rgba(0,0,30,1) 100%)";

       

        // Play the music
        twinkleMusic.play(); // Play the audio
        createHearts(); // Call to create hearts immediately after password check
        createStarsAndMoon(); // Call to create stars and moon
        startCreatingHearts(); // Start creating blue hearts
        startCreatingPurpleHearts(); // Start creating purple hearts
    } else {
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.innerText = "Naaaahh.........I'm guessing it starts with G";
        errorMessage.style.display = "block";
    }
}





// Your other functions like createHearts(), createStarsAndMoon(), etc.


// Other functions...


function createHearts() {
    for (let i = 0; i < 10; i++) { // Change the number of hearts to 10
        const heart = document.createElement("div");
        heart.className = "heart"; // Ensure this class has styles
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(heart);
    }
}

function createStarsAndMoon() {
    const balloonsContainer = document.querySelector('.balloons-container');

    // Create the moon
    const moon = document.createElement('div');
    moon.classList.add('moon');
    balloonsContainer.appendChild(moon);

    // Create 15 stars
    for (let i = 0; i < 15; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Randomize position for the stars
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = Math.random() * window.innerHeight + 'px';

        // Ensure stars are outside the message box area
        const messageBox = document.querySelector('.message-container').getBoundingClientRect();
        const starRect = star.getBoundingClientRect();

        while (
            starRect.left > messageBox.left &&
            starRect.right < messageBox.right &&
            starRect.top > messageBox.top &&
            starRect.bottom < messageBox.bottom
        ) {
            star.style.left = Math.random() * window.innerWidth + 'px';
            star.style.top = Math.random() * window.innerHeight + 'px';
        }

        balloonsContainer.appendChild(star);
    }
}

function startCreatingHearts() {
    setInterval(createRandomBlueHeart, 1000); // Adjust frequency as needed
}

function startCreatingPurpleHearts() {
    setInterval(createRandomPurpleHeart, 300); // Adjust frequency as needed
}

function createRandomBlueHeart() {
    const heartEmoji = '💙'; // Use the blue heart emoji
    const heartElement = document.createElement('span');
    heartElement.textContent = heartEmoji; // Set the emoji as text content
    heartElement.style.position = 'absolute';
    heartElement.style.fontSize = '20px'; // Adjust size if necessary
    heartElement.style.opacity = Math.random(); // Optional: set random opacity
    heartElement.style.top = Math.random() * 100 + 'vh'; // Random vertical position
    heartElement.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    heartElement.classList.add('heart-animation'); // Add animation class
    
    document.body.appendChild(heartElement);

    setTimeout(() => {
        heartElement.remove(); // Remove the heart after some time
    }, 3000); // Adjust the duration as needed
}

function createRandomPurpleHeart() {
    const heartEmoji = '💜'; // Use the purple heart emoji
    const heartElement = document.createElement('span');
    heartElement.textContent = heartEmoji; // Set the emoji as text content
    heartElement.style.position = 'absolute';
    heartElement.style.fontSize = '20px'; // Adjust size if necessary
    heartElement.style.opacity = Math.random(); // Optional: set random opacity
    heartElement.style.top = Math.random() * 100 + 'vh'; // Random vertical position
    heartElement.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    heartElement.classList.add('heart-animation'); // Add animation class
    
    document.body.appendChild(heartElement);

    setTimeout(() => {
        heartElement.remove(); // Remove the heart after some time
    }, 3000); // Adjust the duration as needed
}

function revealMessage() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    
    // Toggle visibility
    if (hiddenMessage.style.display === 'none' || hiddenMessage.style.display === '') {
        hiddenMessage.style.display = 'block'; // Show the hidden message
        
    } else {
        hiddenMessage.style.display = 'none'; // Hide it if already shown
        video.style.display = 'none'; 
    }
}

function loadVideoPage() {
    window.location.href = 'video.html'; // Navigate to the video page
}
