let realEstateTypeField = document.getElementById("realEstateTypeField");
let realEstateRadioArray = document.querySelectorAll(
  "input[name=realEstateType]"
);
let realEstateTypeLabel = document.getElementById("realEstateTypeLabel");
let metroStationField = document.getElementById("metroStationField");
let metroStationRadioArray = document.querySelectorAll(
  "input[name=metroStationType]"
);
let metroStationLabel = document.getElementById("metroStationLabel");
let moreButton = document.querySelector(".advertisments-section_more-button");
let heartArray = document.querySelectorAll(".unfilledHeart");
let shareArray = document.querySelectorAll(".unfilledShare");
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

shareArray.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("unfilledShare");
    element.classList.toggle("filledShare");
  });
});

moreButton.addEventListener("click", () => {
  let moreAdvertisments = `<div class="main_applicationForm-section">
            <div class="applicationForm">
              <div class="applicationForm_boorkmark"></div>
              <div class="applicationForm_advertismentInfo-section">
                <span class="advertismentInfo-section_header"
                  >Не нашли, что искали?</span
                >
                <span class="advertismentInfo-section_subheader"
                  >Поможем найти квартиру от собственника по лучшей цене</span
                >
              </div>
              <form
                action="#"
                method="post"
                class="applicationForm_applyInfo-section"
              >
                <div class="applyInfo-section_requiredActions-section">
                  <div class="requiredActions-section_telephone-input">
                    <div class="telephone-input_preNumber">+7</div>
                    <input type="text" class="telephone-input_number" />
                  </div>
                  <button class="requredActions-section_apply-button">
                    Оставить заявку
                  </button>
                </div>
                <input
                  type="checkbox"
                  name="agreeCheckbox"
                  id="agreeCheckbox"
                  class="applyInfo-section_personalAgree-checkbox"
                  checked
                />
                <label for="agreeCheckbox" class="personalAgree-label"
                  >Я даю согласие на
                  <a href="#">Обработку персональных данных</a></label
                >
              </form>
            </div>
          </div>
          <div class="advertisment-section_part">
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
          </div>
          <div class="main_applicationForm-section">
            <div class="applicationForm">
              <div class="applicationForm_boorkmark"></div>
              <div class="applicationForm_advertismentInfo-section">
                <span class="advertismentInfo-section_header"
                  >Не нашли, что искали?</span
                >
                <span class="advertismentInfo-section_subheader"
                  >Поможем найти квартиру от собственника по лучшей цене</span
                >
              </div>
              <form
                action="#"
                method="post"
                class="applicationForm_applyInfo-section"
              >
                <div class="applyInfo-section_requiredActions-section">
                  <div class="requiredActions-section_telephone-input">
                    <div class="telephone-input_preNumber">+7</div>
                    <input type="text" class="telephone-input_number" />
                  </div>
                  <button class="requredActions-section_apply-button">
                    Оставить заявку
                  </button>
                </div>
                <input
                  type="checkbox"
                  name="agreeCheckbox"
                  id="agreeCheckbox"
                  class="applyInfo-section_personalAgree-checkbox"
                  checked
                />
                <label for="agreeCheckbox" class="personalAgree-label"
                  >Я даю согласие на
                  <a href="#">Обработку персональных данных</a></label
                >
              </form>
            </div>
          </div>
          <div class="advertisment-section_part">
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
            <div class="advertisments-section_advert-card">
              <div class="advert-card_panel-info-section">
                <div class="advert-card_info-section">
                  <div class="info-section_avatar"></div>
                  <span class="info-section_name">Александра Соколовская</span>
                </div>
              </div>
              <div class="advert-card_objPhotos-section">
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
                <img
                  src="../img/main/main_rentAdvertisment-card.jpg"
                  alt=":("
                />
              </div>
              <div class="advert-card_panel-section">
                <div class="panel-section_section unfilledHeart"></div>
                <div class="panel-section_section counter">999</div>
                <div class="panel-section_section unfilledShare"></div>
              </div>
              <div class="advert-card_objInfo-section">
                <div class="objInfo-section_price-tag">
                  <span class="price-tag_price">155 000 ₽</span>
                  <span class="price-tag_per-month">/в месяц</span>
                </div>
                <div class="objInfo-section_flat-parameters">
                  <span class="flat-parameters_roomAmount-span">4-комн.</span>
                  -
                  <span class="flat-parameters_flatArea-span">170 м²</span>
                  -
                  <span class="flat-parameters_flatAddress-span"
                    >Франк-Каменецкого, 28/4</span
                  >
                </div>
                <div class="objInfo-section_flat-description">
                  Роскошная 4х комнатная квартира
                </div>
              </div>
              <div class="advert-card_objAddress-section">
                <img
                  src="../img/main/main_map-checkmark.svg"
                  class="objAddress-section_map-checkmark"
                />
                <span class="objAddress-section_address-span"
                  >Правобережный</span
                >
              </div>
            </div>
          </div>`;
  let newElem = document.createElement("div");
  newElem.innerHTML = moreAdvertisments;
  document
    .querySelector(".flats-section_advertisments-section")
    .append(newElem);
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
