Step 1: DOM Creation and Navigation
DOM Tree Navigation
javascript
Copy code
// Select elements , sta3mil document.query selector
const menuDiv = document.querySelector('.menu');
const headerElement = document.querySelector('header');
const footerElement = document.querySelector('footer');

// Navigate and log child elements (remember to ask about this)
console.log('Child elements of menu:', menuDiv.children);
console.log('Child elements of header:', headerElement.children);
console.log('Child elements of footer:', footerElement.children);
DOM Element Creation and Styling
javascript
Copy code
// Create container div and paragraph .CreateElement
const containerDiv = document.createElement('div');
//.ClassName to add class 
containerDiv.className = 'container';

//const ma3 paracraph with .createElement
const paragraph = document.createElement('p');
//same as before bass this time paragraph.TextContent
paragraph.textContent = 'Hello, World!';
containerDiv.appendChild(paragraph);
//Certainly! The line containerDiv.appendChild(paragraph); 
//is responsible for adding the newly created paragraph element (<p>)
// as a child of the previously created container div (<div class="container">).




// Add container div to the body 
document.body.appendChild(containerDiv);

// Style the elements
containerDiv.style.backgroundColor = 'blue';
paragraph.style.color = 'white';
paragraph.style.fontSize = '24px';
paragraph.style.fontFamily = 'Helvetica';
paragraph.style.border = '1px solid black';

// Change heading tags style to italic
//queryselectorALL la kel l h1 w kel h2
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
headings.forEach(heading => {
    heading.style.fontStyle = 'italic';
});

//STEP 2

//first we create a button then we add text inside it then we change
const colorChangingButton = document.createElement('button');
colorChangingButton.textContent = 'Hover Me';
document.body.appendChild(colorChangingButton);

colorChangingButton.addEventListener('mouseover', () => {
    colorChangingButton.style.backgroundColor = 'green';
});

colorChangingButton.addEventListener('mouseout', () => {
    colorChangingButton.style.backgroundColor = '';
});

const buttonContainer = document.querySelector('#buttonContainer');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        console.log('Clicked button text:', event.target.textContent);
    }
});

const form = document.createElement('form');
const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'Name');
const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('placeholder', 'Email');
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(submitButton);
document.body.appendChild(form);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Name:', nameInput.value);
    console.log('Email:', emailInput.value);
});
//Step 3

const originalDiv = document.querySelector('#original');
const clonedDiv = originalDiv.cloneNode(true);
clonedDiv.querySelector('p').textContent = 'Cloned';
document.body.appendChild(clonedDiv);

const cloneButton = document.querySelector('#clone-btn');
cloneButton.addEventListener('click', () => {
    if (clonedDiv.style.display === 'none') {
        clonedDiv.style.display = 'block';
    } else {
        clonedDiv.style.display = 'none';
    }
});

const header = document.querySelector('header');
const removeHeaderButton = document.createElement('button');
removeHeaderButton.textContent = 'Remove Header';
document.body.appendChild(removeHeaderButton);

removeHeaderButton.addEventListener('click', () => {
    header.remove();
});

function insertElementBeforeFooter(newElement) {
    const footer = document.querySelector('footer');
    footer.parentElement.insertBefore(newElement, footer);
}

const newElement = document.createElement('p');
newElement.textContent = 'This is a new element inserted before the footer.';
insertElementBeforeFooter(newElement);