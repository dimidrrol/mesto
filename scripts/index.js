const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('#popup-profile');
const popupProfileContainer = popupProfile.querySelector('.popup__container_type_profile');
const popupContainer = popup.querySelector('.popup__container');
const popupCloseProfileButton = popupProfileContainer.querySelector('.popup__close-button_type_profile');
const popupProfileItems = popupProfileContainer.querySelector('.popup__form-items_type_profile');
const popupNameInput = popupProfileItems.querySelector('.popup__form-text_type_name');
const popupJobInput = popupProfileItems.querySelector('.popup__form-text_type_job');
const popupCard = document.querySelector('#popup-card');
const popupCardContainer = popupCard.querySelector('.popup__container_type_card');
const popupCloseCardButton = popupCardContainer.querySelector('.popup__close-button_type_card');
const popupCardItems = popupCardContainer.querySelector('.popup__form-items_type_card');
const popupTitleInput = popupCardItems.querySelector('.popup__form-text_type_title');
const popupLinkInput = popupCardItems.querySelector('.popup__form-text_type_link');
const main = document.querySelector('.main');
const profile = main.querySelector('.profile');
const profileInfo = profile.querySelector('.profile__profile-info');
const profileName = profileInfo.querySelector('.profile__name');
const profileJob = profileInfo.querySelector('.profile__job');
const profileEditButton = profileInfo.querySelector('.profile__edit-button');
const profileAddButton = profile.querySelector('.profile__add-button');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const elements = main.querySelector('.elements');
const elementTemplate = elements.querySelector('#element').content;
const popupImage = document.querySelector('.popup-image');
const popupImageContainer = popupImage.querySelector('.popup-image__container');
const popupCloseImageButton = popupImageContainer.querySelector('.popup__close-button_type_image');


function render() {
  initialCards.forEach(renderCard);
}


function renderCard({ name, link }) {
  elementPlace = elementTemplate.querySelector('.element').cloneNode(true);
  elementPlace.querySelector('.element__image').src = link;
  elementPlace.querySelector('.element__title').textContent = name;
  elementPlace.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  elementPlace.querySelector('.element__delete').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });
  elementPlace.querySelector('.element__image').addEventListener('click', function (evt) {
    popupImageContainer.querySelector('.popup-image__image').src = link;
    popupImageContainer.querySelector('.popup-image__description').textContent = name;
    popupImage.classList.add('popup_opened');
  });
  elements.prepend(elementPlace);
}


function showPopupProfile() {
  popupProfile.classList.add('popup_opened');
  popupNameInput.textContent = profileName.value;
  popupJobInput.textContent = profileJob.value;
}


function closePopupProfile() {
  popupProfile.classList.remove('popup_opened');
}


function handleFormProfileSubmit(event) {
  event.preventDefault()
  profileName.textContent = popupNameInput.value;
  profileJob.textContent = popupJobInput.value;
  popupProfile.classList.remove('popup_opened');
}


function showPopupCard() {
  popupCard.classList.add('popup_opened');
}


function closePopupCard() {
  popupCard.classList.remove('popup_opened');
}


function handleFormCardSubmit(evt) {
  evt.preventDefault();
  elementPlace = elementTemplate.querySelector('.element').cloneNode(true);
  elementPlace.querySelector('.element__image').src = popupLinkInput.value;
  elementPlace.querySelector('.element__title').textContent = popupTitleInput.value;
  elementPlace.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  elementPlace.querySelector('.element__delete').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });
  elementPlace.querySelector('.element__image').addEventListener('click', function (evt) {
    popupImageContainer.querySelector('.popup-image__image').src = evt.target.closest('.element__image').src;
    popupImageContainer.querySelector('.popup-image__description').textContent = evt.target.closest('.element').querySelector('.element__title').textContent;
    popupImage.classList.add('popup_opened');
  });
  elements.prepend(elementPlace);
  popupCard.classList.remove('popup_opened');
  evt.target.reset();
}


function closePopupImage() {
  popupImage.classList.remove('popup_opened');
}


render();
profileEditButton.addEventListener('click', showPopupProfile);
profileAddButton.addEventListener('click', showPopupCard);
popupCloseProfileButton.addEventListener('click', closePopupProfile);
popupCloseCardButton.addEventListener('click', closePopupCard);
popupProfileContainer.addEventListener('submit', handleFormProfileSubmit);
popupCardContainer.addEventListener('submit', handleFormCardSubmit);
popupCloseImageButton.addEventListener('click', closePopupImage);