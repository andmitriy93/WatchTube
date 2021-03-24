import React from 'react';
import { Link } from 'react-router-dom';


class ErrorsRender extends React.Component {
    render() {
        return(
            <div className="container-404">
                <h2>Oops! Page not found.</h2>
                <img src="https://youtube-clone-seeds.s3-us-west-1.amazonaws.com/monkey.png" alt="404"/>
                {/* <h1>404</h1> */}
                <p>This page isn't available. Sorry about that.<br/>
                    Try searching for something else..</p>
                <Link className="link-back-404-btn" to="/">Go back home</Link>
            </div>
        )
    }
}

export default ErrorsRender;