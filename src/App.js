import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'
import Overview from "./Views/Overview";
import Map from "./Views/Map";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        
        <Header />

        <div className="p-3">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products/:id">
            <Product />
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
        </Switch>
        </div>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
