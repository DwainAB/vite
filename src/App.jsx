import Header from "../src/components/Header"
import Footer from "./components/Footer"
import Dish from "./components/Dish"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
      <Header/>
        <Container className="py-5">
          <Row>
            <Col md={4}>
              <Dish name="Tacos à l'unité" img="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg" price={3} />
            </Col>
            <Col md={4}>
              <Dish name="Enchiladas" img="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg" price={12} />
            </Col>
            <Col md={4}>
              <Dish name="Mole poblano" img="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg" price={15} />
            </Col>
          </Row>
        </Container>
      <Footer/>
    </>
  )
}

export default App