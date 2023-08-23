class MoviesApi {
  constructor(url) {
    this._url = url;
  }

  getInitialMovies() {
    return fetch(this._url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) return res.json();
        return Promise.reject(
          new Error(`Ошибка получения фильмов с сервера: ${res.status}`)
        );
      })
      .catch((err) => console.log(err.message));
  }
}

export default MoviesApi;
