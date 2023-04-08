export default class UserInfo {
    constructor(data) {
        this._name = data.name;
        this._job = data.job;
    }

    getUserInfo() {
        this._profileValues = {
            name: this._name.textContent,
            job: this._job.textContent
        }
        return this._profileValues;
    }

    setUserInfo(name, job) {
        this._name.textContent = name
        this._job.textContent = job
    }
}