import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const AnimeHomePage = lazy(() => import("../anime/home/AnimeHomePage"));

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={AnimeHomePage} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
