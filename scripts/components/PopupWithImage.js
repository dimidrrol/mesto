import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    open(name, image) {
        super.open();
        const popupBigImage = document.querySelector('.popup__image');
        const popupDescription = document.querySelector('.popup__description');
        popupBigImage.src = image;
        popupBigImage.alt = name;
        popupDescription.textContent = name;
    }
}