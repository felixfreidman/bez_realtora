let realEstateTypeField = document.getElementById("realEstateTypeField");
let realEstateRadioArray = document.querySelectorAll(
  "input[name=realEstateType]"
);
let realEstateTypeLabel = document.getElementById("realEstateTypeLabel");
let metroStationField = document.getElementById("metroStationField");
let metroStationFieldMobile = document.getElementById(
  "metroStationFieldMobile"
);
let metroStationRadioArray = document.querySelectorAll(
  "input[name=metroStationType]"
);
let metroStationLabel = document.getElementById("metroStationLabel");
let metroStationLabelMobile = document.getElementById(
  "metroStationLabelMobile"
);
let metroStationRadioArrayMobile = document.querySelectorAll(
  "input[name=metroStationTypeMobile]"
);
// let moreButton = document.querySelector(".advertisments-section_more-button");
let heartArray = document.querySelectorAll(".unfilledHeart");
heartArray.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("unfilledHeart");
    element.classList.toggle("filledHeart");
    let counterLikes = element.nextSibling.nextSibling;
    let intCounter = parseInt(counterLikes.textContent);
    if (element.classList.contains("filledHeart")) {
      intCounter++;
      counterLikes.textContent = intCounter;
      counterLikes.classList.toggle("counterColored");
    } else if (element.classList.contains("unfilledHeart")) {
      intCounter--;
      counterLikes.textContent = intCounter;
      counterLikes.classList.toggle("counterColored");
    }
  });
});

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
metroStationRadioArray.forEach((radio) => {
  if (radio.checked) {
    metroStationField.innerHTML = `${radio.value}`;
  }
  radio.addEventListener("click", () => {
    if (radio.checked) {
      metroStationField.innerHTML = `${radio.value}`;
      metroStationField.classList.toggle("reversed-arrow");
      metroStationLabel.checked = false;
    }
  });
});

metroStationRadioArrayMobile.forEach((radio) => {
  if (radio.checked) {
    metroStationFieldMobile.innerHTML = `${radio.value}`;
  }
  radio.addEventListener("click", () => {
    if (radio.checked) {
      metroStationFieldMobile.innerHTML = `${radio.value}`;
      metroStationFieldMobile.classList.toggle("reversed-arrow");
      metroStationLabelMobile.checked = false;
    }
  });
});

window.onscroll = function () {
  myFunction();
};

// Get the header
var filterSection = document.querySelector(".main_filter-section");

// Get the offset position of the navbar
var sticky = filterSection.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    console.log("SHHHIT");
    filterSection.classList.add("sticky");
  } else {
    filterSection.classList.remove("sticky");
  }
}
