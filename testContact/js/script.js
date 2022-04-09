let sliderValue = document.querySelector('#slider');
let currentValue = document.querySelector('#currentValue');
currentValue.innerHTML = sliderValue.value;

sliderValue.oninput = function() {
    currentValue.innerHTML = this.value;
}

let genderValue;
let calculateBtn = document.querySelector('#calculateBtn');
let resultValue = document.querySelector('#resultValue');

calculateBtn.addEventListener('click', function() {
    genderValue = document.querySelector('input[name="gender"]:checked').value;
    if (genderValue === "male" && sliderValue.value < 65) {
        resultValue.innerHTML = 65 - sliderValue.value + " aastat pensionini";
    }
    if (genderValue === "male" && sliderValue.value >= 65) {
        resultValue.innerHTML = "Olete juba pensionil";
    }
    if (genderValue === "female" && sliderValue.value < 63) {
        resultValue.innerHTML = 63 - sliderValue.value + " aastat pensionini";
    }
    if (genderValue === "female" && sliderValue.value >= 63) {
        resultValue.innerHTML = "Olete juba pensionil";
    }
});