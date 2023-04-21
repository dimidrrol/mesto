import Popup from './Popup.js';

export default class PopupWithDeleteForm extends Popup {
    constructor(popupSelector, handleDeleteForm) {
        super(popupSelector);
        this._handleDeleteForm = handleDeleteForm;
        this._deleteButtom = this._popup.querySelector('.popup__submit-button_type_delete-card');

    }


    open(cardId, element) {
        super.open();
        this._cardId = cardId;
        this._element = element;
        this._deleteButtom.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleDeleteForm(this._cardId, this._element);
        });
    }


    delete() {
        this._element.remove();
    }


    getCardId() {
        return this._cardId;
    }
}