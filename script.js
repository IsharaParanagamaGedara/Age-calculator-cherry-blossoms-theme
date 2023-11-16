const ageCalculatorForm = document.getElementById('ageCalculatorForm');
const result = document.getElementById('result');

// Array of quotes about age
const ageQuotes = [
  "Age is merely the number of years the world has been enjoying you.",
  "You're not getting older, you're getting wiser.",
  "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
  "Growing old is mandatory, but growing up is optional.",
  "Age is the opportunity to live a full life, not just accumulate years.",
  // Add more quotes as needed
];

ageCalculatorForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const dob = new Date(ageCalculatorForm.dob.value);
  const ageInMilliseconds = Date.now() - dob.getTime();
  const ageDate = new Date(ageInMilliseconds);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  // Get a random quote
  const randomQuote = ageQuotes[Math.floor(Math.random() * ageQuotes.length)];

  // Display the age and a random quote
  result.innerHTML = `<p>Your age is ${age} years.</p><p>${randomQuote}</p>`;
});

function clearFields() {
  ageCalculatorForm.reset();
  result.innerHTML = '';
}
