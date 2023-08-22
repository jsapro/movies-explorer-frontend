import './AuthInput.css';

const AuthInput = ({ inputDescription, name, minLength, maxLength, type }) => {
  return (
    <label className='auth-input'>
      <span className='auth-input__name'>{inputDescription}</span>
      <input
        className='auth-input__input'
        type={type}
        name={name}
        minLength={minLength || null}
        maxLength={maxLength || null}
        placeholder=''
        required
        onChange={() => {}}
      />
      <span className='auth-input__error-text'>ошибка заполнения инпута</span>
    </label>
  );
};

export default AuthInput;
