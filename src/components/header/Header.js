import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <header>
      <nav>
        <ul>
          <li><Link to="/">List</Link></li>
          <li><Link to="/">Detail</Link></li>
        </ul>
      </nav>
    </header>
  </>
);
export default Header;
