import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
  return (
    <ul className='movies-card-list'>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
      <MoviesCard/>
    </ul>
  );
};

export default MoviesCardList;
