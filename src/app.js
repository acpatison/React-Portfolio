import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function app() {
  return (
    <div>
      <Header />
      <Footer/>
    </div>
  );
}

export default app;