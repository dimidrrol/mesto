export const popupProfile = document.querySelector('#popup-profile');
export const popupProfileContainer = popupProfile.querySelector('.popup__container_type_profile');
export const popupCard = document.querySelector('#popup-card');
export const popupCardContainer = popupCard.querySelector('.popup__container_type_card');
export const popupCardItem = popupCardContainer.querySelector('.popup__form-items_type_card');
export const popupTitleInput = popupCardItem.querySelector('#title-input');
export const popupLinkInput = popupCardItem.querySelector('#link-input');
export const main = document.querySelector('.main');
export const profile = main.querySelector('.profile');
export const profileInfo = profile.querySelector('.profile__profile-info');
export const profileName = profileInfo.querySelector('.profile__name');
export const profileJob = profileInfo.querySelector('.profile__job');
export const profileEditButton = profileInfo.querySelector('.profile__edit-button');
export const profileAddButton = profile.querySelector('.profile__add-button');
export const cardsContainer = main.querySelector('.elements');
export const popupImage = document.querySelector('.popup_type_image');


export const initialCards = [
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


export const settingsValidation = {
  inputForm: '.popup__form',
  inputElement: '.popup__form-text',
  inputButtonElement: '.popup__submit-button',
  inactiveButtonElement: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__form-text_type_error',
  errorClass: 'popup__form-text-error'
};