import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './componentes/Header/Header';
import Section from './componentes/Section/Section';
import Footer from './componentes/Footer/Footer';

const App =()=> {
  return (
    <div className="App" >
      <Header />
      <Section />
      <Footer />   
    </div>
  );
}

export default App;
