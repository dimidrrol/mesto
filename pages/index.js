let popup = document.querySelector('.popup');
let popupContainer = popup.querySelector('.popup__container');
let popupCloseButton = popupContainer.querySelector('.popup__close-button');
let popupItems = popupContainer.querySelector('.popup__form-items');
let popupNameInput = popupItems.querySelector('.name-input');
let popupJobInput = popupItems.querySelector('.job-input');
let main = document.querySelector('.main');
let profile = main.querySelector('.profile');
let profileInfo = profile.querySelector('.profile__profile-info');
let profileName = profileInfo.querySelector('.profile__name');
let profileJob = profileInfo.querySelector('.profile__job');
let profileEditButton = profileInfo.querySelector('.profile__edit-button');

function showPopup() {
  popup.classList.add('popup_opened');
}

profileEditButton.addEventListener('click', showPopup);

function closePopup() {
  popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', closePopup);

function handleFormSubmit(event) {
  event.preventDefault()
  profileName.textContent = popupNameInput.value;
  profileJob.textContent = popupJobInput.value;
  popup.classList.remove('popup_opened');
}

popupContainer.addEventListener('submit', handleFormSubmit);