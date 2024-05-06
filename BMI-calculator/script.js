window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi);
}

function calculateBmi() {
    const heightInput = document.querySelector('#Height');
    const weightInput = document.querySelector('#weight');
    const result = document.querySelector('#result');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || height <= 0) {
        result.innerText = "Please provide a valid height (greater than 0).";
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        result.innerText = "Please provide a valid weight (greater than 0).";
        return;
    }

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    let bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi < 24.9) {
        bmiCategory = "Normal Weight";
    } else if (bmi < 29.9) {
        bmiCategory = "Overweight";
    } else if (bmi < 34.9) {
        bmiCategory = "Obesity (Class I)";
    } else if (bmi < 39.9) {
        bmiCategory = "Obesity (Class II)";
    } else {
        bmiCategory = "Extreme Obesity";
    }

    result.innerText = `Your BMI: ${bmi}\n ${bmiCategory}`;
}