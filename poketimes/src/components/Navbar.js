import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom'


class Navabar extends Component {
    render() {
        return (
            <nav className="nav-wapper black darken-3">
                <div className="container">
                    <Link className="brand-logo" to="/">Poke' Times</Link> 
                    <ul className="right">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navabar