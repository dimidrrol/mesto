import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';


const popupProfile = document.querySelector('#popup-profile');
const popupProfileContainer = popupProfile.querySelector('.popup__container_type_profile');
const popupCloseProfileButton = popupProfileContainer.querySelector('.popup__close-button_type_profile');
const popupProfileItem = popupProfileContainer.querySelector('.popup__form-items_type_profile');
const popupNameInput = popupProfileItem.querySelector('#name-input');
const popupJobInput = popupProfileItem.querySelector('#job-input');
const popupCard = document.querySelector('#popup-card');
const popupCardContainer = popupCard.querySelector('.popup__container_type_card');
const popupCloseCardButton = popupCardContainer.querySelector('.popup__close-button_type_card');
const popupCardItem = popupCardContainer.querySelector('.popup__form-items_type_card');
const popupTitleInput = popupCardItem.querySelector('#title-input');
const popupLinkInput = popupCardItem.querySelector('#link-input');
const main = document.querySelector('.main');
const profile = main.querySelector('.profile');
const profileInfo = profile.querySelector('.profile__profile-info');
const profileName = profileInfo.querySelector('.profile__name');
const profileJob = profileInfo.querySelector('.profile__job');
const profileEditButton = profileInfo.querySelector('.profile__edit-button');
const profileAddButton = profile.querySelector('.profile__add-button');
const cardsContainer = main.querySelector('.elements');
const buttonCloseList = document.querySelectorAll('.popup__close-button');
const popupBigImage = document.querySelector('.popup__image');
const popupDescription = document.querySelector('.popup__description');
const popupImage = document.querySelector('.popup_type_image');


const initialCards = [
  {
    name: 'Архыз',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const cardElement = {
  inputForm: '.popup__form',
  inputElement: '.popup__form-text',
  inputButtonElement: '.popup__submit-button',
  inactiveButtonElement: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__form-text_type_error',
  errorClass: 'popup__form-text-error'
};


buttonCloseList.forEach((btn) => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
});


function createCard(item) {
  const card = new Card(item, '#element', handleOpenPopup);
  const cardElement = card.generateCard();
  return cardElement;
}


initialCards.forEach((item) => {
  cardsContainer.prepend(createCard(item));
});


function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}


const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}


const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}


function handleOpenPopup(name, image) {
  popupBigImage.src = image;
  popupBigImage.alt = name;
  popupDescription.textContent = name;
  openPopup(popupImage);
}


function showPopupProfile() {
  openPopup(popupProfile, popupCloseProfileButton);
  popupNameInput.value = profileName.textContent;
  popupJobInput.value = profileJob.textContent;
  const emptyValid = new FormValidator(cardElement, popupProfile);
  emptyValid.resetValidation();
}


function handleFormProfileSubmit(event) {
  event.preventDefault()
  profileName.textContent = popupNameInput.value;
  profileJob.textContent = popupJobInput.value;
  closePopup(popupProfile);
}


function handleFormCardSubmit(evt) {
  evt.preventDefault();
  const card = new Card({ name: popupTitleInput.value, image: popupLinkInput.value }, '#element', handleOpenPopup);
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);
  closePopup(popupCard);
  evt.target.reset();
  evt.submitter.disabled = true;
}


const profileValidation = new FormValidator(cardElement, popupProfile);
profileValidation.enableValidation();

const cardValidation = new FormValidator(cardElement, popupCard);
cardValidation.enableValidation();


profileEditButton.addEventListener('click', showPopupProfile);
profileAddButton.addEventListener('click', function () {
  openPopup(popupCard, popupCloseCardButton);
  const emptyValid = new FormValidator(cardElement, popupCard);
  emptyValid.resetValidation();
});
popupProfileContainer.addEventListener('submit', handleFormProfileSubmit);
popupCardContainer.addEventListener('submit', handleFormCardSubmit);