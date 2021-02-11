import React from "react";
import { Provider } from "react-redux";
import NavBarContainer from './nav_bar/nav_bar_container';
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";

const App = () => (
  <div>
    <header>
      <Link to="/">
        <h3>YouTuubee</h3>
      </Link>
    </header>
    <Switch>
      <Route path="/" component={NavBarContainer} />
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
