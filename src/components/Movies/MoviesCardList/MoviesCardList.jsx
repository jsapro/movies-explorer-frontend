import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  const initialFilmsToRender = JSON.parse(
    localStorage.getItem('initialMovies')
  );

  return (
    <>
      <ul className='movies-card-list'>
        {initialFilmsToRender.map((movie, i) => {
          return <MoviesCard key={movie.id} movie={movie} />;
        })}
      </ul>

      <div className='load-button'>
        <button
          className='load-button__more-btn'
          type='button'
          disabled={false}
        >
          Ещё
        </button>
      </div>
    </>
  );
};

export default MoviesCardList;
