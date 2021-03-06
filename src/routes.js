import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./page/Home";
import Login from "./page/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
};

export default Routes;
