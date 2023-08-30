import './AuthInput.css';

const AuthInput = ({
  inputDescription,
  name,
  minLength,
  maxLength,
  type,
  handleChange,
  inputError
}) => {
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
        onChange={handleChange}
      />
      <span className='auth-input__error-text'>{inputError}</span>
    </label>
  );
};

export default AuthInput;
