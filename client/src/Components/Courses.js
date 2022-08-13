//This component provides the "Courses" screen by retrieving the list of courses from /api/courses
//Each course needs to link to its respective "Course Detail" screen. 
//This component also renders a link to the "Create Course" screen.

import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
//import App from './app.js';
//import axios from 'axios';


//would something like this go in here or course detail or a new Search type component?
//import React, { useState } from 'react';
// function SearchForm(props) {
//   const [searchText, setSearchText] = useState('');

//   const onSearchChange = (e) => {...};

//   return (...);
// }

function Courses() {  
  const [ courses, setCourses ] = useState(0);
  //const onSearchChange = (e) => setSearchText(e.target.value);
//Should I use the above code from workshop?
  const [ message ] = useState( 'Welcome to Our Courses!');
  //const [query, setQuery] = useState('courses'); // declare new state
  //const [isLoading, setIsLoading] = useState(true);
  // update the query state
  //const performSearch = (value) => setQuery(value);
  // useEffect(() => { 
  //   axios(`http://localhost:5000/api/courses`)
  //     .then(response => setCourses(response.courses.courses))
  //     .catch(error => console.log('Error fetching and parsing data', error))
  //     .finally(() => setIsLoading(false));
  // },  [query]); // add the query dependency
  //  const data = 
  // {setCourses(courses)  {data);} 
   
   useState((courseName) => {});
   console.log("hello from useState");

  // The effect happens after render. will eventually fetch and map through in this func courses.map
   useEffect(() => {
     console.log("hello from useEffect");
   }, []); // pass an empty array to run useEffect once

   //add this after h tag below for each class?    <SearchForm onSearch={performSearch} />

   //render() {
     return(
      <div className="wrap main--grid">
      <a className="course--module course--link" href="index.html">
          <h2 className="course--label">Course</h2>
          <h3 className="course--title">Build a Basic Bookcase</h3>
      </a>
      <a className="course--module course--link" href="course-detail.html">
                    <h2 className="course--label">Course</h2>
                    <h3 className="course--title">Learn How to Program</h3>
                </a>
                <a className="course--module course--link" href="course-detail.html">
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
   console.log(Courses);
   return <h2> Courses </h2>;
}
//}
//might need this in jsx/html above  {
    //     isLoading
    //     ? <p>Loading...</p>
    //     : <GifList data={data} />  but substitute GifList for Courses? and sub data for courses?
    // }
//will delete lines re: course detail on how to program and how to test programs h2/h3(info will come from fetching from) and map - line 25//26over like in unit 7 and dynamically generate it - only the a will remain
 //fetch http://localhost:5000/api/courses and so forth - check postman for routes fetching on each component that needs it. Stateless like Header won't need it.
//check with console.log to see course list and hten do map and jsx
// fetchData = (useState) => {
//   fetch ()
//Do I need something like this?
// function SearchForm(props) {
//   const [searchText, setSearchText] = useState('');
//   const onSearchChange = (e) => setSearchText(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//    // pass the search text back to the App component
//     props.onSearch(searchText);
//     e.currentTarget.reset();
//   }
//On form submit, the search query state gets updated, which triggers the useEffect() Hook to fetch new data.


//   return (
//     <form className="search-form" onSubmit={handleSubmit}>
//       ...
//     </form>
//   );
// }
//not sure this needs to go in return statment (from workshop)
// return (
//   <form className="search-form" onSubmit={handleSubmit}>
//     <label className="is-hidden" htmlFor="search">Search</label>
//     <input type="search"
//       onChange={onSearchChange} // this value will update state
//       name="search"
//       placeholder="Search..."
//     />
//     <button type="submit" ...>...</button>
//   </form>
// );
//importing useContext and calling the func example: 
//import React, { useContext } from 'react';
// import { ScoreboardContext } from './Context';
// import Player from './Player';

// const PlayerList = () => {
//   const { players } = useContext(ScoreboardContext);
//   ...
// }
//may do mapping of courses array from context state like this?
// const PlayerList = () => {
//   const { players } = useContext(ScoreboardContext);
//   return (
//     <>
//       {players.map( (player, index) => 
//         <Player 
//           key={player.id} 
//           index={index}
//         />
//       )}
//     </>
//   );
// }




export default Courses;
