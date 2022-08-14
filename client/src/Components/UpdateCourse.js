//This component provides the "Update Course" screen by rendering a form that allows a user to update one of their existing courses.
//The component also renders an "Update Course" button that when clicked sends a PUT request to the REST API's /api/courses/:id route. 
//This component also renders a "Cancel" button that returns the user to the "Course Detail" screen.
//This route is: /courses/:id/update - UpdateCourse

// import React from 'react';
// import { Redirect } from 'react-router-dom';



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


//adjust address to go to course detail screen
//route is:  /courses/:id - CourseDetail
// cancel = () => {
//     this.props.history.push("/courses/:id");
//   };