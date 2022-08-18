//This stateful component provides the "Courses" screen by retrieving the list of courses from the /api/courses route
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Courses = ({context}) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    context.data.getCourses()
    .then(data => setCourses(data))
    .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <div className="wrap main--grid">
        {courses?.map(course => {
          return (
            <Link className="course--module course--link" to={`/courses/${course.id}`} key={course.id}>
              <h2 className="course--label">Course</h2>
              <h3 className="course--title">{course.title}</h3>
            </Link>
          )
        })}
        <Link className="course--module course--add--module" to="/courses/create">
            <span className="course--add--title">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                New Course
            </span>
        </Link>
      </div>
    </main>
  )
}

export default Courses