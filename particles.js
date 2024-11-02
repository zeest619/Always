function createParticles() {
    const particlesContainer = document.querySelector('.particles-container');


    setInterval(() => {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Set a random size for the particle
        const size = Math.random() * 10 + 5; // Size between 5px and 15px
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        // Position the particle randomly within the viewport
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';

        // Set a random animation duration and delay
        const duration = Math.random() * 2 + 3; // Between 3s and 5s
        particle.style.animationDuration = duration + 's';

        
        // Set a random animation delay to create varied movement
        const delay = Math.random() * 2; // Between 0s and 2s
        particle.style.animationDelay = delay + 's';

        particlesContainer.appendChild(particle);

        // Remove the particle after it finishes animating
        setTimeout(() => {
            particle.remove();
        }, (duration + delay) * 1000); // Convert seconds to milliseconds
    }, 100); // Adjust frequency of particle creation
}

// Call the function to create particles
createParticles();
