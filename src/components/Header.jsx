import { Container, Navbar, Nav } from "react-bootstrap"
import logo from "../assets/logo/logo.webp"
import "../assets/css/header.scss" 

export default function Header() {
    return (
        <header>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img 
                            src={logo} 
                            alt="image d'un mexicain qui fait de la guitare" 
                        />
                    </Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Accueil</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}