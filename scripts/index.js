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
const elementTemplate = cardsContainer.querySelector('#element').content;
const popupImage = document.querySelector('.popup_type_image');
const popupImageContainer = popupImage.querySelector('.popup__container_type_image');
const popupBigImage = popupImageContainer.querySelector('.popup__image');
const popupDescription = popupImageContainer.querySelector('.popup__description');
const popupCloseImageButton = popupImageContainer.querySelector('.popup__close-button_type_image');
const buttonCloseList = document.querySelectorAll('.popup__close-button');


buttonCloseList.forEach((btn) => {
  const popup = btn.closest('.popup');
  btn.addEventListener('click', () => closePopup(popup));
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === popup) {
      closePopup(popup);
    }
  });
});


function handlePopupImageContent(item) {
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
  elementImage.addEventListener('click', function () {
    handlePopupImageContent(item);
    openPopup(popupImage, popupCloseImageButton);
  });
  return elementPlace;
}


function addCard(item) {
  cardsContainer.prepend(createCard(item));
}


initialCards.forEach(addCard);


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


function showPopupProfile(evt) {
  openPopup(popupProfile, popupCloseProfileButton);
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
  addCard({ name: popupTitleInput.value, image: popupLinkInput.value });
  closePopup(popupCard);
  evt.target.reset();
  evt.submitter.classList.add('popup__submit-button_inactive');
  evt.submitter.disabled = true;
}


profileEditButton.addEventListener('click', showPopupProfile);
profileAddButton.addEventListener('click', function () {
  openPopup(popupCard, popupCloseCardButton);
});
popupProfileContainer.addEventListener('submit', handleFormProfileSubmit);
popupCardContainer.addEventListener('submit', handleFormCardSubmit);