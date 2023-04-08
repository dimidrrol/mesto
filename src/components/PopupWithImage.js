import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupBigImage = document.querySelector('.popup__image');
        this._popupDescription = document.querySelector('.popup__description');
    }
    open(name, image) {
        super.open();
        this._popupBigImage.src = image;
        this._popupBigImage.alt = name;
        this._popupDescription.textContent = name;
    }
}