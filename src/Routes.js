import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Siren from "./components/pages/Siren";
import Led from "./components/pages/LedLight";
import Description from "./components/pages/Description/Description";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/siren" component={Siren} />
        <Route exact path="/led" component={Led} />
        <Route exact path="/description/:pageUrl">
          <Description />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
