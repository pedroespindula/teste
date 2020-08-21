import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "../Menu";
import SearchBar from "../SearchBar";

import Banner from "../../views/Banner";
import Vehicle from "../../views/Vehicle";
import VehicleList from "../../views/Vehicle/List";

import "./index.css";

const App = () => (
  <Router className="app">
    <Menu />
    <SearchBar />
    <Switch>
      <Route path="/" exact={true} component={Banner} />
      <Route path="/vehicle" exact={true} component={VehicleList} />
      <Route path="/vehicle/create" exact={true} component={Vehicle} />
      <Route path="/vehicle/:id" component={Vehicle} />
    </Switch>
  </Router>
);

export default App;
