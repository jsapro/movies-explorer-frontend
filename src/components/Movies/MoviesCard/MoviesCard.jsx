import './MoviesCard.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesCard = ({ movie, onSaveMovie, onDeleteMovie }) => {
  const [savedMovie, setSavedMovie] = useState('');

  const location = useLocation();
  const checkIsMovieSaved = () => {
    if (movie._id !== '') return true;
    return false;
  };

  const getMovieDuration = () => {
    if (movie?.duration <= 40) return `${movie?.duration}м`;
    const hours = movie?.duration / 60;
    const minutes = movie?.duration % 60;
    return `${hours.toFixed()}ч ${minutes}м`;
  };

  const handleBtnClick = () => {
    if (location.pathname === '/saved-movies') return () => {};
    if (checkIsMovieSaved()) return onDeleteMovie(savedMovie);
    return onSaveMovie(movie)
  };

  const getBtnClassName = () => {
    if (location.pathname === '/saved-movies')
      return 'movies-card__btn_type_collection';

    if (checkIsMovieSaved()) return 'movies-card__btn_type_active';

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
        <Link
          className='movies-card__link'
          to={movie.trailerLink}
          target='_blank'
        >
          <img
            className='movies-card__img'
            src={movie.image}
            alt='карточка фильма'
          />
        </Link>
      </div>
      <div className='movies-card__caption'>
        <h2 className='movies-card__name'>{movie.nameRU}</h2>
        <p className='movies-card__duration'>{getMovieDuration()}</p>
      </div>
    </li>
  );
};

export default MoviesCard;
