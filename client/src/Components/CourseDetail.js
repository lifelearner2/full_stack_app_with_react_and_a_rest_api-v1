//This stateful component provides the Course Detail screen by retrieving the /api/courses/:id route
import { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const CourseDetail = ({context}) => {
  const [course, setCourse] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  const authUser = context.authenticatedUser;

  useEffect(() => {
    context.data.getCourse(id)
    .then(data => setCourse(data))
    .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async() => {
    await context.data.deleteCourse(
      id,
      authUser.emailAddress,
      authUser.password
    );
    history.push("/");
  }
//Conditional rendering of the Update and Delete Course buttons based on if the user owns the course or not
  return (
    <main>
      <div className="actions--bar">
        <div className="wrap">
        {authUser && authUser.id === course.userId ? (
          <>
            <Link className="button" to={`/courses/${id}/update`}>Update Course</Link>
            <button className="button" onClick={handleDelete}>Delete Course</button>
          </>
          ) : null }
            <Link className="button button-secondary" to="/">Return to List</Link>
        </div>
      </div>
            
      <div className="wrap">
        <h2>Course Detail</h2>
        <form>
          <div className="main--flex">
            <div>
              <h3 className="course--detail--title">Course</h3>
              <h4 className="course--name">{`${course.title}`}</h4>
              <p>{`By ${course.User?.firstName} ${course.User?.lastName}`}</p>
              <ReactMarkdown>{`${course.description}`}</ReactMarkdown>
            </div>
            <div>
              <h3 className="course--detail--title">Estimated Time</h3>
              {course.estimatedTime ? 
                <p>{`${course.estimatedTime}`}</p> : <p>N/A</p>
              }
              <h3 className="course--detail--title">Materials Needed</h3>
              {course.materialsNeeded ?
              <ul className="course--detail--list">
                <ReactMarkdown>{`${course.materialsNeeded}`}</ReactMarkdown>
              </ul>
              : <p>N/A</p>
              }
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
export default CourseDetail