import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar">
                <ul className="sideNav">
                    <li><Link to="/">Home</Link></li>
                    <li>Trending</li>
                    <li>Subscriptions</li>
                    <li>
                        <h3>Log in to like videos, <br/> and comment, and subscribe</h3>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar;