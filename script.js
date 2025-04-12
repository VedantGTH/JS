// Get references to the HTML elements 

// Find the button element by its ID
const incrementButton = document.getElementById('increment-button'); 

// Find the span element where the count is displayed
const countDisplay = document.getElementById('click-count'); 

//  Variable to store the count 

// Initialize a variable 'count' to 0. We use 'let' because its value will change.
let count = 0; 

// Event Listener for the button click 

// Attach an event listener to the button.
// This function will run every time the button is 'clicked'.
incrementButton.addEventListener('click', function() {
    
    // 1. Increment the count variable
    count = count + 1; // or simply count++;
    
    // 2. Update the text content of the display element (DOM Manipulation)
    // We set the text inside the <span id="click-count"> element to the new value of 'count'.
    countDisplay.textContent = count; 
    
    // You can optionally log to the console to see the count there too
    // console.log("Button clicked! New count:", count); 
});

// Initial state 
// The HTML already sets the initial display to 0, so we don't strictly need 
// to set countDisplay.textContent = count; here when the script first loads.
// However, if the initial value might change or come from elsewhere, 
// setting it here ensures consistency:
// countDisplay.textContent = count; // Sets the display to 0 initially (optional here)