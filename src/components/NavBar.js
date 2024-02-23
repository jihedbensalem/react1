import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar() {
return (
    <div>
        <Navbar style={{backgroundColor : ' gray'}}>
        <Container>
          <Navbar.Brand href="#home" style={{fontWeight : 'bold', fontSize : 'xxx-large'}}>Cars</Navbar.Brand>
          <Nav className="me-auto" style={{marginInline : '70%', fontSize : 'x-large'}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar ;