function bmi() {
    let h = document.getElementById('height').value;
    let w = document.getElementById('weight').value;
    let bmi = w / (h / 100 * h / 100);
    let total = bmi.toFixed(2);
    document.getElementById('result').innerHTML = "your BMI is " + total;
}