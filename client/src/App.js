import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
//import axios from 'axios';
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
//   useEffect(() => { 
//     axios(`http://`)
//       .then(response => setData(response.data.data))
//       .catch(error => console.log('Error fetching and parsing data', error))
//   }, []);
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


//Note: Your app should include the following routes (listed in the format path - component):
// / - Courses
// /courses/create - CreateCourse
// /courses/:id/update - UpdateCourse
// /courses/:id - CourseDetail
// /signin - UserSignIn
// /signup - UserSignUp
// /signout - UserSignOut