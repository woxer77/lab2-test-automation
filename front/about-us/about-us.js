// Mock button functionality
function learnMoreAction() {
  setTimeout(() => {
    console.log("Learn More button clicked successfully.");
  }, 2000);
}

let button = document.getElementById('learnMoreButton');

button.onclick = learnMoreAction;
