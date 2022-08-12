import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
//import logo from './logo.svg';
//import './App.css';
//import '../styles/global.css';
import Header from './Components/Header';
import Courses from './Components/Courses';



 import {
  // BrowserRouter,
//   Route,
//   Switch
 } from 'react-dom/client'

//  render() {
//   return (
//     <h1> { "hello"}</h1>
//       )
//     };

function App() {
  const [ courses, setCourses ] = useState(0);

  return (
      <>
      <Header />
       <Courses /> 
       </>
  
  );
}


//<button onClick={clicked()}>Sign Up</button>
// <button type="sign up" className="sign-up.html"></button>

// fetchData = (useState) => {
//   fetch ()

export default App;
