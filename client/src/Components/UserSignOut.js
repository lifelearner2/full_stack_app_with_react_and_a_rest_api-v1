//This component signs out the authenticated user and redirects the user to the default route (i.e. the list of courses).
// import React from 'react';
// import { Redirect } from 'react-router-dom';

//update address
// export default () => {
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