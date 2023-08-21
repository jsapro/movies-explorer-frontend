import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  return (
    <>
      <ul className='movies-card-list'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>

      <div className='movies-card-list__btn-container'>
        <button className='movies-card-list__more-btn' type='button' disabled='false'>Ещё</button>
      </div>
    </>
  );
};

export default MoviesCardList;
