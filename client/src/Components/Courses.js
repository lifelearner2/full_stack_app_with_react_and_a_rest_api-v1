import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';

//import '../App.css';

function Courses() {
   const [ courses, setCourses ] = useState(0);

   return <h1> { courses }</h1>;

   useState((courseName) => {});

   useEffect(() => {
     console.log("hello from useEffect");
   });
}

export default Courses;
