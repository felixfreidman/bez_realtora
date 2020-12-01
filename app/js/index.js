let realEstateTypeField = document.getElementById("realEstateTypeField");
let realEstateRadioArray = document.querySelectorAll("input[name=realEstateType]");
let realEstateTypeLabel = document.getElementById("realEstateTypeLabel");
let roomAmountField = document.getElementById("roomAmountField");
let roomAmountCheckboxArray = document.querySelectorAll("input[name=roomAmount]");
let roomAmountLabel =  document.getElementById("roomAmountLabel");
let chosenCityField = document.getElementById("chosenCityField");
let chosenCityRadioArray = document.querySelectorAll("input[name=chosenCity]");
let chosenCityLabel = document.getElementById("chosenCityLabel");



realEstateRadioArray.forEach(radio => {
    if(radio.checked) {
        realEstateTypeField.innerHTML = `${radio.value}`;
    }
    radio.addEventListener("click", () => {
        if(radio.checked) {
            realEstateTypeField.innerHTML = `${radio.value}`;
            realEstateTypeLabel.checked = false;
        }
    });
});


roomAmountCheckboxArray.forEach(checkbox => {
    if(checkbox.checked) {
        roomAmountField.innerHTML = `${checkbox.value}`;
    }
    checkbox.addEventListener("click", () => {
            roomAmountField.innerHTML = `${checkbox.value}`;
            roomAmountLabel.checked = false;
    });
});

chosenCityRadioArray.forEach(radio => {
    if(radio.checked) {
        chosenCityField.innerHTML = `${radio.value}`;
    }
    radio.addEventListener("click", () => {
        chosenCityField.innerHTML = `${radio.value}`;
        chosenCityLabel.checked = false;
    });
});