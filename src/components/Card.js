export default class Card {
  constructor(data, id, templateSelector, putLike, deleteLike, handleOpenPopup, handleDeletePopup) {
    this._handleOpenPopup = handleOpenPopup;
    this._handleDeletePopup = handleDeletePopup;
    this._data = data;
    this._name = data.name;
    this._image = data.link;
    this._counter = data.likes;
    this._likes = data.likes;
    this._id = id;
    this._putLike = putLike;
    this._deleteLike = deleteLike;
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
    this._likeCounter = this._element.querySelector('.element__like-counter');
    this._deleteButton = this._element.querySelector('.element__delete');
    this._cardId = this._data._id;
    this._setEventListeners();
    this._cardImage.src = this._image;
    this._cardImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    if (this._counter) {
      this._likeCounter.textContent = this._counter.length;
    };
    if (this._likes.some(item => {
      return item._id === this._id;
    })) {
      this._likeButton.classList.add('element__like_active');
    };
    if (this._id !== this._data.owner._id) {
      this._deleteButton.classList.add('element__delete_closed');
    }
    return this._element;
  }

  _setEventListenerLike() {
    this._likeButton.addEventListener('click', () => {
      this.toggleLike(this);
    })
  }

  handleLickClick(data) {
    this._likeButton.classList.toggle('element__like_active');
    this._likeCounter.textContent = data.likes.length;
  }

  toggleLike() {
    if (!this._likeButton.classList.contains('element__like_active')) {
      this._putLike(this);
    } else {
      this._deleteLike(this);
    }
  }

  _setEventListenerDelete() {
    if (this._deleteButton) {
      this._deleteButton.addEventListener('click', () => {
        this._handleDeletePopup(this._cardId, this._element);
      })
    }
  }

  _setEventListeners() {
    this._setEventListenerLike();
    this._setEventListenerDelete();
    this._setEventListenerPopup();
  }


  _setEventListenerPopup() {
    this._cardImage.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._image);
    });
  }

  getCardId() {
    return this._cardId;
  }
}