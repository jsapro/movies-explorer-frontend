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

      <div className='load-button'>
        <button className='load-button__more-btn' type='button' disabled={false}>Ещё</button>
      </div>
    </>
  );
};

export default MoviesCardList;
