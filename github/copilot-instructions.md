# Dario Dice Game Instructions

## Overview

This project is a simple dice game where users can input six names, and upon rolling the dice, the name "Dario" will always be displayed on the front face of the dice after the animation.

## Files

- `index.html`: The main HTML file containing the structure of the page.
- `styles.css`: The CSS file for styling the page and the dice.
- `script.js`: The JavaScript file containing the logic for the dice game.

## How to Use

1. Open `index.html` in a web browser.
2. Enter six names in the input fields.
3. Click the "Submit Names" button.
4. Once six names are submitted, the "Roll Dice" button will appear.
5. Click the "Roll Dice" button to roll the dice.
6. After the dice animation, the name "Dario" will be displayed on the front face of the dice.

## Code Details

### HTML (`index.html`)

- Contains a form with six input fields for entering names.
- Contains a button to submit the names.
- Contains a button to roll the dice.
- Contains a div with id `dice` to display the 3D dice.

### CSS (`styles.css`)

- Styles the body to center the content.
- Styles the dice container to display a 3D dice with six faces.
- Styles the faces of the dice.
- Styles the "Roll Dice" button.

### JavaScript (`script.js`)

- `submitNames()`: Collects the names from the input fields and stores them in an array. Displays the "Roll Dice" button if six names are entered.
- `rollDice()`: Animates the dice with random rotations and ensures the front face displays "Dario" after the animation.
- `displayDice(side)`: Displays the name "Dario" on the specified side of the dice.

## Notes

- The dice animation duration is set to 1 second.
- The name "Dario" is always displayed on the front face of the dice after the animation.

