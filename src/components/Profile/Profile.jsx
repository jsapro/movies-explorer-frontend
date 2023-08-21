import './Profile.css';
import Header from '../Header/Header';

const Profile = () => {

  // Выбор кнопки Редактировать/Сохранить
  // const isReadyToSave = true;
  const isReadyToSave = false;

  return (
    <>
      <Header />

      <main className='profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form' name='profile'>
          <label className='profile__label'>
            <span className='profile__input-description'>Имя</span>
            <input
              className='profile__input'
              type='text'
              name='name'
              minLength='2'
              maxLength='30'
              placeholder=''
              required
              onChange={() => {}}
            />
          </label>
          <span className='profile__span-error'>Что-то пошло не так... </span>
          <label className='profile__label'>
            <span className='profile__input-description'>E-mail</span>
            <input
              className='profile__input'
              type='email'
              name='email'
              minLength='3'
              placeholder=''
              required
              onChange={() => {}}
            />
          </label>
          <span className='profile__span-error'>Что-то пошло не так...</span>
          <div className='profile__btn-container'>
            {isReadyToSave ? (
              <>
                <p className='profile__submit-error'>
                  При обновлении профиля произошла ошибка.
                </p>
                <button
                  className='profile__submit-btn'
                  type='submit'
                  onClick={() => {}}
                >Сохранить</button>
              </>
            ) : (
              <>
                <button
                  className='profile__edit-btn'
                  type='button'
                  onClick={() => {}}
                >Редактировать</button>
                <button
                  className='profile__logout-btn'
                  type='button'
                  onClick={() => {}}
                >Выйти из аккаунта</button>
              </>
            )}
          </div>
        </form>
      </main>
    </>
  );
};

export default Profile;
