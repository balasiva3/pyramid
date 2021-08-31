import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store";
import DashBoard from "./containers/DashBoard";

const Routes = () => {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/dashboard" component={DashBoard} />
      </Router>{" "}
    </Provider>
  );
};

export default Routes;
