// Get the calculator display element
let display = document.querySelector("#display");

// Listen for keypresses on the window
window.addEventListener('keydown', keyPress);

// Add input to the display
function AddtoDisplay(input) {
    display.value += input;
}

// Clear the display
function clearScreen() {
    display.value = '';
}

// Evaluate the expression and show the result
function calculate() {
    try {
        display.value = eval(display.value); // Calculate the result
    } catch (error) {
        display.value = 'Error'; // Handle invalid inputs
    }
}

// Remove the last character (backspace function)
function remove() {
    display.value = display.value.toString().slice(0, -1);
}

// Handle keyboard inputs
function keyPress(event) {
    switch (true) {
        case (event.keyCode == 96): AddtoDisplay('0'); break;
        case (event.keyCode == 97): AddtoDisplay('1'); break;
        case (event.keyCode == 98): AddtoDisplay('2'); break;
        case (event.keyCode == 99): AddtoDisplay('3'); break;
        case (event.keyCode == 100): AddtoDisplay('4'); break;
        case (event.keyCode == 101): AddtoDisplay('5'); break;
        case (event.keyCode == 102): AddtoDisplay('6'); break;
        case (event.keyCode == 103): AddtoDisplay('7'); break;
        case (event.keyCode == 104): AddtoDisplay('8'); break;
        case (event.keyCode == 105): AddtoDisplay('9'); break;
        case (event.keyCode == 106): AddtoDisplay('*'); break;
        case (event.keyCode == 107): AddtoDisplay('+'); break;
        case (event.keyCode == 109): AddtoDisplay('-'); break;
        case (event.keyCode == 111): AddtoDisplay('/'); break;
        case (event.keyCode == 8): remove(); break; // Backspace key
        case (event.keyCode == 187): calculate(); break; // Equals key
        case (event.keyCode == 13): calculate(); break; // Enter key
    }
}

