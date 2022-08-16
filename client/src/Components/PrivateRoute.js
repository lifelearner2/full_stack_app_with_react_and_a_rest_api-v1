//This is a higher-order component (HOC) that is used to configure protected routes (i.e. routes that require authentication).
////can leave this file as class

// import React from 'react';
// import { Route, Redirect, Switch } from 'react-router-dom';
// import { Consumer } from './Context';

//Higher Order Components - route, redirect and private route are being used to validate the authenticated user. 
//when not authenticated they are redirected to the sign in page
// const PrivateRoute = ({ component, exact = false, path, authenticated }) => (
//     <Route
//        exact={exact}
//        path={path}
//        render={props =>
//           authenticated ? (
//              React.createElement(component, props)
//           ) : (
//                 <Redirect
//                    key="login"
//                    to={'/login'}
//                 />
//              )
//        }
//     />
//  )





//Router Authentication - probably can not do it this way
// export default ({ component: Component, ...rest }) => {
//     return (
//   <Consumer>
//         {context => (
//           <Route
//             {...rest}
//             render={props => context.authenticatedUser ? (
//                 <Component {...props} />
//               ) : (
//                 <Redirect to={{
//                   pathname: '/signin',
//                   state: { from: props.location },
//                 }} />
//               )
//             }
//           />
//       )}
//       </Consumer>
//     );
//   };