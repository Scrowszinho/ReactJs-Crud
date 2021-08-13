import React from 'react';
import './App.css';
import Logo from '../templates/Logo';
import Nav from '../templates/Nav';
import Main from '../templates/Main';
import Footer from '../templates/Footer';

function App() {
  return (
    <div className="App">
      <Logo />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
