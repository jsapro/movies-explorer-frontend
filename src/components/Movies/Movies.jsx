import { useState, useEffect } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const Movies = ({ onSaveMovie, onDeleteMovie, combinedMoviesArray }) => {
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [filteredMoviesArray, setFilteredMoviesArray] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    if (searchString !== '') {
      handleSubmitSearch(searchString, isShortMovies);
    }
  }, [isShortMovies]);

  const handleSubmitSearch = (searchString, isShortMovies) => {
    setSearchString(searchString);
    const filteredMoviesArray = combinedMoviesArray.filter((movie) => {

      const matchedSearch = movie.nameRU
        .trim()
        .toLowerCase()
        .includes(searchString.trim().toLowerCase());

      return isShortMovies
        ? movie.duration <= 40 && matchedSearch
        : matchedSearch;
    });
    setFilteredMoviesArray(filteredMoviesArray);
    return filteredMoviesArray;
  };

  const handleCheckBox = (e) => {
    setIsShortMovies(e.target.checked);
  };

  return (
    <>
      <Header />
      <main>
        <SearchForm
          onSearch={handleSubmitSearch}
          isShortMovies={isShortMovies}
          onCheck={handleCheckBox}
          checkboxState={isShortMovies}
        />
        <MoviesCardList
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
          combinedMoviesArray={filteredMoviesArray}
          filteredMoviesArray={filteredMoviesArray}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
