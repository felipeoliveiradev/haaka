import React from "react";
import { Route, Switch } from "react-router-dom";

// import pages
import { Main } from "layout";
import {
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
        <Route exact path="/" component={Login} />
        <Route exact path="/register/" component={Register} />
        <Route exact path="/questions/" component={Questions} />
        <Route exact path="/result/" component={Result} />
        {/* route */}
      </Switch>
    </Main>
  );
};
