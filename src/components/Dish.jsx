import React, { useContext } from 'react';
import { CartContext } from "../context/CartContext"
import { Card, Badge, Button } from 'react-bootstrap';
import "../assets/css/dish.scss"

export default function Dish ({name, img, price, isNew}){
  const { addToCart } = useContext(CartContext);


    return(
    <Card>
        {isNew && <Badge bg="primary">Nouveau</Badge>}
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}€
          </Card.Text>
          <Button variant="dark" onClick={addToCart}>Ajouter au panier</Button>
        </Card.Body>
      </Card>
    )
}