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

const App = () => {
  const moviesApi = new MoviesApi(BEATFILMMOVIES_URL);
  const mainApi = new MainApi(MAIN_BACKEND_URL);
  const [combinedMoviesArray, setCombinedMoviesArray] = useState([]);
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    handleTokenCheck();
  }, []);

  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      mainApi.getUserInfo().then((user) => {
        if (user.data._id) {
          setUserData(user.data);
          setIsLoggedIn(true);
        }
      });
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([moviesApi.getInitialMovies(), mainApi.getMovies()])
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
          setCombinedMoviesArray(combinedMoviesArray);

          return combinedMoviesArray;
        })
        .catch((err) => console.log(`Ошибка Promise.all: ${err.message}`));
    }
  }, [isLoggedIn]);

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('combinedMoviesArray');
    navigate('/', { replace: true });
  };

  // useEffect(() => {
  //   const register = () => {
  //     return mainApi.register('name-032', 'test-032@test.com', 'password-032');
  //   };

  //   register().catch((err) => console.log(err));
  // },[]);

  // const login = () => {
  //   return mainApi.login('test-032@test.com', 'password-032');
  // };

  // login().catch(err => console.log(err))

  // const getUserInfo = () => {
  //   return mainApi.getUserInfo().then((data) => console.log(data));
  // };
  // getUserInfo().catch(err => console.log(err))

  // const updateUserInfo = () => {
  //   return mainApi
  //     .updateUserInfo('name-032-new', 'test-032-new@test.com')
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

  // updateUserInfo()

  const handleSaveMovie = (movie) => {
    return mainApi.saveMovie(movie)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  };

  // handleSaveMovie()

  const handleDeleteMovie = (id) => {
    return mainApi
      .deleteMovie(id)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  // handleDeleteMovie()

  return (
    <>
      <div className='page'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            path='/movies'
            element={
              <Movies
                onSaveMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovie}
                combinedMoviesArray={combinedMoviesArray}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={<SavedMovies combinedMoviesArray={combinedMoviesArray} />}
          />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
