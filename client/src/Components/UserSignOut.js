//This component signs out the authenticated user and redirects the user to the default route (i.e. the list of courses).
// import React from 'react';
// import { Redirect } from 'react-router-dom';
//This route is: /signout - UserSignOut

// render() {
//     const { authenticatedUser } = this.state;

//     const value = {
//       authenticatedUser,
//       data: this.data,
//       actions: { // Add the 'actions' property and object
//         signIn: this.signIn, //should i delete this line?
//         signOut: this.signOut
//       },
//     };
//     return (
//       <Context.Provider value={value}>
//         {this.props.children}
//       </Context.Provider>  
//     );
//   }


// Function to sign out a user
// signOut = () => {
    //this.setState({ authenticatedUser: null });
// }


//update address
// export default ({ context }) => {  //does context go in here?
//     return (
//       <Redirect to="/" />
//     );
//   }

//redirect address above should likely be: /api/courses for the list of courses

//Check if auth is required (btoa is now buffer)
// if (requiresAuth) {
//     const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);
  
//     options.headers['Authorization'] = `Basic ${encodedCredentials}`;
//   }
//       return fetch(url, options);
//     }