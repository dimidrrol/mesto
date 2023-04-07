export default class UserInfo {
    constructor(data) {
        this._name = data.name;
        this._job = data.job;
    }

    getUserInfo() {
        this._nameInput = document.querySelector('#name-input');
        this._jobInput = document.querySelector('#job-input');
        this._nameInput.value = this._name.textContent;
        this._jobInput.value = this._job.textContent;
    }

    setUserInfo() {
        this._name.textContent = this._nameInput.value;
        this._job.textContent = this._jobInput.value;
    }
}