export class FormValidator {


    constructor(valid, formElement) {
        this._valid = valid;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._valid.inputElement));
        this._buttonElement = this._formElement.querySelector(this._valid.inputButtonElement);
    }


    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._valid.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._valid.errorClass);
    }


    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._valid.inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._valid.errorClass);
    }


    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }


    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }


    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._valid.inactiveButtonElement);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._valid.inactiveButtonElement);
            this._buttonElement.disabled = false;
        }
    }


    _setEventListener() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    }


    enableValidation() {
        this._setEventListener();
    }
}