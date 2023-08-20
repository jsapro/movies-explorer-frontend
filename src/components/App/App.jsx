import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Page404 from '../Page404/Page404';

import './App.css';

const App = () => {
  return (
    <>
      <div className='page'>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/movies' element={<Movies />}/>
          <Route path='/saved-movies' element={<SavedMovies />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/signin' element={<Login />}/>
          <Route path='/signup' element={<Register />}/>
          <Route path='*' element={<Page404 />}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
