import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import portada from './assets/fuente-jardin2.jpg';

import './App.css';
  //import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Navbar  fixed="top" bg="light" expand="md" >
          <Navbar.Brand href="#home" className="title-nav">El Quijote</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#Galeria">Galeria</Nav.Link>
              <Nav.Link href="#Paquetes">Paquetes</Nav.Link>
              <Nav.Link href="#Contacto">Contacto</Nav.Link>
              <Nav.Link href="#Acerca">Acerca de</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        <Container>
        <Row>
          <Col xs={12} md={12} >
            <Image src={portada} fluid/>
          </Col>
        </Row>
        </Container>
      </div>
    )
  }
}

export default App;
