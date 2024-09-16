import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Articles } from './components/Articles';
import { Blogs } from './components/Blogs';
import { Pagination } from './components/Pagination/Pagination';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { SearchResults } from './components/SearchResults';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { RegistrationConfirm } from './components/RegistrationConfirm';
import { SelectedPage } from './components/SelectedPage';
import { Sort } from './components/Sort';
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/articles' />} />
        <Route path='/sign-up'
          element={<SignUp/>} />
        <Route path='/sign-in'
          element={<SignIn />} />
        <Route path='activate/:uid/:token'
          element={<RegistrationConfirm />} />
        <Route path='/articles'>
          <Route index element={<Articles />} />
          <Route path=":id" element={<SelectedPage/>} />
          <Route path='search-results' element={<SearchResults/>} />
        </Route>
        <Route path='/blogs'>
          <Route index element={<Blogs />} />
          <Route path=":id" element={<SelectedPage/>} />
          <Route path='search-results' element={<> </>} />
        </Route>
      </Routes >
      <Footer />
    </>
  );
}

export default App;
