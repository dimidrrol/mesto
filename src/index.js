import './index.css';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import {
  popupProfile,
  popupProfileContainer,
  popupCard,
  popupCardContainer,
  popupTitleInput,
  popupLinkInput,
  profileName,
  profileJob,
  profileEditButton,
  profileAddButton,
  cardsContainer,
  popupImage,
  initialCards,
  settingsValidation
} from '../scripts/utils/constants.js';


const profileValidation = new FormValidator(settingsValidation, popupProfile);
const cardValidation = new FormValidator(settingsValidation, popupCard);
const userInfo = new UserInfo({ name: profileName, job: profileJob });
const popupProfileClass = new PopupWithForm(popupProfile, handleFormProfileSubmit);
const popupCardClass = new PopupWithForm(popupCard, handleFormCardSubmit);
const popupImageClass = new PopupWithImage(popupImage);


popupImageClass.setEventListeners();


const cardsList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#element', handleOpenPopup);
    const cardElement = card.generateCard();
    cardsList.setItem(cardElement);
  }
}, cardsContainer);


cardsList.renderItems();


function handleOpenPopup(name, image) {
  popupImageClass.open(name, image);
}


function showPopupProfile() {
  popupProfileClass.open();
  userInfo.getUserInfo();
  popupProfileClass.setEventListeners(popupProfileContainer);
  profileValidation.resetValidation();
}


function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  userInfo.setUserInfo();
  popupProfileClass.close();
}


function handleFormCardSubmit(evt) {
  evt.preventDefault();
  const cardFromForm = new Section({
    data: [{ name: popupTitleInput.value, image: popupLinkInput.value }],
    renderer: (item) => {
      const card = new Card(item, '#element', handleOpenPopup);
      const cardElement = card.generateCard();
      cardFromForm.setItem(cardElement);
    }
  }, cardsContainer);
  cardFromForm.renderItems();
  popupCardClass.close();
}


profileValidation.enableValidation();


cardValidation.enableValidation();


profileEditButton.addEventListener('click', showPopupProfile);


profileAddButton.addEventListener('click', function () {
  popupCardClass.open();
  popupCardClass.setEventListeners(popupCardContainer);
  cardValidation.resetValidation();
});