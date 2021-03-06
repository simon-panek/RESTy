import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render(){
    return(
      <header>
          <h1>RESTy</h1>
          <nav>
            <ul>
              <li className="navList">
                <Link to="/">Home</Link>
              </li>
              <li className="navList">
                <Link to="/history">History</Link>
              </li>
              <li className="navList">
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </nav>
      </header>
    );
  }
};

export default Header;