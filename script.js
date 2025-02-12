let names = [];

function submitNames() {
    names = [];
    for (let i = 1; i <= 6; i++) {
        const nameInput = document.getElementById(`name${i}`);
        if (nameInput.value.trim() !== "") {
            names.push(nameInput.value.trim());
        }
    }
    if (names.length === 6) {
        document.getElementById('rollDiceButton').style.display = 'block';
    } else {
        alert("Please enter exactly 6 names.");
    }
}

function rollDice() {
    const dice = document.getElementById('dice');
    const randomX = Math.floor(Math.random() * 360);
    const randomY = Math.floor(Math.random() * 360);

    dice.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg)`;

    // Ensure the side with "Dario" faces the front after the animation
    setTimeout(() => {
        dice.style.transform = `rotateX(0deg) rotateY(0deg)`;
        displayDice(1); // Always display "Dario" on the front side
    }, 1000); // Match the duration of the CSS transition
}

function displayDice(side) {
    const faces = document.querySelectorAll('.face');
    faces.forEach((face, index) => {
        face.innerHTML = ''; // Clear previous content
        if (index + 1 === side) {
            const nameElement = document.createElement('div');
            nameElement.textContent = "Dario";
            nameElement.classList.add('dice-name');
            face.appendChild(nameElement);
        }
    });
}

// HTML structure
// <div id="dice"></div>
// <button id="rollDiceButton" onclick="rollDice()">Roll Dice</button>

// Hide the roll dice button initially
document.getElementById('rollDiceButton').style.display = 'none';