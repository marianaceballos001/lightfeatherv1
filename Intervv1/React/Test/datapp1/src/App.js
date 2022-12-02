import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import About from "./user/pages/about";
import Info from "./user/pages/info";
import Graphs1 from "./user/pages/graphs1";
import Graphs2 from "./user/pages/graphs2";
import Graphs3 from "./user/pages/graphs3";
import Graphs4 from "./user/pages/graphs4";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Info />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/female" exact>
          <Graphs1 />
        </Route>
        <Route path="/male" exact>
          <Graphs2 />
        </Route>
        <Route path="/age" exact>
          <Graphs3 />
        </Route>
        <Route path="/race" exact>
          <Graphs4 />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;

