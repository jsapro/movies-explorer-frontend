import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Page404 from '../Page404/Page404';
import MoviesApi from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';
import {
  BEATFILMMOVIES_URL,
  BASIC_MOVIES_URL,
  MAIN_BACKEND_URL,
} from '../../utils/constants';

import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const App = () => {
  const moviesApi = new MoviesApi(BEATFILMMOVIES_URL);
  const mainApi = new MainApi(MAIN_BACKEND_URL);
  const [combinedMoviesArray, setCombinedMoviesArray] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('jwt'));
  const [serverResponceError, setServerResponceError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    handleTokenCheck();
  }, []);

  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      mainApi
        .getUserInfo()
        .then((user) => {
          if (user.data._id) {
            setCurrentUser(user.data);
            setIsLoggedIn(true);
          }
        })
        .catch((err) => {
          setIsLoggedIn(false);
          console.log(err);
        });
    }
  };

  const hahdleSubmitSearch = () => {
    if (
      localStorage.getItem('combinedMoviesArray') &&
      JSON.parse(localStorage.getItem('combinedMoviesArray'))?.length !== 0
    ) {
      return Promise.resolve(
        JSON.parse(localStorage.getItem('combinedMoviesArray'))
      );
    }
    return Promise.all([moviesApi.getInitialMovies(), mainApi.getMovies()])
      .then(([initialMovies, savedMovies]) => {
        const combinedMoviesArray = initialMovies.map((initialMovie) => {
          const savedMovie = savedMovies.data.find((savedMovieItem) => {
            return savedMovieItem.movieId === initialMovie.id;
          });

          initialMovie.thumbnail =
            BASIC_MOVIES_URL + initialMovie.image.formats.thumbnail.url;
          initialMovie.image = BASIC_MOVIES_URL + initialMovie.image.url;

          if (savedMovie !== undefined) {
            initialMovie._id = savedMovie._id;
          } else {
            initialMovie._id = '';
          }

          return initialMovie;
        });
        localStorage.setItem(
          'combinedMoviesArray',
          JSON.stringify(combinedMoviesArray)
        );
        setServerResponceError('');
        setCombinedMoviesArray(combinedMoviesArray);
        return combinedMoviesArray;
      })
      .catch((err) => {
        setServerResponceError(err.message);
        console.log(`Ошибка Promise.all: ${err.message}`);
      });
  };

  // useEffect(() => {
  //   hahdleSubmitSearch();
  // }, [isLoggedIn]);

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('combinedMoviesArray');
    localStorage.removeItem('isShortMovies');
    localStorage.removeItem('lastSearchString');
    navigate('/', { replace: true });
  };

  const handleUserRegister = (name, email, password) => {
    return mainApi
      .register(name, email, password)
      .then((data) => {
        handleUserLogin(email, password);
      })
      // .catch((err) => console.log(err));
  };

  const handleUserLogin = (email, password) => {
    return mainApi
      .login(email, password)
      .then((data) => {
        setIsLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      // .catch((err) => console.log(err));
  };

  const handleUpdateUserInfo = (name, email) => {
    return mainApi.updateUserInfo(name, email).then((currentUser) => {
      setCurrentUser(currentUser.data);
      console.log(currentUser.data);
    });
    // .catch((err) => console.log(err));
  };

  const handleSaveMovie = (movie) => {
    return mainApi
      .saveMovie(movie)
      .then((savedMovie) => {
        const updatedMoviesArray = combinedMoviesArray.map((oldMovie) => {
          if (oldMovie.id === savedMovie.data.movieId) {
            oldMovie._id = savedMovie.data._id;
            oldMovie.thumbnail = savedMovie.data.thumbnail;
            oldMovie.image = savedMovie.data.image;
          }
          return oldMovie;
        });
        setCombinedMoviesArray(updatedMoviesArray);
        localStorage.setItem(
          'combinedMoviesArray',
          JSON.stringify(updatedMoviesArray)
        );
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMovie = (id) => {
    return mainApi
      .deleteMovie(id)
      .then((deletedMovie) => {
        const updatedMoviesArray = combinedMoviesArray.map((oldMovie) => {
          if (oldMovie._id === deletedMovie.data._id) {
            oldMovie._id = '';
          }
          return oldMovie;
        });
        setCombinedMoviesArray(updatedMoviesArray);
        localStorage.setItem(
          'combinedMoviesArray',
          JSON.stringify(updatedMoviesArray)
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
          {!isLoggedIn ? (
            <>
              <Route
                path='/signin'
                element={<Login handleUserLogin={handleUserLogin} />}
              />
              <Route
                path='/signup'
                element={<Register onRegister={handleUserRegister} />}
              />
            </>
          ) : null}
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route
              path='/movies'
              element={
                <Movies
                  isLoggedIn={isLoggedIn}
                  onSearch={hahdleSubmitSearch}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                  setCombinedMoviesArray={setCombinedMoviesArray}
                  serverResponceError={serverResponceError}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <SavedMovies
                  onDeleteMovie={handleDeleteMovie}
                  combinedMoviesArray={combinedMoviesArray}
                  setCombinedMoviesArray={setCombinedMoviesArray}
                  onSearch={hahdleSubmitSearch}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path='/profile'
              element={
                <Profile
                  handleSignOut={handleSignOut}
                  isLoggedIn={isLoggedIn}
                  onUpdateUser={handleUpdateUserInfo}
                />
              }
            />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
