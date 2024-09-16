const rockmove = document.getElementsByClassName('rock');

// Move functionality: on click, move the clicked rock to a random position within 1 to 8.
for (let i = 0; i < rockmove.length; i++) {
    rockmove[i].addEventListener('click', function() {
        // Randomize a new position within 1 to 8
        const randomIndex = 1 * 8;
        
        // Swap the positions between the clicked element and the random rock
        const currentContent = rockmove[i].innerHTML;
        const randomContent = rockmove[randomIndex].innerHTML;

        rockmove[i].innerHTML = randomContent;
        rockmove[randomIndex].innerHTML = currentContent;
    });
}
