import './SavedMovies.css';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';

const SavedMovies = ({combinedMoviesArray}) => {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList combinedMoviesArray={combinedMoviesArray} />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
