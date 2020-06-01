import React, { Component } from "react";
export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      cartItems: []
    };
    this.addToCart = this.addToCart.bind(this);
  }
  addToCart(item) {
    this.setState({
      cartItems: this.state.cartItems.concat(item)
    });
    console.log(this.state.cartItems);
  }
  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
