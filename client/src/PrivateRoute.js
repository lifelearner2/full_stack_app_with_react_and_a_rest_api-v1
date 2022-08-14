//This is a higher-order component (HOC) that is used to configure protected routes (i.e. routes that require authentication).

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { Consumer } from './Context';

// export default ({ component: Component, ...rest }) => {
//     return (
//   <Consumer>
//         {context => (
//           <Route
//             {...rest}
//             render={props => context.authenticatedUser ? (
//                 <Component {...props} />
//               ) : (
//                 <Redirect to='/signin' />
//               )
//             }
//           />
//       )}
//       </Consumer>
//     );
//   };