import './AuthInput.css';

const AuthInput = () => {
  return (
    <label className='auth-input'>
      <span className='auth-input__name'>Имя инпута</span>
      <input className='auth-input__input' type='text' name='name' minLength='2' maxLength='30' required />
      <span className='auth-input__error-text'>ошибка заполнения инпута</span>
    </label>
  );
};

export default AuthInput;
