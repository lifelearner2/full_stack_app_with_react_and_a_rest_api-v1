//This component provides the "Course Detail" screen by retrieving the detail for a course from the REST API's /api/courses/:id route & rendering the course.
//This component also renders a "Delete Course" button that when clicked should send a DELETE request to the REST API's /api/courses/:id route in order to delete a course.
//This component also renders an "Update Course" button for navigating to the "Update Course" screen.
//This route is:  /courses/:id - CourseDetail

//'use strict';
//update routes appropriately
//const express = require('express');
//const { asyncHandler } = require('./middleware/async-handler');
//const { Course or Courses } = require('./'); //do I require this from the api folder or client 


// Construct a router instance.
//const router = express.Router();


//GET courses Route | route that will return all courses including User associated w/each course - along with a 200 HTTP status code.
// router.get('/courses', asyncHandler(async (req, res) => {
//     let courses = await Course.findAll({
//       include: {model: User}
//     });
//     res.json(courses);
//   }));


//DELETE route that deletes corresponding course if the user owns it and returns a 204 code
// router.delete('/courses/:id', authenticateUser, asyncHandler(async(req, res, next) => {
//     const course = await Course.findByPk(req.params.id);
//     const user = await req.currentUser;
//     if (course.userId === user.id) {
//       await course.destroy();
//       res.status(204).end();
//     } else {
//       next();
//     }
//   }));


//PUT route that updates corresponding course if the user owns it and returns a 204 code
// router.put('/courses/:id', authenticateUser, asyncHandler(async(req, res, next) => {
//     const course = await Course.findByPk(req.params.id);
//     const user = await req.currentUser;
//     if (course.userId === user.id) {
//       await course.update(req.body);
//       res.status(204).end();
//     } else {
//      next();
//     }
//   }));
