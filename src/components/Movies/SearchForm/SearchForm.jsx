import './SearchForm.css';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className='search-form'>
      <form className='search-form__form'>
        <div className='search-form__container'>
          <input className='search-form__input' placeholder='Фильм' type='text' />
          <button className='search-form__button' type='submit'></button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
};

export default SearchForm;
