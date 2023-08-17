import './MoviesCard.css';
import { Link, useLocation } from 'react-router-dom';

const MoviesCard = () => {
  const location = useLocation();

  const isSaved = true;
  // const isSaved = false;

  const handleBtnClick = () => {
    if (location.pathname === '/saved-movies') return () => {};
    if (isSaved) return () => {};
    return () => {};
  };

  const getBtnClassName = () => {
    if (location.pathname === '/saved-movies')
      return 'movies-card__btn_type_collection';

    if (isSaved) return 'movies-card__btn_type_active';

    return 'movies-card__btn_type_normal';
  };

  return (
    <li className='movies-card'>
      <div className='movies-card__img-container'>
        <button
          onClick={handleBtnClick}
          className={`movies-card__btn ${getBtnClassName()}`}
          type='button'
        />
        <Link className='movies-card__link' to='#' target='_blank'>
          <img className='movies-card__img' src={'card.link'} alt='' />
        </Link>
      </div>
      <div className='movies-card__caption'>
        <h2 className='movies-card__name'>name</h2>
        <p className='movies-card__duration'>duration</p>
      </div>
    </li>
  );
};

export default MoviesCard;
