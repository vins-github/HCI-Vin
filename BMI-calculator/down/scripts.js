document.addEventListener('DOMContentLoaded', function() {
    const arrowButton = document.getElementById('arrowButton');

    arrowButton.addEventListener('click', function() {
        // Add the animation class
        arrowButton.classList.add('animate');

        // Remove the animation class after the animation completes
        setTimeout(() => {
            arrowButton.classList.remove('animate');
        }, 1000); // Adjust the duration to match the CSS animation duration
    });
});
