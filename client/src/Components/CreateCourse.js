//This component provides the "Create Course" screen by rendering a form that allows a user to create a new course. 
//The component also renders a "Create Course" button that when clicked sends a POST request to the REST API's /api/courses route. 
//This component also renders a "Cancel" button that returns the user to the default route (i.e. the list of courses).
//this address route is: /courses/create - CreateCourse
//screen to display validation errors returned from the REST API.

//need to update routes here: 
// 'use strict';

// const express = require('express');
// const { asyncHandler } = require('./middleware/async-handler'); update route?
// const { User, Course } = require('./models'); change to just Course or Courses? UPdate route
// const { authenticateUser } = require('./middleware/auth-user'); UPdate route

// Construct a router instance.
//const router = express.Router();


//POST route that creates new course, sets location header to URI for new course & returns a 201 code
// router.post('/courses', authenticateUser, asyncHandler(async(req, res) => {
//     const course = await Course.create(req.body);
//     res.status(201).location(`/courses/${course.id}`).end();
//   }));



// cancel = () => {
//   this.props.history.push('/');
// }