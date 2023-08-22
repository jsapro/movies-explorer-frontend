import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <label className='filter-checkbox' htmlFor='checkbox'>
      <input className='filter-checkbox__input' id='checkbox' type='checkbox'></input>
      <span className='filter-checkbox__text'>Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
