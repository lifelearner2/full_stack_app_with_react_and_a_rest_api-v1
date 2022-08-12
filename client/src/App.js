import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';

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

//not fetching in app.js - only in certain components. App.js is for routes and errors and maybe authentication and validation

export default App;
