import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
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
} from '../utils/constants.js';


const profileValidation = new FormValidator(settingsValidation, popupProfile);
const cardValidation = new FormValidator(settingsValidation, popupCard);
const userInfo = new UserInfo({ name: profileName, job: profileJob });
const popupProfileClass = new PopupWithForm(
  '#popup-profile',
  (formData) => {
    const name = formData['profile-name'];
    const job = formData['profile-job'];
    userInfo.setUserInfo(name, job);
    popupProfileClass.close();
  });
const popupCardClass = new PopupWithForm(
  '#popup-card',
  (formData) => {
    const cardElement = createCard({ name: formData['card-title'], image: formData['card-link'] });
    cardsList.setItem(cardElement);
    popupCardClass.close();
  });
const popupImageClass = new PopupWithImage('.popup_type_image');


popupImageClass.setEventListeners();
popupProfileClass.setEventListeners();
popupCardClass.setEventListeners();


function createCard(item) {
  const card = new Card(item, '#element', handleOpenPopup);
  const cardElement = card.generateCard();
  return cardElement;
}


const cardsList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardsList.setItem(cardElement);
  }
}, cardsContainer);


cardsList.renderItems();


function handleOpenPopup(name, image) {
  popupImageClass.open(name, image);
}


function showPopupProfile() {
  popupProfileClass.open();
  profileValidation.resetValidation();
}


profileValidation.enableValidation();


cardValidation.enableValidation();


profileEditButton.addEventListener('click', showPopupProfile);



profileAddButton.addEventListener('click', function () {
  popupCardClass.open();
  cardValidation.resetValidation();
});