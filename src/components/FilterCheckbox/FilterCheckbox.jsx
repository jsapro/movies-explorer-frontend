import './FilterCheckbox.css';

const FilterCheckbox = ({ onCheck, checkboxState }) => {
  
  const handleCheck = (e) => {
    onCheck(e)
  }

  return (
    <label className='filter-checkbox' htmlFor='checkbox'>
      <input onChange={handleCheck} className='filter-checkbox__input' id='checkbox' name='checkbox' type='checkbox' checked={checkboxState}></input>
      <span className='filter-checkbox__text'>Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
