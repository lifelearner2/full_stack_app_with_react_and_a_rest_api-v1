// import React from 'react';
// import Cookies from 'js-cookie';
// import Data from './Data';
// const Context = React.createContext(); 

//can leave this file as class

//Converting Class to Functional Components
// use function instead of class
// remove the constructor
// remove the render() method, keep the return
// add const before all methods
// remove this.state throughout the component
// remove all references to ‘this’ throughout the component
// Set initial state with useState()
// change this.setState() … instead, call the function that you named in the previous step to update the state…
// replace componentDidMount with useEffect
// replace componentDidUpdate with useEffect


// function Provider () {
//   const state = () => {
//     authenticatedUser: null
//   };

  //not sure if we still use this.props.children with functional components
//   return (
//     <Context.Provider value={value}>
//       {this.props.children} 
//     </Context.Provider>  
//   );
// }

//change this to functional
// signIn = async (username, password) => {
//     const user = await this.data.getUser(username, password);
//     if (user !== null) {
//       this.setState(() => {
//         return {
//           authenticatedUser: user,
//         };
//       });

// const handleUserNameInput = e => {
//   setUsername(e.target.value);
//   return {
//     authenticatedUser: user,
//   }
// };

// Set cookie
  //Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 1 });


// return (
//   <div>
//     <h3> Handling User Name Input</h3>
//     <input 
//     type="text"
//     onChange={handleUserNameInput}
//     value={userName}
//     placeholder="Your Username"
//   </div>
// )
  
  
 // Function to sign out a user
  // const handleUserSignOut = e => {
  //   setUserSignOUt = (e.target.value);
  // }

// export const Consumer = Context.Consumer;

// export default function withContext(Component) {
//     return function ContextComponent(props) {
//       return (
//         <Context.Consumer>
//           {context => <Component {...props} context={context} />}
//         </Context.Consumer>
//       );
//     }
//   }