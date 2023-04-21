import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithDeleteForm from '../components/PopupWithDeleteForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import { api } from '../components/Api.js';
import {
  popupProfile,
  popupCard,
  popupAvatar,
  profileName,
  profileJob,
  profileAvatar,
  profileEditButton,
  profileAddButton,
  profileAvatarButton,
  cardsContainer,
  settingsValidation
} from '../utils/constants.js';


Promise.all([api.getUserInfo(), api.getCardsInfo()])
  .then(([userData, initialCards]) => {
    userInfo.setUserInfo(userData);
    cardsList.renderItems(initialCards);
  }).catch((err) => {
    console.log(err);
  })


const profileValidation = new FormValidator(settingsValidation, popupProfile);
const cardValidation = new FormValidator(settingsValidation, popupCard);
const avatarValidation = new FormValidator(settingsValidation, popupAvatar);
const userInfo = new UserInfo({ name: profileName, about: profileJob, avatar: profileAvatar });
const popupImageClass = new PopupWithImage('.popup_type_image');
const popupProfileClass = new PopupWithForm(
  '#popup-profile',
  (formData) => {
    popupProfileClass.renderLoading(true);
    api.patchUserInfo(formData)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupProfileClass.close();
      })
      .finally(() => {
        popupProfileClass.renderLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  });


const popupAvatarClass = new PopupWithForm(
  '#popup-avatar',
  (formData) => {
    popupAvatarClass.renderLoading(true);
    api.patchAvatar(formData)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupAvatarClass.close();
    })
    .finally(() => {
      popupAvatarClass.renderLoading(false);
    })
    .catch((err) => {
      console.log(err);
    })
  }
)


const cardsList = new Section(
  (res) => {
    const cardElement = createCard(res);
    cardsList.setItem(cardElement);
  },
  cardsContainer);


const popupCardClass = new PopupWithForm(
  '#popup-card',
  (formData) => {
    popupCardClass.renderLoading(true);
    api.createCard(formData)
      .then((data) => {
        const cardElement = createCard(data);
        cardsList.setItem(cardElement);
        popupCardClass.close();
      })
      .finally(() => {
        popupCardClass.renderLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  });

const popupWithDeleteForm = new PopupWithDeleteForm(
  '.popup_type_delete-card',
  () => {
    api.deleteCard(popupWithDeleteForm.getCardId())
    .then(() => {
      popupWithDeleteForm.delete();
      popupWithDeleteForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
  });


function createCard(data) {
  const card = new Card(data, userInfo.id, '#element', putLike, deleteLike, handleOpenPopup, handleDeletePopup);
  const cardElement = card.generateCard();
  return cardElement;
}


function putLike(card) {
  api.putLike(card.getCardId())
  .then((data) => {
    card.handleLickClick(data);
  })
  .catch((err) => {
    console.log(err);
  })
}


function deleteLike(card) {
  api.deleteLike(card.getCardId())
  .then((data) => {
    card.handleLickClick(data);
  })
  .catch((err) => {
    console.log(err);
  })
}


function handleOpenPopup(name, image) {
  popupImageClass.open(name, image);
}


function handleDeletePopup(cardId, element) {
  popupWithDeleteForm.open(cardId, element);
}


function showPopupAvatar() {
  popupAvatarClass.open();
  avatarValidation.resetValidation();
}


function showPopupProfile() {
  popupProfileClass.open();
  profileValidation.resetValidation();
  const userData = userInfo.getUserInfo();
  popupProfileClass.setInputValues(userData);
}


popupCardClass.setEventListeners();


profileAddButton.addEventListener('click', function () {
  popupCardClass.open();
  cardValidation.resetValidation();
});


popupImageClass.setEventListeners();
popupWithDeleteForm.setEventListeners();
popupProfileClass.setEventListeners();
popupAvatarClass.setEventListeners();
profileValidation.enableValidation();
cardValidation.enableValidation();
avatarValidation.enableValidation();
profileEditButton.addEventListener('click', showPopupProfile);
profileAvatarButton.addEventListener('click', showPopupAvatar);