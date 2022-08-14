import React from 'react'
//import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <div className="wrap header--flex">
        <h1 className="header--logo"><a href="index.html">Courses</a></h1>
        <nav>
            <ul className="header--signedout">
                <li><a href="sign-up.html">Sign Up</a></li>
                <li><a href="sign-in.html">Sign In</a></li>
            </ul>
        </nav>
    </div>
</header>
  )
}

//Check if auth is required (btoa is now buffer) - not sure if this goes here
// if (requiresAuth) {
//   const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);

//   options.headers['Authorization'] = `Basic ${encodedCredentials}`;
// }
//     return fetch(url, options);
//   }

export default Header;