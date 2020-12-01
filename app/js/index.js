let realEstateTypeField = document.getElementById("realEstateTypeField");
let realEstateRadioArray = document.querySelectorAll("input[name=realEstateType]");
let roomAmountField = document.getElementById("roomAmountField");
let roomAmountCheckboxArray = document.querySelectorAll("input[name=roomAmount]");

realEstateRadioArray.forEach(radio => {
    if(radio.checked) {
        realEstateTypeField.innerHTML = `${radio.value}`;
    }
    radio.addEventListener("click", () => {
        if(radio.checked) {
            realEstateTypeField.innerHTML = `${radio.value}`;
        }
    });
});


roomAmountCheckboxArray.forEach(checkbox => {
    if(checkbox.checked) {
        roomAmountField.innerHTML = `${checkbox.value}`;
        console.log(roomAmountField.innerHTML);
    }
    checkbox.addEventListener("click", () => {
            roomAmountField.innerHTML = `${checkbox.value}`;
            console.log(roomAmountField.innerHTML);
    });
});

console.log(roomAmountCheckboxArray);
console.log(roomAmountField);