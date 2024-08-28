import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Articles } from './components/Articles';
import { Pagination } from './components/Pagination/Pagination';

function App() {
  
  return (
    <>
    <Header/>
    <Articles/>
    <Pagination/>
    </>
  );
}

export default App;
