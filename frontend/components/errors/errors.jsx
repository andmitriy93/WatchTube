import React from 'react';
import { Link } from 'react-router-dom';


class ErrorsRender extends React.Component {
    render() {
        return(
            <div>
                <h3>404 Page Not Found</h3>
                <Link to="/login">Login Page</Link>
                <Link to="/signup">Signup Page</Link>
            </div>
        )
    }
}

export default ErrorsRender;