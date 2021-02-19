import React,{ useEffect, useState} from 'react';
import './App.css';
import Tables from'./components/Tables';
import Navbar from'./components/Navbar';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import About from './components/About';
import TablesTable from './components/TablesTable';


function App() {


  return (

    <Router>
    <div className="App">
      <Navbar/>
      
      
      <div className="content">
      <Route exact path="/" > <Tables/> </Route>
      <Route path="/about" exact component={About}/>
      </div>
      

    </div>
    </Router>
  );
}

export default App;
