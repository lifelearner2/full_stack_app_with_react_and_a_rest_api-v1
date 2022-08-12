//This component provides the "Courses" screen by retrieving the list of courses from /api/courses
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
//import App from './app.js';

//import './App.css';

function Courses() {  
  const [ courses, setCourses ] = useState(0);
  const [ message ] = useState( 'Welcome to Our Courses!');
  //  const data = 
  // {setCourses(courses)  {data);} 
   
   useState((courseName) => {});
   console.log("hello from useState");

  // The effect happens after render
   useEffect(() => {
     console.log("hello from useEffect");
   }, []); // pass an empty array to run useEffect once

   console.log(Courses);
   return <h2> Courses </h2>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Courses />);


export default Courses;
