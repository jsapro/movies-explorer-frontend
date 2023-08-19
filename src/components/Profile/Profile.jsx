import './Profile.css';
import Header from '../Header/Header';

const Profile = () => {
  const isReadyToSave = true;
  // const isReadyToSave = false;

  return (
    <>
      <Header />

      <main className='profile'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form' name='profile'>
          <label className='profile__label'>
            <span className='profile__input-description'></span>
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
            <span className='profile__span-error'></span>
          </label>
          <label className='profile__label'>
            <span className='profile__input-description'></span>
            <input
              className='profile__input'
              type='email'
              name='email'
              minLength='3'
              placeholder=''
              required
              onChange={() => {}}
            />
            <span className='profile__span-error'></span>
          </label>
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
                ></button>
              </>
            ) : (
              <>
                <button
                  className='profile__edit-btn'
                  type='button'
                  onClick={() => {}}
                ></button>
                <button
                  className='profile__logout-btn'
                  type='button'
                  onClick={() => {}}
                ></button>
              </>
            )}
          </div>
        </form>
      </main>
    </>
  );
};

export default Profile;
