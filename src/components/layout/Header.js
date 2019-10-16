import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-danger navbar-dark mb-3 py-0">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            ContactManager
                        </Link>
                    </div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                <i className="fa fa-home"> </i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact/add">
                                <i className="fa fa-plus"> </i> Add
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                <i className="fa fa-question"> </i> About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;