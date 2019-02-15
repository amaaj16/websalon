import React, { Component } from 'react';
import {Container,Row,Col,Card  } from 'react-bootstrap';
import Salon from './assets/Salon.jpg'
import './Paquetes'
class Paquetes extends Component{


   render(){
     return (
       <div className="Galeria">
       <Container>
          <Row className="justify-content-md-center">
          <Col md="auto" sx="auto" lg="auto">
          <Card  className="card">
            <Card.Img variant="top" src={Salon}/>
            <Card.Body>
                <Card.Title> Paquete 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
            </Card.Body>
          </Card>
        </Col>
          </Row>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center">
          <Col md="auto" lg="auto">
          <Card className="card">
            <Card.Img variant="top" src={Salon}/>
            <Card.Body>
                <Card.Title> Paquete 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          </Row>
          <br></br>
          <br></br>
          <Row className="justify-content-md-center">
          <Col md="auto" lg="auto">
          <Card className="card">
            <Card.Img variant="top" src={Salon}/>
            <Card.Body>
                <Card.Title> Paquete 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          </Row>
       </Container>
       </div>
   )
   }


}

export default Paquetes;
