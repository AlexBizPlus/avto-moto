import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import "./app.scss";
import { Routes } from "../../const";
import CarsPage from "../../pages/CarsPage/CarsPage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

const App = () => {
  return (
    <Router className="app">
      <Switch>
        <Route exact path={Routes.CARS} component={CarsPage} />
        <Route exact path={Routes.ERROR404} component={ErrorPage} />
        <Redirect to={Routes.CARS} component={CarsPage} />
      </Switch>
    </Router>
  );
};

export default App;
