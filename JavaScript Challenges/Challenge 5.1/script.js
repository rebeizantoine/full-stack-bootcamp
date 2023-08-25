// Step 1: Create and style a button element fa use .createElemet w .textcontent
const button = document.createElement('button');
button.textContent = 'Click Me!';
// Apply button styles using inline CSS metel ma eemelna bel challenge 5 maa daniel
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.backgroundColor = '#3498db';
button.style.color = '#ffffff';
button.style.border = 'none';
button.style.cursor = 'pointer';

// Add a click event listener to the button
//Math.random() is random number w *1000 between 0 w 1000 w +1 ma ela 3azeh b7ess
button.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    // Change button styles and text on click
    button.style.backgroundColor = 'red';
    button.style.color = 'white';
    button.textContent = `Clicked ${randomNumber}!`;//la2ennou single cotation fa $(sdads) bi jiba
});

// Append the button to the body of the page
document.body.appendChild(button);

// Step 2: Create and style an h1 element .CreateElement('')+.textcontent('')
const h1 = document.createElement('h1');
h1.textContent = 'Press Keys Here';
// Apply h1 styles
h1.style.border = '10px dotted green';
h1.style.padding = '20px';
h1.style.transition = '0.2s';

// Append the h1 to the body document.body.appencdhild()
document.body.appendChild(h1);

// Add keydown event listener
document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        // Change h1 background color on 'a' key
        h1.style.backgroundColor = 'red';
    } else if (event.key === 's') {
        // Move h1 to the right on 's' key
        h1.style.marginLeft = parseInt(h1.style.marginLeft || 0) + 10 + 'px';
    } else if (event.key === 'd') {
        // Append new paragraph on 'd' key
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'Key D was pressed!';
        h1.insertAdjacentElement('afterend', newParagraph);
    } else if (event.key === 'w') {
        // Toggle h1 visibility on 'w' key
        h1.style.display = h1.style.display === 'none' ? 'block' : 'none';
    } else if (event.key === ' ') {
        // Enlarge h1 font size on spacebar
        h1.style.fontSize = parseInt(getComputedStyle(h1).fontSize) + 5 + 'px';
    }
});

// Step 3: Create a form and input fields
const form = document.createElement('form');
const fullNameInput = document.createElement('input');
const emailInput = document.createElement('input');
const passwordInput = document.createElement('input');
const confirmPasswordInput = document.createElement('input');
const submitButton = document.createElement('button');

// Add form submit event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        // Check email validity and show alert
        alert('Please enter a valid email address.');
        return;
    }
    if (passwordInput.value !== confirmPasswordInput.value) {
        // Check password match and show alert
        alert('Passwords do not match.');
        return;
    }
    // Show success message if form is valid
    alert('Form submitted successfully!');
});

// Set placeholders and styles for input fields metel ma eemil daniel l INPUTS BEFORE FORMS
fullNameInput.placeholder = 'Full Name';
emailInput.placeholder = 'Email Address';
passwordInput.placeholder = 'Password';
passwordInput.type = 'password';
confirmPasswordInput.placeholder = 'Confirm Password';
confirmPasswordInput.type = 'password';
submitButton.textContent = 'Submit';

// Add input fields to the form

[fullNameInput, emailInput, passwordInput, confirmPasswordInput, submitButton].forEach(input => {
    input.style.display = 'block';
    input.style.marginBottom = '10px';
    form.appendChild(input);
});
