import { useState, useEffect } from 'react';
import './SavedMovies.css';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import { filter } from '../../utils/constants';

const SavedMovies = ({ combinedMoviesArray, onDeleteMovie }) => {
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [filteredMoviesArray, setFilteredMoviesArray] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
      handleSubmitSearch(searchString, isShortMovies);
  }, [isShortMovies, combinedMoviesArray]);

  const handleSubmitSearch = (searchString, isShortMovies) => {
    setSearchString(searchString);
    const onlySavedMoviesArray = combinedMoviesArray.filter(
      (movie) => movie._id !== ''
    );
    const filteredMoviesArray = filter(
      onlySavedMoviesArray,
      searchString,
      isShortMovies
    );
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
          />
        <MoviesCardList
          isShortMovies={isShortMovies}
          onDeleteMovie={onDeleteMovie}
          filteredMoviesArray={filteredMoviesArray}
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
