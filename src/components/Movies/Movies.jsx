import { useState, useEffect } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import { filter } from '../../utils/constants';

const Movies = ({
  onSaveMovie,
  onDeleteMovie,
  setCombinedMoviesArray,
  onSearch,
  serverResponceError
}) => {
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
    onSearch().then((combinedMoviesArray) => {
      setCombinedMoviesArray(combinedMoviesArray)
      const filteredMoviesArray = filter(
        combinedMoviesArray,
        searchString,
        isShortMovies
      );
      setFilteredMoviesArray(filteredMoviesArray);
      return filteredMoviesArray;
    }).catch(err => console.log(err))

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
          serverResponceError={serverResponceError}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
          filteredMoviesArray={filteredMoviesArray}
        />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
