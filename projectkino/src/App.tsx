import React, { useState, useEffect } from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header/Header';
import { SignIn } from './components/signin/SignIn';
import { Registration } from './components/registration/Registration';
import { SelectedMovie } from './components/selectedMovie/SelectedMovie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Settings } from './components/settings/Settings';
import { Home } from './components/home/Home';
import { SearchResults } from './components/searchResults/SearchResults';
import { ThemeContext } from './components/contexts/contexts';
import { StoreState, ThemeState } from './components/types/types';
import { Themes } from './components/constants/theme';
import { useDispatch, useSelector } from 'react-redux';
import { Activation } from './components/activation/Activation';
import { getUser } from './redux/action_creators/user_action_creators';
import Footer from './components/footer/Footer';


function App() {
  const theme = useSelector((state: StoreState) => state.theme.theme);
  document.body.className = (theme + '-body-color');
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state: StoreState) => state.user.user)

  const isAuthorized = !!localStorage.getItem('jwtAccess');

  useEffect(() => {
    const token = localStorage.getItem('jwtAccess');
    if (token) {
      dispatch(getUser())
    } else {
      const { pathname } = window.location;
      if (pathname !== '/signin' && pathname !== '/posts')
        window.location.href = '/signin'
    }
  }, [localStorage.getItem('jwtAccess')]);

  return (
    <div className={theme + '-container' + ' ' + theme + '-title'}>
      <BrowserRouter>
        <Header setSearchData={(data) => setData(data)} currentUser={currentUser} isAuthorized={isAuthorized} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<SearchResults data={data} />} />
          <Route path="settings" element={<Settings />} />
          <Route path="film/">
            <Route path=":id" element={<SelectedMovie />} />
          </Route>
          <Route path="registration" element={<Registration />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="activate">
            <Route path="*" element={<Activation />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
