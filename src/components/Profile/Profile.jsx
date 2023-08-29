import './Profile.css';
import Header from '../Header/Header';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import { useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useEffect } from 'react';

const Profile = ({ handleSignOut, isLoggedIn, onUpdateUser }) => {
  const [responseError, setResponseError] = useState('');
  const [isReadyToSave, setIsReadyToSave] = useState(false);
  const { values, handleChange, errors, isValid, setIsValid } =
    useFormWithValidation();

  const currentUser = useContext(CurrentUserContext);

  const onSignOut = () => {
    handleSignOut();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = values.name;
    const email = values.email;
    onUpdateUser(name, email).catch((err) => {
      setResponseError(err.message);
    });
  };

  useEffect(() => {
    if (
      values.email === currentUser.email &&
      values.name === currentUser.name
    ) {
      return setIsValid(false);
    }
  }, [values, currentUser]);

  useEffect(() => {
   setResponseError('')
  }, [values]);

  const handleEdit = () => {
    setIsReadyToSave(true);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <main className='profile'>
        <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
        <form
          className='profile__form'
          name='profile'
          onSubmit={handleSubmit}
          noValidate
        >
          <label className='profile__label'>
            <span className='profile__input-description'>Имя</span>
            <input
              className='profile__input'
              type='text'
              name='name'
              minLength='2'
              maxLength='30'
              placeholder={currentUser.name}
              required
              onChange={handleChange}
              value={values.name || ''}
            />
          </label>
          <span className='profile__span-error'>{errors.name}</span>
          <label className='profile__label'>
            <span className='profile__input-description'>E-mail</span>
            <input
              className='profile__input'
              type='email'
              name='email'
              minLength='3'
              placeholder={currentUser.email}
              required
              onChange={handleChange}
              value={values.email || ''}
            />
          </label>
          <span className='profile__span-error'>{errors.email}</span>
          <div className='profile__btn-container'>
            {isReadyToSave ? (
              <>
                <p className='profile__submit-error'>{responseError}</p>
                <button
                  className='profile__submit-btn'
                  type='submit'
                  onClick={() => {}}
                  disabled={!isValid || responseError}
                >
                  Сохранить
                </button>
              </>
            ) : (
              <>
                <button
                  className='profile__edit-btn'
                  type='button'
                  onClick={handleEdit}
                >
                  Редактировать
                </button>
                <button
                  className='profile__logout-btn'
                  type='button'
                  onClick={onSignOut}
                >
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </main>
    </>
  );
};

export default Profile;
