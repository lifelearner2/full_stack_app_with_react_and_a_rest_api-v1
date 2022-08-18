//This component provides the "Create Course" screen by rendering a form that allows a user to create a new course.
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const CreateCourse = ({ context }) => {
  const history = useHistory();
  const { id, firstName, lastName, emailAddress, password } = context.authenticatedUser; 
  
  const [errors, setErrors] = useState([]);
  const [course, setCourse] = useState({
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    userId: id
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setCourse(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    context.data.createCourse(course, emailAddress, password)
    .then(message => message.length ? setErrors(message) : history.push('/'))
  };

  return (
    <main>
       <div className="wrap">
        <h2>Create Course</h2>
        {errors && (errors.length) ? 
          <div className="validation--errors">
            <h3>Validation Errors</h3>
            <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
            </ul>
          </div>
        : null}
        
        <form onSubmit={handleSubmit}>
          <div className="main--flex">
            <div>
              <label htmlFor="courseTitle">Course Title</label>
              <input id="courseTitle" name="title" type="text" onChange={handleChange} />

              <p>{`By ${firstName} ${lastName}`}</p>

              <label htmlFor="courseDescription">Course Description</label>
              <textarea id="courseDescription" name="description" onChange={handleChange}></textarea>
            </div>
            <div>
              <label htmlFor="estimatedTime">Estimated Time</label>
              <input id="estimatedTime" name="estimatedTime" type="text" onChange={handleChange} />

              <label htmlFor="materialsNeeded">Materials Needed</label>
              <textarea id="materialsNeeded" name="materialsNeeded" onChange={handleChange}></textarea>
            </div>
          </div>
          <button className="button" type="submit">Create Course</button>
          <Link className="button button-secondary" to="/">Cancel</Link>
        </form>
      </div>
    </main>
  )
}
export default CreateCourse