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

  // The effect happens after render. will eventually fetch and map through in this func courses.map
   useEffect(() => {
     console.log("hello from useEffect");
   }, []); // pass an empty array to run useEffect once

   //this button is going to the /3001 page but I don't see it consistently, it just pops up at random times
   //render() {
     return(
      <div className="wrap main--grid">
      <a className="course--module course--link" href="index.html">
          <h2 className="course--label">Course</h2>
          <h3 className="course--title">Build a Basic Bookcase</h3>
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
   console.log(Courses);
   return <h2> Courses </h2>;
}
//}

//will delete h2/h3(deleted some html already - info will come from fetching from postman) and map - line 25//26over like in unit 7 and dynamically generate it - only the a will remain
 //fetch http://localhost:5000/api/courses and so forth - check postman for routes fetching on each component that needs it. Stateless like Header won't need it.
//check with console.log to see course list and hten do map and jsx
export default Courses;
