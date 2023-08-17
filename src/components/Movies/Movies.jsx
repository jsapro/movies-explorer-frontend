import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import MoviesCard from './MoviesCard/MoviesCard';

const Movies = () => {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <ul className='temp'>
          <MoviesCard />
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
