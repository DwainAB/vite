import React, { useContext } from 'react';
import { CartContext } from "../context/CartContext"
import { Card, Badge, Button } from 'react-bootstrap';
import "../assets/css/dish.scss"

export default function Dish ({name, img, price, isNew}){
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({ type: 'increment' });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: 'decrement' });
  };

  return(
    <Card>
        {isNew && <Badge bg="primary">Nouveau</Badge>}
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}€
          </Card.Text>
          <Button variant="dark" onClick={handleAddToCart}>Ajouter au panier</Button>
          <Button variant="light" onClick={handleRemoveFromCart}>Retirer du panier</Button>
        </Card.Body>
      </Card>
    )
}