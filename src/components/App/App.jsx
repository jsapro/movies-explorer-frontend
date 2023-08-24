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
import { BEATFILMMOVIES_URL, MAIN_BACKEND_URL } from '../../utils/constants';

import './App.css';

const App = () => {
  const moviesApi = new MoviesApi(BEATFILMMOVIES_URL);
  const mainApi = new MainApi(MAIN_BACKEND_URL);


  useEffect(() => {
    moviesApi.getInitialMovies().then(initialMovies => localStorage.setItem('initialMovies', JSON.stringify(initialMovies)))
  }, [])

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

  // const updateUser = () => {
  //   return mainApi
  //     .updateUserInfo('name-032-new', 'test-032-new@test.com')
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

  // updateUser()

  // const getMoviesFromServer = () => {
  //   return mainApi
  //     .getMovies()
  //     .then((data) => console.log(data)).catch((err) => console.log(err));
  // };

  // getMoviesFromServer()

  // const postMovie = () => {
  //   return mainApi
  //     .postMovie()
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

  // postMovie()

  // const deleteMovie = () => {
  //   return mainApi.deleteMovie('64e731b9be04b3798e51e57e')
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

  // deleteMovie()

  return (
    <>
      <div className='page'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
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
