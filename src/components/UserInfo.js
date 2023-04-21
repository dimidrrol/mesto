export default class UserInfo {
    constructor(data) {
        this._name = data.name;
        this._job = data.about;
        this._avatar = data.avatar;
    }

    getUserInfo() {
        this._profileValues = {
            name: this._name.textContent,
            about: this._job.textContent
        }
        return this._profileValues;
    }

    setUserInfo({name, about, avatar, _id}) {
        this._name.textContent = name;
        this._job.textContent = about;
        this._avatar.src = avatar;
        this.id = _id;
    }
}