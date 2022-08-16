//App.js is for routes and errors, authentication and validation

//import React, { useState, useEffect, PrivateRoute } from "react";
 //import ReactDOM from 'react-dom/client';
// import {
//   BrowserRouter,
//   Route,
//   Switch
//  } from 'react-dom/client'
//import { Link } from 'react-router-dom';
//import axios from 'axios';
//import Header from './Components/Header';
// import Courses from './Components/Courses';
// import CreateCourse from './Components/CreateCourse';
// import UpdateCourse from './Components/UpdateCourse';
// import CourseDetail from './Components/CourseDetail';
// import UserSignIn from './Components/UserSignIn';
// import UserSignUp from './Components/UserSignUp';
// import UserSignOut from './Components/UserSignOut';

//const withContext = withContext;
//const Authenticated = Authenticated;

// Connect the components to context
//const HeaderWithContext = withContext(Header);
//const AuthWithContext = withContext(Authenticated);
//const CoursesWithContext = withContext(Courses);
//const {Header, Courses} = require('./Components');
//const UserSignUpWithContext = withContext(UserSignUp);
//const UserSignInWithContext = withContext(UserSignIn);
//const UserSignOutWithContext = withContext(UserSignOut);

  // return (
  //   <Courses />
  // );
  // return (
  //   <h1> { "hello"}</h1>
  //     )

//Move or copy this whole function to courses?
// function App() {
//   const [ courses, setCourses ] = useState(0);
//   useEffect(() => { 
//     fetch(`http://localhost:5000/api/courses`)
//       .then(response => setCourses(response.courses.data))
//       .catch(error => console.log('Error fetching and parsing data', error))
//   }, []);

  //   <HeaderWithContext />
  //  <PrivateRoute path="/authenticated" component={AuthWithContext} />
  //  <PrivateRoute path="/settings" component={AuthWithContext} />
  //  <CoursesWithContext /> 
  // <Route path="/signin" component={UserSignInWithContext} />
  // <Route path="/signup" component={UserSignUpWithContext} />
  // <Route path="/signout" component={UserSignOutWithContext} />
  
//   return (
//       <>
//       <BrowserRouter>
    
//       <Switch>
//         <Route exact path="/" component={Courses} />
//         <PrivateRoute path="/courses/create" component={CreateCourse} />
//         <PrivateRoute path="/courses/:id/update" component={UpdateCourse} />
//         <Route path="/courses/:id" component={CourseDetail} />
     
//       </Switch>
     
//       </BrowserRouter>

//        </>
//   );
// }




{/* //not fetching in app.js - only in certain components. 



//GET courses Route | route that will return all courses including User associated w/each course - along with a 200 HTTP status code.
// app.get('/courses', asyncHandler(async (req, res) => { */}
{/* //   let courses = await Course.findAll({ */}
{/* //     include: {model: User} //not sure about including this
//   });
//   res.json(courses);
// })); */}

{/* //POST route that creates new course, sets location header to URI for new course & returns a 201 code
// app.post('/courses/create', authenticateUser, asyncHandler(async(req, res) => { */}
{/* //   const course = await Course.create(req.body);
//   res.status(201).location(`/courses/create/${course.id}`).end();
// }));

//PUT route that updates corresponding course if the user owns it and returns a 204 code
// app.put('/courses/:id/update', authenticateUser, asyncHandler(async(req, res, next) => { */}
{/* //   const course = await Course.findByPk(req.params.id);
//   const user = await req.currentUser;
//   if (course.userId === user.id) {  //need to change userID? */}
{/* //     await course.update(req.body);
//     res.status(204).end();
//   } else { */}
{/* //    next();
//   }
// })); */}

{/* 
//GET route that returns corresponding course incl. User assoc w/course & 200 code
// app.get("/courses/:id", asyncHandler(async (req, res, next) => {
//   const course = await Course.findByPk(req.params.id, {
//     include: {model: User} //get rid of this?
//   }); 
//   course ? res.json(course) : next();
// })); */}


//export default App;