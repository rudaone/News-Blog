import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Articles } from './components/Articles';
import { Blogs } from './components/Blogs';
import { Pagination } from './components/Pagination/Pagination';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/articles' />} />
        <Route path='/articles'>
          <Route index element={<Articles/>} />
          <Route path=": id" element={<></>} />
          <Route path='search-results' element={<></>} />
        </Route>

        <Route path='/blogs'>
          <Route index element={<Blogs />} />
          <Route path=": id" element={<></>} />
          <Route path='search-results' element={<></>} />
        </Route>
      </Routes >
      <Pagination/>
      <Footer/>
    </>
  );
}

export default App;
