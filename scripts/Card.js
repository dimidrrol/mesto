export class Card {
  constructor(data, templateSelector, handleOpenPopup) {
    this._handleOpenPopup = handleOpenPopup;
    this._name = data.name;
    this._image = data.image;
    this._template = templateSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._template).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__image');
    this._likeButton = this._element.querySelector('.element__like');
    this._setEventListenerLike();
    this._setEventListenerDelete();
    this._setEventListenerPopup();
    this._cardImage.src = this._image;
    this._cardImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    return this._element;
  }

  _setEventListenerLike() {
    this._likeButton.addEventListener('click', () => {
      this._handleLickClick();
    })
  }

  _handleLickClick() {
    this._likeButton.classList.toggle('element__like_active');
  }

  _setEventListenerDelete() {
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleDeleteClick();
    })
  }

  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  _setEventListenerPopup() {
    this._cardImage.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._image);
    });
  }
}