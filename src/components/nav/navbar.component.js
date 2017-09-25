import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return(
      <div>
        <ul>
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav;
