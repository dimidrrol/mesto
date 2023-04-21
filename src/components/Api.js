class Api {
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
    }

    getCardsInfo() {
        return fetch(`${this.url}/cards`, {
            headers: this.headers
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    createCard({ name, link }) {
        return fetch(`${this.url}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                "name": name,
                "link": link
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
    }

    getUserInfo() {
        return fetch(`${this.url}/users/me`, {
            headers: this.headers
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
    }

    patchUserInfo({ name, about }) {
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                "name": name,
                "about": about
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
    }

    patchAvatar({ avatar }) {
        return fetch(`${this.url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                "avatar": avatar
            })
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
    }

    putLike(id) {
        return fetch(`${this.url}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this.headers
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
    }

    deleteLike(id) {
        return fetch(`${this.url}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this.headers
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
    }

    deleteCard(id) {
        return fetch(`${this.url}/cards/${id}`, {
            method: 'DELETE',
            headers: this.headers
        }).then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
    }
}


export const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-64",
    headers: {
      'content-type': 'application/json',
      authorization: '1a16e618-3531-4834-94e8-1a3de9e66fb4'
    }
  })