let realEstateTypeField = document.getElementById("realEstateTypeField");
let realEstateRadioArray = document.querySelectorAll(
  "input[name=realEstateType]"
);
let realEstateTypeLabel = document.getElementById("realEstateTypeLabel");
let roomAmountField = document.getElementById("roomAmountField");
let roomAmountCheckboxArray = document.querySelectorAll(
  "input[name=roomAmount]"
);
let roomAmountLabel = document.getElementById("roomAmountLabel");
let chosenCityField = document.getElementById("chosenCityField");
let chosenCityRadioArray = document.querySelectorAll("input[name=chosenCity]");
let chosenCityLabel = document.getElementById("chosenCityLabel");
let priceRangeField = document.getElementById("priceRangeField");

realEstateRadioArray.forEach((radio) => {
  if (radio.checked) {
    realEstateTypeField.innerHTML = `${radio.value}`;
  }
  radio.addEventListener("click", () => {
    if (radio.checked) {
      realEstateTypeField.innerHTML = `${radio.value}`;
      realEstateTypeField.classList.toggle("reversed-arrow");
      realEstateTypeLabel.checked = false;
    }
  });
});

realEstateTypeField.addEventListener("click",()=> {
  realEstateTypeField.classList.toggle("reversed-arrow");
});

roomAmountCheckboxArray.forEach((checkbox) => {
  if (checkbox.checked) {
    roomAmountField.innerHTML = `${checkbox.value}`;
  }
  checkbox.addEventListener("click", () => {
    roomAmountField.innerHTML = `${checkbox.value}`;
    // roomAmountLabel.checked = false;
  });
});


roomAmountField.addEventListener("click",()=> {
  roomAmountField.classList.toggle("reversed-arrow");
});

chosenCityRadioArray.forEach((radio) => {
  if (radio.checked) {
    chosenCityField.innerHTML = `${radio.value}`;
  }
  radio.addEventListener("click", () => {
    chosenCityField.innerHTML = `${radio.value}`;
    chosenCityLabel.checked = false;
    chosenCityField.classList.toggle("reversed-arrow");
  });
});
chosenCityField.addEventListener("click",()=> {
  chosenCityField.classList.toggle("reversed-arrow");
});

priceRangeField.addEventListener("click",()=> {
  priceRangeField.classList.toggle("reversed-arrow");
});

$(function () {
  $arrayOfValues = [3000, 205000];
  $("#slider-range").slider({
    range: true,
    step: 100,
    min: 0,
    max: 205000,
    values: [15000,18000],
    slide: function (event, ui) {
      $("#amount").val(ui.values[0] + "₽ - " + ui.values[1] + "₽");
      $("#min-value").val(ui.values[0] );
      $("#max-value").val(ui.values[1]);
      
    },
   
  });
  
  $("#amount").val(
    $("#slider-range").slider("values", 0) +
      "₽ - " +
      $("#slider-range").slider("values", 1) +
      "₽"
  );

  $("#min-value").val($("#slider-range").slider("values", 0));
  $("#max-value").val($("#slider-range").slider("values", 1));
  
});

$('#min-value').on('input',function(){
  $minimalValue = $("#min-value").val();
  $maxValue = $("#max-value").val();
  if($minimalValue > 0 && $minimalValue < 205000) {
  $("#amount").val($minimalValue + "₽ - " + $maxValue + "₽");
  }
});

$('#max-value').on('input',function(){
  $minimalValue = $("#min-value").val();
  $maxValue = $("#max-value").val();
  if($maxValue > 0 && $maxValue < 205000) {
  $("#amount").val($minimalValue + "₽ - " + $maxValue + "₽");
  }
});



