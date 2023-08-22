import './MoviesCard.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesCard = () => {


  // =======================================
  // const [movieList, setMovieList] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.nomoreparties.co/beatfilm-movies')
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setMovieList(data);
  //     })
  //     .catch((err) => console.log(`ошибка fetch запроса: ${err.message}`));
  // }, []);

  // console.log('movieList', movieList[10]);
  // =======================================

  const fotoUrl =
    'https://cdn.stocksnap.io/img-thumbs/960w/colorful-boats_C42YPG8SOM.jpg';
  
  const location = useLocation();

  // const isSaved = true;
  const isSaved = false;

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
          <img className='movies-card__img' src={fotoUrl} alt='карточка фильма' />
        </Link>
      </div>
      <div className='movies-card__caption'>
        <h2 className='movies-card__name'>В погоне за Бенкси</h2>
        <p className='movies-card__duration'>1ч 17м</p>
      </div>
    </li>
  );
};

export default MoviesCard;
