import React from "react";
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return <div >
    <ul>
        <li className="liNav"><Link to="/">Home</Link></li>
        <li className="liNav"><Link to="/logout">Logout</Link></li>
    </ul>
    </div>;
};

export default Nav;