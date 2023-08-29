export const BEATFILMMOVIES_URL =
  'https://api.nomoreparties.co/beatfilm-movies';
export const BASIC_MOVIES_URL = 'https://api.nomoreparties.co';
// export const MAIN_BACKEND_URL = 'http://localhost:3000';
export const MAIN_BACKEND_URL = 'https://api.viewport-jsapro.nomoreparties.co';

export const filter = (movies, search, isShort) => {
  return movies.filter((movie) => {
    const matchedSearch =
      movie.nameRU.trim().toLowerCase().includes(search.trim().toLowerCase()) ||
      movie.nameEN.trim().toLowerCase().includes(search.trim().toLowerCase());

    return isShort ? movie.duration <= 40 && matchedSearch : matchedSearch;
  });
};
