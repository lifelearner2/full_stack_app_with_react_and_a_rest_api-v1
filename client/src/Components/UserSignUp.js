//This component provides the "Sign Up" screen by rendering a form that allows a user to sign up by creating a new account. 
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const UserSignUp = ({context}) => {
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  });

  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    context.data.createUser(user)
    .then(message => {
      if (message.length) {
        setErrors(message)
      } else {
        context.actions.signIn(
          user.emailAddress,
          user.password
        );
        history.push('/');
      }
    })
  };

  return (
    <main>
      <div className="form--centered">
        <h2>Sign Up</h2>
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
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text" onChange={handleChange} />
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text" onChange={handleChange} />
          <label htmlFor="emailAddress">Email Address</label>
          <input id="emailAddress" name="emailAddress" type="email" onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" onChange={handleChange} />
          <button className="button" type="submit">Sign Up</button>
          <Link className="button button-secondary" to="/">Cancel</Link>
        </form>
        <p>Already have a user account? Click here to <Link to="/signin">sign in</Link>!</p>
      </div>
    </main>
  )
}
export default UserSignUp