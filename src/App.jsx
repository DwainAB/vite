import Header from "../src/components/Header"
import Footer from "./components/Footer"
import Dish from "./components/Dish"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from 'react-bootstrap'
import { useState } from "react";

function App() {
  const [showNewOnly, setShowNewOnly] = useState(false)

  const dishes =[
    {
      name:"Tacos à l’unité",
      img:"https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
      price: 3,
      isNew: true
    },
    {
      name:"Enchiladas",
      img:"https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg",
      price: 12,
      isNew: false
    },
    {
      name:"Mole poblano",
      img:"https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg",
      price: 15,
      isNew: false
    }

  ]

  function handleShowNewOnly(){
    setShowNewOnly(!showNewOnly)
    console.log(showNewOnly);
    
  }


  return (
    <>
      <Header/>
        <Container className="py-5">
        <Button variant="dark" className="mb-5" onClick={handleShowNewOnly}>Nouveautés seulement</Button>
          <Row>
            {dishes.map((item, index)=>(
              <Col key={index} md={4}>
                <Dish name={item.name} img={item.img} price={item.price}  isNew={item.isNew} />
              </Col>
            ))}
          </Row>
        </Container>
      <Footer/>
    </>
  )
}

export default App