//This component renders the sign in screen form that allows user to enter existing account info
//The component also renders a "Sign In" button that when clicked signs in the user
//this component a "Cancel" button that returns the user to the default route (i.e. the list of courses).
//this route is: /signin - UserSignIn

//const { authenticateUser } = require('./middleware/auth-user'); update route


//Do something like this?
// async getUser(username, password) {
//     const response = await this.api(`/users`, 'GET', null, true, { username, password });
//     if (response.status === 200) {
//       return response.json().then(data => data);
//     }
//     else if (response.status === 401) {
//       return null;
//     }
//     else {
//       throw new Error();
//     }
//   }


// cancel = () => {
//   this.props.history.push('/');
// }