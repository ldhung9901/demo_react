import React, { Component } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { CartContext, CartProvider } from "./CartContext";
const products = [
  {
    img: "https://picsum.photos/100",
    " description": "USD"
  },
  {
    img: "https://picsum.photos/100",
    " description": "CNY"
  },
  {
    img: "https://picsum.photos/100",
    " description": "CNY"
  },
  {
    img: "https://picsum.photos/100",
    " description": "EUR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "PHP"
  },
  {
    img: "https://picsum.photos/100",
    " description": "BRL"
  },
  {
    img: "https://picsum.photos/100",
    " description": "THB"
  },
  {
    img: "https://picsum.photos/100",
    " description": "USD"
  },
  {
    img: "https://picsum.photos/100",
    " description": "IDR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "EUR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "IDR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "PHP"
  },
  {
    img: "https://picsum.photos/100",
    " description": "EUR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "EUR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "CNY"
  },
  {
    img: "https://picsum.photos/100",
    " description": "EUR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "CNY"
  },
  {
    img: "https://picsum.photos/100",
    " description": "PEN"
  },
  {
    img: "https://picsum.photos/100",
    " description": "SOS"
  },
  {
    img: "https://picsum.photos/100",
    " description": "CNY"
  },
  {
    img: "https://picsum.photos/100",
    " description": "USD"
  },
  {
    img: "https://picsum.photos/100",
    " description": "IDR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "CAD"
  },
  {
    img: "https://picsum.photos/100",
    " description": "COP"
  },
  {
    img: "https://picsum.photos/100",
    " description": "LAK"
  },
  {
    img: "https://picsum.photos/100",
    " description": "UAH"
  },
  {
    img: "https://picsum.photos/100",
    " description": "CLP"
  },
  {
    img: "https://picsum.photos/100",
    " description": "SEK"
  },
  {
    img: "https://picsum.photos/100",
    " description": "CNY"
  },
  {
    img: "https://picsum.photos/100",
    " description": "PHP"
  },
  {
    img: "https://picsum.photos/100",
    " description": "BRL"
  },
  {
    img: "https://picsum.photos/100",
    " description": "EUR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "IDR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "CZK"
  },
  {
    img: "https://picsum.photos/100",
    " description": "SEK"
  },
  {
    img: "https://picsum.photos/100",
    " description": "VND"
  },
  {
    img: "https://picsum.photos/100",
    " description": "HNL"
  },
  {
    img: "https://picsum.photos/100",
    " description": "IDR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "COP"
  },
  {
    img: "https://picsum.photos/100",
    " description": "USD"
  },
  {
    img: "https://picsum.photos/100",
    " description": "EUR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "EUR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "RUB"
  },
  {
    img: "https://picsum.photos/100",
    " description": "PHP"
  },
  {
    img: "https://picsum.photos/100",
    " description": "IDR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "CNY"
  },
  {
    img: "https://picsum.photos/100",
    " description": "COP"
  },
  {
    img: "https://picsum.photos/100",
    " description": "IDR"
  },
  {
    img: "https://picsum.photos/100",
    " description": "PHP"
  },
  {
    img: "https://picsum.photos/100",
    " description": "ZAR"
  }
];
class Products extends Component {
  render() {
    return (
      <Row className="justify-content-center">
        {products.map(item => {
          return (
            <Col lg={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <CartContext.Consumer>
                    {({ addToCart }) => (
                      <Button onClick={() => addToCart(item)} variant="primary">
                        Add to cart
                      </Button>
                    )}
                  </CartContext.Consumer>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}
export default Products;
