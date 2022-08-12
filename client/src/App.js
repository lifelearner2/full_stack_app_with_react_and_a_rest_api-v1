import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
//import logo from './logo.svg';
//import './App.css';
//import '../styles/global.css';

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
        <header>
        <div className="wrap header--flex">
       
            <h1 className="header--logo"><a href="index.html">Courses</a></h1>
            <nav>
                <ul className="header--Sign Up">
               
                    <li><a href="sign-up.html">Sign Up</a></li>
                    <li><a href="sign-in.html">Sign In</a></li>
                </ul>
            </nav>
           
        </div>
    </header>,
  
      <div className="wrap main--grid">
                <a className="course--module course--link" href="index.html">
                    <h2 className="course--label">Course</h2>
                    <h3 className="course--title">Build a Basic Bookcase</h3>
                </a>
                <a className="course--module course--link" href="index.html">
                    <h2 className="course--label">Course</h2>
                    <h3 className="course--title">Learn How to Program</h3>
                </a>
                <a className="course--module course--link" href="index.html">
                    <h2 className="course--label">Course</h2>
                    <h3 className="course--title">Learn How to Test Programs</h3>
                </a>
                <a className="course--module course--add--module" href="index.html">
                    <span className="course--add--title">
                   
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg> 
                        New Course
                       
                    </span>
                </a>
       
            </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();

//<button onClick={clicked()}>Sign Up</button>
// <button type="sign up" className="sign-up.html"></button>

// fetchData = (useState) => {
//   fetch ()

export default App;
