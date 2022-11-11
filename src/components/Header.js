import React from "react";
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <nav>
            <div className="nav-header">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/add">Add Item</NavLink>
            </div>
        </nav>
    )
}

export default Header;