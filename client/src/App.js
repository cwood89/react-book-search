import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bookshelf from "./pages/bookshelf";
import Library from "./pages/library";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Library} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/bookshelf" component={Bookshelf} />
        </Switch>
      </div>
    </Router>
  );

}

export default App;
