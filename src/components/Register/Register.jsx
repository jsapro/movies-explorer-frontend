import { Link } from 'react-router-dom';
import './Register.css';
import Logo from '../Logo/Logo';
import AuthInput from '../AuthInput/AuthInput';

const Register = () => {
  return (
    <main>
      <div>
        <Logo />
        <h1>Добро пожаловать!</h1>
        <form>

          <AuthInput></AuthInput>
          <AuthInput></AuthInput>
          <AuthInput></AuthInput>

          {/* <label>
            <span>Имя</span>
            <input
              type='text'
              name='name'
              minLength='2'
              maxLength='30'
              required
            />
            <span>ошибка-1</span>
          </label>

          <label>
            <span>E-mail</span>
            <input type='email' name='email' required />
            <span>ошибка-2</span>
          </label>

          <label className='form__label'>
            <span>Пароль</span>
            <input type='password' name='password' minLength='8' required />
            <span>ошибка-3</span>
          </label>

          <p>Что-то пошло не так...</p>

          <button type='submit' disabled='false'>
            Зарегистрироваться
          </button>

          <p>
            Уже зарегистрированы?
            <Link to='/signin'>Войти</Link>
          </p> */}
        </form>
      </div>
    </main>
  );
};

export default Register;
