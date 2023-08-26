import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const Movies = ({ onSaveMovie, onDeleteMovie, savedMovies }) => {



  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList onSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie} savedMovies={savedMovies} />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
