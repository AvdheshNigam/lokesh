import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Description from "./components/pages/Description/Description";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/template/:id">
          <Description />
        </Route>
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
