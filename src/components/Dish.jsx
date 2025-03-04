import { Card } from 'react-bootstrap';
import "../assets/css/dish.scss"

export default function Dish ({name, img, price}){
    return(
    <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}