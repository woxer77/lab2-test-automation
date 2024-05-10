// Mock button functionality
function mockButtonAction() {
  setTimeout(() => {
    console.log("Button clicked successfully.");
  }, 2000);
}

let button = document.createElement('button');
button.innerHTML = 'Click me';

button.onclick = mockButtonAction;

document.body.appendChild(button);
