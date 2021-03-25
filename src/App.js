
import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/template/Header'
import Main from './components/template/Main'
import Footer from './components/template/Footer'




export default props =>
<BrowserRouter>
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
 </BrowserRouter>



