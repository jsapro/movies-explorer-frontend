import { useLocation } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({
  onSaveMovie,
  onDeleteMovie,
  filteredMoviesArray,
  isShortMovies,
}) => {
  const location = useLocation();

  const getSearchErrorText = () => {
    if (location.pathname === '/movies' && filteredMoviesArray.length === 0) {
      return 'Нужно ввести ключевое слово';
    }
    if (
      location.pathname === '/saved-movies' &&
      filteredMoviesArray.length === 0 &&
      isShortMovies
    ) {
      return 'Пока нет сохранённых короткометражных фильмов';
    }
    if (
      location.pathname === '/saved-movies' &&
      filteredMoviesArray.length === 0
    ) {
      return 'Пока нет сохранённых фильмов';
    }
    return
  };

  return (
    <>
      {filteredMoviesArray.length === 0 ? (
        <p className='search-error-text'>{getSearchErrorText()}</p>
      ) : null}
      <ul className='movies-card-list'>
        {filteredMoviesArray.map((movie, i) => {
          return (
            <MoviesCard
              key={movie.id}
              movie={movie}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
            />
          );
        })}
      </ul>

      {location.pathname === '/movies' && filteredMoviesArray.length !== 0 ? (
        <div className='load-button'>
          <button
            className='load-button__more-btn'
            type='button'
            disabled={false}
          >
            Ещё
          </button>
        </div>
      ) : null}
    </>
  );
};

export default MoviesCardList;
