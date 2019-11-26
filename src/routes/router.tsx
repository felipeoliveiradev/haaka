import React from "react";
import { Route, Switch } from "react-router-dom";

// import pages
import { Main } from "layout";
import {
  Home,
  Login,
  Questions,
  Register,
  Result,
  // import routers
} from "../pages";

// Protect Router

export const Routers = () => {
  return(
    <Main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/result/" component={Result} />
        <Route exact path="/login/" component={Login} />
        <Route exact path="/register/" component={Register} />
        <Route exact path="/questions/" component={Questions} />
        {/* route */}
      </Switch>
    </Main>
  );
};
