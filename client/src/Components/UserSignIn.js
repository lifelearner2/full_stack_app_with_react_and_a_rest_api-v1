//This component renders the sign in screen form that allows user to enter existing account info
//The component also renders a "Sign In" button that when clicked signs in the user
//this component a "Cancel" button that returns the user to the default route (i.e. the list of courses).
//this route is: /signin - UserSignIn

// 'use strict';

// const auth = require('basic-auth');

// const bcrypt = require('bcryptjs');

//const { authenticateUser } = require('./middleware/auth-user'); update route


// render() {
//     const { authenticatedUser } = this.state;

//     const value = {
//       authenticatedUser,
//       data: this.data,
//       actions: { // Add the 'actions' property and object
//         signIn: this.signIn 
//       }
//     };
//     return (
//       <Context.Provider value={value}>
//         {this.props.children}
//       </Context.Provider>  
//     );
//   }

//Once user is authenticated the page will show a welcome message in place of sign up and replace the sign in with sign out 
//    signIn = async (username, password) => {
//     const user = await this.data.getUser(username, password);
//     if (user !== null) {
//       this.setState(() => {
//         return {
//           authenticatedUser: user,
//         };
//       });
//       // Set cookie
//       Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 1 });
//     }
//     return user;
//   }
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
// exports.authenticateUser = async (req, res, next) => {
//     let message;
  
//     const credentials = auth(req);
  
//     if (credentials) {
//       const user = await User.findOne({ where: {emailAddress: credentials.name} });
//       if (user) {
//         const authenticated = bcrypt
//           .compareSync(credentials.pass, user.password);
//         if (authenticated) {
//           console.log(`Authentication successful for user: ${user.emailAddress}`);
//           // Store the user on the Request object.
//           req.currentUser = user;
//         } else {
//           message = `Authentication failure for user: ${user.emailAddress}`;
//         }
//       } else {
//         message = `User not found for email address: ${credentials.name}`;
//       }
//     } else {
//       message = 'Auth header not found';
//     }
  
//     if (message) {
//       console.warn(message);
//       res.status(401).json({ message: 'Access Denied' });
//     } else {
//       next();
//     }
//   };

//If the user is redirected to /signin from a previous route, submit() should navigate them back to the original route once they authenticate.
// submit = () => {
//     const { context } = this.props;
//     const { from } = this.props.location.state || { from: { pathname: '/authenticated' } };
//     const { username, password } = this.state;
    
//     context.actions.signIn(username, password)
//      .then( user => {
//        if (user === null) {
//          this.setState(() => {
//            return { errors: [ 'Sign-in was unsuccessful' ] };
//          })
//        } else {
//          this.props.history.push(from);
//          console.log(`SUCCESS! ${username} is now signed in!`);
//        }
//      })
//       .catch( err => {
//         console.log(err);
//         this.props.history.push('/error');
//       })
//    }

// cancel = () => {
//   this.props.history.push('/');
// }