import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';

const Movies = ({ onSaveMovie, onDeleteMovie, combinedMoviesArray }) => {



  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList onSaveMovie={onSaveMovie} onDeleteMovie={onDeleteMovie} combinedMoviesArray={combinedMoviesArray} />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
