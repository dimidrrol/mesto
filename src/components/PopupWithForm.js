import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__form-text');
        this._buttonSubmit = this._popup.querySelector('.popup__submit-button');
        this._buttonSubmitText = this._buttonSubmit.value;
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }


    setInputValues(data) {
        this._inputList.forEach((input) => {
            input.value = data[input.name];
        });
    }


    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    
    close() {
        super.close();
        this._popupForm.reset();
    }


    renderLoading(isLoading) {
        if (isLoading) {
           this._buttonSubmit.value = 'Сохранение...';
        } else if (isLoading === false) {
            this._buttonSubmit.value = this._buttonSubmitText;
        }
    }
}