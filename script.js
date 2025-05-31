document.addEventListener('DOMContentLoaded', () => {
    // Secret Code Logic for index.html
    const secretCodeInput = document.getElementById('secretCode');
    const enterButton = document.getElementById('enterButton');
    const errorMessage = document.getElementById('errorMessage');

    // Replace 'kavi' with the actual secret code you want
        const correctSecretCode = '20050729'; // Change this to your desired secret code!

    if (enterButton && secretCodeInput && errorMessage) {
        enterButton.addEventListener('click', () => {
            if (secretCodeInput.value.toLowerCase() === correctSecretCode) {
                window.location.href = 'home.html'; // Redirect to home page
            } else {
                errorMessage.textContent = 'වැරදි Secret Code එකක්. නැවත උත්සාහ කරන්න.';
                secretCodeInput.value = ''; // Clear input
            }
        });

        secretCodeInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                enterButton.click();
            }
        });
    }

    // Animation for home.html (and potentially other pages)
    // This will handle the fade-in animation for elements with class 'fade-in'
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '1'; // Make sure it's visible after animation
    });
});
