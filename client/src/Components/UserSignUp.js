//This component provides the "Sign Up" screen by rendering a form that allows a user to sign up by creating a new account. 
//The component also renders a "Sign Up" button that when clicked sends a POST request to the REST API's /api/users route and signs in the user. 
//This component also renders a "Cancel" button that returns the user to the default route (i.e. the list of courses).


//POST /api/users route creates a new user account
//set the Location header to "/", and return a 201 HTTP status code and no content.
// router.post('/users', asyncHandler(async (req, res) => {
//     await User.create(req.body);
//     res.status(201).location("/").end();
//   }));


//may do something similar below for creating a new user
// submit = () => {
//     const { context } = this.props;
//     const {
//       name,
//       username,
//       password,
//     } = this.state; 
      
//       // New user payload
//       const user = {
//         name,
//         username,
//         password,
//       };
//       context.data.createUser(user)
//       .then(errors => {
//     if (errors.length) {
//       this.setState( { errors });
//     } else {
//       console.log(`${username} is successfully signed up and authenticated!`);
//     }
//       });
//redirects to home page when cancel is selected (check to make sure cancel is placed properly w/re to bracket)
// }
// cancel = () => {
//   this.props.history.push('/');
// }
//     }
    