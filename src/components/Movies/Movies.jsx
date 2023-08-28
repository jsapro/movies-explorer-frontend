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
  serverResponceError,
}) => {
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [filteredMoviesArray, setFilteredMoviesArray] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    if (searchString !== '') {
      handleSubmitSearch(searchString, isShortMovies);
    }
  }, [isShortMovies]);

  useEffect(() => {
    onSearch().then((combinedMoviesArray) => {
      setCombinedMoviesArray(combinedMoviesArray);
      const movies = JSON.parse(localStorage.getItem('filteredMoviesArray'));
      const search = JSON.parse(localStorage.getItem('lastSearchString'));
      const isShort = JSON.parse(localStorage.getItem('isShortMovies'));
      console.log(movies, isShort, search);
      const lastSearchResultArray = filter(combinedMoviesArray, search, isShort);
      setFilteredMoviesArray(lastSearchResultArray);
      setSearchString(search)
      setIsShortMovies(isShort)
    });
  }, []);

  const handleSubmitSearch = (searchString, isShortMovies) => {
    setSearchString(searchString);
    localStorage.setItem('lastSearchString', JSON.stringify(searchString));
    onSearch()
      .then((combinedMoviesArray) => {
        setCombinedMoviesArray(combinedMoviesArray);
        const filteredMoviesArray = filter(
          combinedMoviesArray,
          searchString,
          isShortMovies
        );
        setFilteredMoviesArray(filteredMoviesArray);
        localStorage.setItem(
          'filteredMoviesArray',
          JSON.stringify(filteredMoviesArray)
        );
        return filteredMoviesArray;
      })
      .catch((err) => console.log(err));

    return filteredMoviesArray;
  };

  const handleCheckBox = (e) => {
    setIsShortMovies(e.target.checked);
    localStorage.setItem('isShortMovies', e.target.checked);
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
