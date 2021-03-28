import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import PortfolioPage from "views/PortfolioPage/PortfolioPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import HomePage from "views/HomePage/HomePage2.js";
import About from "views/AboutPage/AboutPage.js";
import ProceduralGenerationPage from "views/Projects/ProceduralGeneration/ProceduralGenerationPage.js";
import MachineLearning from "views/Projects/MachineLearning/MachineLearning.js";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/about" component={About} />
      <Route path="/project/proc-gen" component={ProceduralGenerationPage} />
      <Route path="/project/machineLearning"y component={MachineLearning} />
      <Route path="/" component={HomePage} />
    
    </Switch>
  </Router>,
  document.getElementById("root")
);
