import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bookshelf from "./pages/bookshelf";
import Libary from "./pages/library";
import Nav from "./components/nav";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Libary} />
          <Route exact path="/libary" component={Libary} />
          <Route exact path="/bookshelf" component={Bookshelf} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );

}

export default App;
