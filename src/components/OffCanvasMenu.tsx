import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from "./Modal"


const OffCanvasMenu = () => {
  return (
    <>
        <Navbar  bg="light" expand={'xl'} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">LOGO</Navbar.Brand>
            <Navbar.Toggle  />
            <Navbar.Offcanvas
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title >
                  Navbar
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">{<Modal/>}</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default OffCanvasMenu;