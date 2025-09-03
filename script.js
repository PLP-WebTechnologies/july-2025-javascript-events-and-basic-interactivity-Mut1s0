// ==============================
// Part 1: Event Handling Example
// ==============================
const toggleBtn = document.getElementById("toggleMessageBtn");
const message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
  if (message.style.display === "none") {
    message.style.display = "block";
    toggleBtn.textContent = "Hide Message";
  } else {
    message.style.display = "none";
    toggleBtn.textContent = "Show Message";
  }
});

// ==============================
// Part 2: Interactive Features
// ==============================

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Feature
let counter = 0;
const counterDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

decreaseBtn.addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});

// ==============================
// Part 3: Form Validation
// ==============================
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation rules
  if (name === "" || email === "" || password === "") {
    feedback.textContent = "❌ All fields are required!";
    feedback.style.color = "red";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = "❌ Please enter a valid email.";
    feedback.style.color = "red";
    return;
  }

  if (password.length < 6) {
    feedback.textContent = "❌ Password must be at least 6 characters.";
    feedback.style.color = "red";
    return;
  }

  // Success
  feedback.textContent = "✅ Form submitted successfully!";
  feedback.style.color = "green";
});
