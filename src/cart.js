import React, { Component } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { CartContext, CartProvider } from "./CartContext";
export default function YourCart() {
  return (
    <CartContext.Consumer>
      {({ cartItems }) =>
         <Row className="justify-content-center">
         { cartItems.map(item => {
           return (
             <Col lg={3}>
               <Card style={{ width: "18rem" }}>
                 <Card.Img variant="top" src={item.img} />
                 <Card.Body>
                   <Card.Title>Card Title</Card.Title>
                   <Card.Text>{item.description}</Card.Text>
                  
                 </Card.Body>
               </Card>
             </Col>
           );
         })}
       </Row>
      }
    </CartContext.Consumer>
  );
}
