import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._inputValues = Array.from(this._popup.querySelectorAll('.popup__form-text'));
    }

    setEventListeners(popupElement) {
        super.setEventListeners();
        this._popupContainer = popupElement;
        this._popupContainer.addEventListener('submit', this._handleFormSubmit);
    }

    close() {
        super.close();
        this._getInputValues();
        this._inputValues.forEach((item) => {
            item.value = '';
        });
    }
}