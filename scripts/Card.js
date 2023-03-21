export class Card {
  constructor(data, templateSelector) {
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
    this._setEventListenerLike();
    this._setEventListenerDelete();
    this._setEventListenerPopup();
    this._element.querySelector('.element__image').src = this._image;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    return this._element;
  }

  _setEventListenerLike() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLickClick();
    })
  }

  _handleLickClick() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _setEventListenerDelete() {
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleDeleteClick();
    })
  }

  _handleDeleteClick() {
    this._element.querySelector('.element__delete').closest('.element').remove();
  }

  _setEventListenerPopup() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      const popupBigImage = document.querySelector('.popup__image');
      const popupDescription = document.querySelector('.popup__description');
      const popupImage = document.querySelector('.popup_type_image');
      popupBigImage.src = this._image;
      popupBigImage.alt = this._name;
      popupDescription.textContent = this._name;
      popupImage.classList.add('popup_opened');
      document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          popupImage.classList.remove('popup_opened');
        }
      });
    });
  }
}