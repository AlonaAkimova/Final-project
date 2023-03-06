import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/main/Main";
import AboutUs from "./pages/about/AboutUs";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
