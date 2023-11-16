const ageCalculatorForm = document.getElementById('ageCalculatorForm');
const result = document.getElementById('result');

ageCalculatorForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const dob = new Date(ageCalculatorForm.dob.value);
  const ageInMilliseconds = Date.now() - dob.getTime();
  const ageDate = new Date(ageInMilliseconds);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  result.textContent = `Your age is ${age} years.`;
});

function clearFields() {
  ageCalculatorForm.reset();
  result.textContent = '';
}


