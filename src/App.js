import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import {Redirect, Switch} from "react-router-dom";



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
        <Switch>
          <Redirect from="/" to="/about" component={About} />
                <Route path="/about" component={About}>
                </Route>
        </Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
