import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import Header from './components/Header.jsx';
import MovieList from './components/MovieList.jsx';
import './App.css'

function App() {
  return(
    <main>
      <Header/>
      <MovieList/>
    </main>
  );
}
export default App;