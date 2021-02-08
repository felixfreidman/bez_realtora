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
