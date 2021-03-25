import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import "../scss/components/App.scss";
import { Routes } from "../const";
import CarsPage from "../pages/CarsPage/CarsPage";
import Error404 from "../pages/Error404/Error404";

const App = () => {
  return (
    <Router className="app">
      <Switch>
        <Route exact path={Routes.CARS} component={CarsPage} />
        <Route exact path={Routes.ERROR404} component={Error404} />
        <Redirect to={Routes.CARS} component={CarsPage} />
      </Switch>
    </Router>
  );
};

export default App;
