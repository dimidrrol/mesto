export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._buttonCloseList = document.querySelectorAll('.popup__close-button');
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose.bind(this));
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
    }

    setEventListeners() {
        this._buttonCloseList.forEach((btn) => {
            const popup = btn.closest('.popup');
            btn.addEventListener('click', () => this.close());
            popup.addEventListener('mousedown', (evt) => {
                if (evt.target === popup) {
                    this.close();
                }
            });
        });
    }
}