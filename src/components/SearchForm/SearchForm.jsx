import { useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormWithValidation from '../../hooks/useFormWithValidation';

const SearchForm = ({ onSearch, onCheck, isShortMovies, searchString }) => {
  const { values, handleChange, isValid, setValues } =
    useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(values.searchInput, isShortMovies);
  };

  useEffect(() => {
    setValues((prevState) => {
      return { ...prevState, searchInput: searchString };
    });
  }, [searchString]);

  useEffect(() => {
    setValues((prevState) => {
      return { ...prevState, searchInput: searchString };
    });
  }, []);

  return (
    <section className='search-form'>
      <form
        onSubmit={handleSubmit}
        className='search-form__form'
        name='searchForm'
        noValidate
      >
        <div className='search-form__container'>
          <input
            onChange={handleChange}
            value={values.searchInput}
            className='search-form__input'
            placeholder='Фильм'
            type='text'
            name='searchInput'
            required
          />
          <button
            className='search-form__button'
            type='submit'
            disabled={!isValid}
          ></button>
        </div>
        <FilterCheckbox onCheck={onCheck} isShortMovies={isShortMovies} />
      </form>
    </section>
  );
};

export default SearchForm;
