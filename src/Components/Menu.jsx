import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/AboutUs">AboutUs</Link>
        </li>
      </ul>
        </nav>
    )
}

export default Menu;