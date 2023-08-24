class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._defaultHeaders = {
      'Content-Type': 'application/json',
    };
    this._authHeaders = {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    };
  }

  _checkResponse(res) {
    console.log(res);
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.statusText}`));
  }

  _request(endPoint, options = {}) {
    const params = {
      headers: {
        'Content-Type-1': 'application/json',
        AuthorizationA: `Bearer ${localStorage.getItem('jwt')}`,
      },
      ...options,
    };
    console.log('params', params);

    return fetch(`${this._baseUrl}/${endPoint}`, params).then(
      this._checkResponse
    );
  }

  register(name, email, password) {
    return this._request('signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
  }

  login(email, password) {
    return this._request('signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(({ data }) => {
      localStorage.setItem('jwt', data);
    });
  }

  getUserInfo() {
    return this._request('users/me/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  }

  updateUserInfo(name, email) {
    return this._request('users/me/', {
      method: 'PATCH',
      body: JSON.stringify({
        name,
        email,
      }),
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    });
  }

  getMovies() {
    return this._request('movies/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    });
  }

  postMovie() {
    return this._request('movies/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: 'country-006',
        director: 'director-006',
        duration: '300',
        year: '2000',
        description: 'aaa-006',
        image:
          'https://cdn.stocksnap.io/img-thumbs/960w/autumn-woods_6A4IBKIYJI.jpg',
        trailerLink: 'https://www.youtube.com',
        thumbnail:
          'https://cdn.stocksnap.io/img-thumbs/960w/autumn-woods_6A4IBKIYJI.jpg',
        movieId: '003',
        nameRU: 'nameRU-003',
        nameEN: 'nameEN-003',
      }),
    });
  }

  deleteMovie(id) {
    return this._request(`movies/${id}/`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    });
  }
}

export default MainApi;
