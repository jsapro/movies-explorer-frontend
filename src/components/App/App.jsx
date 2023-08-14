import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';

import './App.css';

const App = () => {
  return (
    <>
      <div className='page'>
        <Header></Header>
      </div>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/movies' element={<Movies />}></Route>
        <Route path='/saved-movies' element={<SavedMovies />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/signup' element={<Register />}></Route>
        <Route path='*' element={<Navigate to='/' />}></Route>
      </Routes>
    </>
  );
};

export default App;
