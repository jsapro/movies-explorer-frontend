import './SavedMovies.css';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';

const SavedMovies = ({ combinedMoviesArray, onDeleteMovie }) => {
  const onlySavedMoviesArray = combinedMoviesArray.filter(
    (movie) => movie._id !== ''
  );
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList
          onDeleteMovie={onDeleteMovie}
          combinedMoviesArray={onlySavedMoviesArray}
        />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
