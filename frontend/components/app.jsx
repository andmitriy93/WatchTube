import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";

import NavBarContainer from "./nav_bar/nav_bar_container";
import SignUpContainer from "./session_form/signup_form_container";
import LogInContainer from "./session_form/login_form_container";
import Home from "./home/home";
import ErrorsRender from './errors/errors'

export default () => (
  <div>
      <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LogInContainer} />
      <AuthRoute exact path="/signup" component={SignUpContainer} />
      <Route exact path="/" component={Home} />
      <Route path="*" component={ErrorsRender} />
    </Switch>
  </div>
);
