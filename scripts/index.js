let popup = document.querySelector('.popup');
let popupContainer = popup.querySelector('.popup__container');
let popupCloseButton = popupContainer.querySelector('.popup__close-button');
let popupItems = popupContainer.querySelector('.popup__form-items');
let popupNameInput = popupItems.querySelector('.popup__form-text_type_name');
let popupJobInput = popupItems.querySelector('.popup__form-text_type_job');
let main = document.querySelector('.main');
let profile = main.querySelector('.profile');
let profileInfo = profile.querySelector('.profile__profile-info');
let profileName = profileInfo.querySelector('.profile__name');
let profileJob = profileInfo.querySelector('.profile__job');
let profileEditButton = profileInfo.querySelector('.profile__edit-button');

function showPopup() {
  popup.classList.add('popup_opened');
  popupNameInput.textContent = profileName.value;
  popupJobInput.textContent = profileJob.value;
}


function closePopup() {
  popup.classList.remove('popup_opened');
}


function handleFormSubmit(event) {
  event.preventDefault()
  profileName.textContent = popupNameInput.value;
  profileJob.textContent = popupJobInput.value;
  popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', showPopup);
popupCloseButton.addEventListener('click', closePopup);
popupContainer.addEventListener('submit', handleFormSubmit);