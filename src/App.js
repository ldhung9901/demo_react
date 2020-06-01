import React from "react";
import "./styles.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarDemo from "./navbar";
import Products from "./products";
import { Container } from "react-bootstrap";
import { CartProvider, CartContext } from "./CartContext";
import YourCart from "./cart"
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavbarDemo />
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/cart">
              <YourCart />
            </Route>
          </Switch>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
