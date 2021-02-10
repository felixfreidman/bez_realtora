let likeArray = document.querySelectorAll(".like-button_like-icon");
likeArray.forEach((Element) => {
  Element.addEventListener("click", () => {
    Element.classList.toggle("filledHeart");
    Element.classList.toggle("unfilledHeart");
    let text = Element.nextSibling.nextSibling;
    text.classList.toggle("redColored");
    text.classList.toggle("usualColor");
    let counter = text.nextSibling.nextSibling;
    let intCounter = parseInt(counter.textContent);
    if (Element.classList.contains("filledHeart")) {
      intCounter++;
      counter.textContent = intCounter;
      counter.classList.toggle("redColored");
    } else if (Element.classList.contains("unfilledHeart")) {
      intCounter--;
      counter.textContent = intCounter;
      counter.classList.toggle("redColored");
    }
    let button = Element.parentNode;
    button.classList.toggle("redColored");
    button.classList.toggle("usualColor");
  });
});

let heartArray = document.querySelectorAll(".heart");
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

var mySwiper = new Swiper("#advertCont", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: "#prevAdvert",
    prevEl: "#nextAdvert",
  },
});
var mySwiper2 = new Swiper("#reviewCont", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: "#prevReview",
    prevEl: "#nextReview",
  },
});
