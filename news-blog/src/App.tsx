import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Articles } from './components/Articles';
import { Blogs } from './components/Blogs';
import { Pagination } from './components/Pagination/Pagination';

function App() {
  
  return (
    <>
    <Header/>
    <Blogs/>
    <Pagination/>
    </>
  );
}

export default App;
