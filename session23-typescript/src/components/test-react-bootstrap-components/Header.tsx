import {Button, Container, Nav, Navbar} from "react-bootstrap"

export const Header = () => {
    return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            React Bootstrap
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Features</Nav.Link>
                            <Nav.Link href="#link">Faq's</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                        </Nav>
                        <Button variant="outline-success">Login</Button>
                        <Button variant="outline-success">SignUp</Button>
                    </Container>
                </Navbar>
            </>
    )
}