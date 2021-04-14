import * as React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from './Home'
// import PageNotFound from "./PageNotFound";

const Routes:React.FC = () => {
  return (
    <Router>
      <div>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/" component={PageNotFound} /> */}
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;