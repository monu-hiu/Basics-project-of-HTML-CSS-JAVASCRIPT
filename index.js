const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if (height==='' ||isNaN(height) || height <= 0) {
    result.innerHTML = "Please enter a valid height in cm.";
  } else if (weight==='' || isNaN(weight) || weight <= 0) {
    result.innerHTML = "Please enter a valid weight in kg.";
  } else {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    result.innerHTML = `<span>Your BMI is ${bmi} (${category})</span>`;
  }
});