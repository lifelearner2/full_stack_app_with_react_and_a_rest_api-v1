//This component provides the "Courses" screen by retrieving the list of courses from /api/courses
//Each course needs to link to its respective "Course Detail" screen. 
//This component also renders a link to the "Create Course" screen.
//this address route is:  / - Courses

import React, {  useState, useRef, useEffect, useContext } from "react";
//import ReactDOM from 'react-dom/client';
//import App from './app.js';
//import axios from 'axios';

//importing useContext and calling the func example: 
//import { CourseContext } from './Context';
import Course from './Courses';


function Courses() {  
  const [ courses, setCourses ] = useState(0);
  const coursesRef = useRef();
  useEffect(()  => {
    console.log("useEffect");
    document.courses = courses;
  });

  //const onSearchChange = (e) => setSearchText(e.target.value);
//Should I use the above code from workshop?

  const [query, setQuery] = useState('courses'); // declare new state
  const [isLoading, setIsLoading] = useState(true);

  // update the query state
  const performSearch = (value) => setQuery(value);
  useEffect(() => { 
    fetchData = (useState) => {
       fetch(`http://localhost:5000/api/courses`)
        .then(response => setCourses(response.courses.courses))
        .catch(error => console.log('Error fetching and parsing data', error))
        .finally(() => setIsLoading(false));
        useState(() {
          console.log("useState");
  },  [query]; // add the query dependency
 
  // }),
  //  const data = 
  // {setCourses(courses) {data},

  // const : handleCourses = e => {
  //     setCourses(e.target.value);
  // },
  //  function Courses(): const: (e: any) => void
  //  const setCourses: (value: React.SetStateAction<number>) => void
 
   }

   //add this after h tag below for each class?    <SearchForm onSearch={performSearch} />


    return (
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
    )


//     return(
//         <div className="wrap main--grid">
//                   <a className="course--module course--link" href="index.html">
//                       <h2 className="course--label">Course</h2>
//                       <h3 className="course--title">Build a Basic Bookcase</h3>
//                   </a>
//                   <a className="course--module course--link" href="index.html">
//                         <h3>Learn How to Program</h3>
//                         <input
//                             type="text"
//                             onChange={handleCourses}
//                             value={courses}
//                             placeholder="Your Courses"
//                         />
//                   </a>
//                   <a className="course--module course--link" href="index.html">
//                         <h3>Learn How to Test Programs</h3>
//                         <input
//                             type="text"
//                             onChange={handleCourses}
//                             value={courses}
//                             placeholder="Your Courses"
//                         />
//                          </a>
//                          <a className="course--module course--add--module" href="index.html">
//                     <span className="course--add--title">
                   
//                         <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
//                         viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg> 
//                         New Course
                       
//                     </span>
//                 </a>
//             </div>
      
    
        {
            isLoading
            ? <p>Loading...</p>
            : <Courses data={data} />  //but substitute GifList for Courses? and sub data for courses?
         
    };
 
   console.log(Courses);
   return <h2> Courses </h2>;
//may do mapping of courses array from context state like this?

  const Courses = () => {
    const { courses } = useContext(CoursesContext);
    return (
      <>
        {courses.map( (course, index) => 
          <Course 
            key={course.id} 
            index={index}
          />
        )}
      </>
    );
    }


  export default Courses
