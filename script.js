// ==========================================
// Step 2: Button + Click Event
// ==========================================
const alertBtn = document.getElementById("alertBtn");

alertBtn.addEventListener("click", function() {
    alert("Hello! You successfully clicked the button!");
});


// ==========================================
// Step 3: Change Something on the Page
// ==========================================
const changeTextBtn = document.getElementById("changeTextBtn");
const textToChange = document.getElementById("textToChange");

changeTextBtn.addEventListener("click", function() {
    textToChange.textContent = "🎉 Success! The text has been dynamically changed using JavaScript!";
    textToChange.style.color = "#28a745";
    textToChange.style.fontWeight = "bold";
});


// ==========================================
// Step 4 & 5: User Input + Logic (if/else)
// ==========================================
const submitBtn = document.getElementById("submitBtn");
const userInput = document.getElementById("userInput");
const greetingOutput = document.getElementById("greetingOutput");

submitBtn.addEventListener("click", function() {
    const name = userInput.value.trim();

    // Step 5: Add Logic (if / else)
    if (name === "") {
        greetingOutput.textContent = "Please type a valid name before submitting!";
        greetingOutput.style.color = "red";
    } else if (name.toLowerCase() === "admin") {
        greetingOutput.textContent = "Welcome back, Admin! Full access granted. 🛠️";
        greetingOutput.style.color = "purple";
    } else {
        greetingOutput.textContent = `Hello, ${name}! Thanks for visiting my interactive website. 😊`;
        greetingOutput.style.color = "#007BFF";
    }
});


// ==========================================
// Step 6: Add Something Fun (Random Generator)
// ==========================================
const funBtn = document.getElementById("funBtn");
const funOutput = document.getElementById("funOutput");

const funFacts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!",
    "Octopuses have three hearts and blue blood.",
    "Bananas are curved because they grow towards the sun against gravity.",
    "A single cloud can weigh more than 1 million pounds!",
    "JavaScript was created in just 10 days in May 1995."
];

funBtn.addEventListener("click", function() {
    // Pick a random index from the array
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funOutput.textContent = funFacts[randomIndex];
});
