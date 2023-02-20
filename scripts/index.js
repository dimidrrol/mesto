const popupProfile = document.querySelector('#popup-profile');
const popupProfileContainer = popupProfile.querySelector('.popup__container_type_profile');
const popupCloseProfileButton = popupProfileContainer.querySelector('.popup__close-button_type_profile');
const popupProfileItem = popupProfileContainer.querySelector('.popup__form-items_type_profile');
const popupNameInput = popupProfileItem.querySelector('.popup__form-text_type_name');
const popupJobInput = popupProfileItem.querySelector('.popup__form-text_type_job');
const popupCard = document.querySelector('#popup-card');
const popupCardContainer = popupCard.querySelector('.popup__container_type_card');
const popupCloseCardButton = popupCardContainer.querySelector('.popup__close-button_type_card');
const popupCardItem = popupCardContainer.querySelector('.popup__form-items_type_card');
const popupTitleInput = popupCardItem.querySelector('.popup__form-text_type_title');
const popupLinkInput = popupCardItem.querySelector('.popup__form-text_type_link');
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
const cardsContainer = main.querySelector('.elements');
const elementTemplate = cardsContainer.querySelector('#element').content;
const popupImage = document.querySelector('.popup_type_image');
const popupImageContainer = popupImage.querySelector('.popup__container_type_image');
const popupBigImage = popupImageContainer.querySelector('.popup__image');
const popupDescription = popupImageContainer.querySelector('.popup__description');
const popupCloseImageButton = popupImageContainer.querySelector('.popup__close-button_type_image');


function popupImageContent(item) {
  popupBigImage.src = item.image;
  popupBigImage.alt = item.name;
  popupDescription.textContent = item.name;
}


function createCard(item) {
  const elementPlace = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = elementPlace.querySelector('.element__image');
  elementImage.src = item.image;
  elementImage.alt = item.name;
  elementPlace.querySelector('.element__title').textContent = item.name;
  elementPlace.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  elementPlace.querySelector('.element__delete').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });
  elementImage.addEventListener('click', function (evt) {
    popupImageContent(item);
    openPopup(popupImage);
  });
  return elementPlace;
}


function addCard(item) {
  cardsContainer.prepend(createCard(item));
}


initialCards.forEach(addCard);


const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}


function showPopupProfile() {
  openPopup(popupProfile);
  popupNameInput.value = profileName.textContent;
  popupJobInput.value = profileJob.textContent;
}


function handleFormProfileSubmit(event) {
  event.preventDefault()
  profileName.textContent = popupNameInput.value;
  profileJob.textContent = popupJobInput.value;
  closePopup(popupProfile);
}


function handleFormCardSubmit(evt) {
  evt.preventDefault();
  addCard({name: popupTitleInput.value, image: popupLinkInput.value});
  closePopup(popupCard);
  evt.target.reset();
}


profileEditButton.addEventListener('click', showPopupProfile);
profileAddButton.addEventListener('click', function() {
  openPopup(popupCard);
});
popupCloseProfileButton.addEventListener('click', function() {
  closePopup(popupProfile);
});
popupCloseCardButton.addEventListener('click', function() {
  closePopup(popupCard);
});
popupProfileContainer.addEventListener('submit', handleFormProfileSubmit);
popupCardContainer.addEventListener('submit', handleFormCardSubmit);
popupCloseImageButton.addEventListener('click', function() {
  closePopup(popupImage);
});