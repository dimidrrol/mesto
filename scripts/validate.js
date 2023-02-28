const showInputError = (formElement, inputElement, inputErrorClass, errorClass, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};


const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
};


const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputErrorClass, errorClass, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
};


function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};


function toggleButtonState(inputList, buttonElement, inactiveButtonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonElement);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(inactiveButtonElement);
        buttonElement.disabled = false;
    }
}


const setEventListener = (formElement, inputElement, inputButtonElement, inputErrorClass, errorClass, inactiveButtonElement) => {
    const inputList = Array.from(formElement.querySelectorAll(inputElement));
    const buttonElement = formElement.querySelector(inputButtonElement);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
            toggleButtonState(inputList, buttonElement);
        });
    });
};


const enableValidation = (form) => {
    const formList = Array.from(document.querySelectorAll(form.inputForm));
    formList.forEach((formElement) => {
        setEventListener(formElement, form.inputElement, form.inputButtonElement, form.inputErrorClass, form.errorClass);
    });
};


enableValidation({
    inputForm: '.popup__form',
    inputElement: '.popup__form-text',
    inputButtonElement: '.popup__submit-button',
    inactiveButtonElement: 'popup__submit-button_inactive',
    inputErrorClass: 'popup__form-text_type_error',
    errorClass: 'popup__form-text-error',
});