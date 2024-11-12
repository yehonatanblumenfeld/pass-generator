function generatePassword() {
    // Get user input values
    const length = document.getElementById("lengthSlider").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    // Define character sets
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let characters = '';
    let password = '';

    // Build the characters string based on user choices
    if (includeLowercase) characters += lowercaseChars;
    if (includeUppercase) characters += uppercaseChars;
    if (includeNumbers) characters += numberChars;
    if (includeSymbols) characters += symbolChars;

    // If no character types are selected, alert the user
    if (characters === '') {
        alert("Please select at least one character type.");
        return;
    }

    // Generate the password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    // Display the generated password
    document.getElementById("generatedPassword").value = password;
}

document.getElementById("copyButton").addEventListener("click", function() {
    // Get the text field
    var copyText = document.getElementById("generatedPassword");
    
    if (!copyText.value.trim()) {
        console.log("Nothing to copy!");
        return; // Exit the function if there's no text
    }
    // Use the Clipboard API to write text to clipboard
    navigator.clipboard.writeText(copyText.value)
        .then(function() {
            // Success message
            alert("Password copied!" );
        })
        .catch(function(err) {
            // Error message if clipboard copy fails
            console.error("Unable to copy text", err);
        });
});

const input = document.getElementById('length');

// Get the slider and the span element that displays the value
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");

// Update the value of the slider dynamically
lengthSlider.addEventListener("input", function() {
    console.log("Slider value:", lengthSlider.value);
    lengthValue.textContent = lengthSlider.value;
});

