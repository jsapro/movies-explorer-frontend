import { Link } from 'react-router-dom';
import './AuthSubmit.css';

const AuthSubmit = () => {
  return (
    <div className='auth-submit'>
      <p className='auth-submit__error-text'>Что-то пошло не так...</p>

      <button className='auth-submit__button' type='submit' disabled='false'>
        Зарегистрироваться
      </button>

      <p className='auth-submit__question'>
        Уже зарегистрированы?
        <Link className='auth-submit__link' to='/signin'>Войти</Link>
      </p>
    </div>
  );
};

export default AuthSubmit;
