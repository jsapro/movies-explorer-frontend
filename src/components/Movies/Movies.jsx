import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';

const Movies = () => {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
      </main>
      <Footer />
    </>
  );
};

export default Movies;
