// Select button and color code element
const changeColorBtn = document.getElementById('changeColorBtn');
const colorCodeSpan = document.querySelector('.color-code');
const colorContainer = document.querySelector('.color-container');

// Function to generate a random hex color
function getRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return randomColor;
}

// Event listener to change color on button click
changeColorBtn.addEventListener('click', () => {
    const newColor = getRandomColor();
    colorContainer.style.backgroundColor = newColor;
    colorCodeSpan.textContent = `\#${newColor}`;
    colorCodeSpan.style.color = newColor;
});