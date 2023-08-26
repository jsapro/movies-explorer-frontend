import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ onSaveMovie, onDeleteMovie, combinedMoviesArray }) => {

  return (
    <>
      <ul className='movies-card-list'>
        {combinedMoviesArray.map((movie, i) => {
          return <MoviesCard key={movie.id} movie={movie} onSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie} />;
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
