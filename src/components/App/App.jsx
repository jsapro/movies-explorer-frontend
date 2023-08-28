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
  const [serverResponceError, setServerResponceError] = useState('');
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
        setCombinedMoviesArray(combinedMoviesArray);
        return combinedMoviesArray;
      })
      .catch((err) => {
        setServerResponceError(err.message);
        console.log(`Ошибка Promise.all: ${err.message}`);
      });
  };

  useEffect(() => {
    hahdleSubmitSearch();
  }, []);

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
    <>
      <div className='page'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            path='/movies'
            element={
              <Movies
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
              />
            }
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
