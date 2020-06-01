import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { CartContext } from "./CartContext";
class NavbarDemo extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Hung</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/products">Products</Link>
          </Nav.Link>

          <CartContext.Consumer>
            {({ cartItems }) => (
              <Nav.Link>
                <Link to="/cart">Cart ({cartItems.length})</Link>
              </Nav.Link>
            )}
          </CartContext.Consumer>
        </Nav>
      </Navbar>
    );
  }
}
export default NavbarDemo;
