import React, { Component } from 'react';
import {Container,Row,Col,Card  } from 'react-bootstrap';
import Salon from './assets/Salon.jpg'
import './Paquetes.css'
class Paquetes extends Component{


   render(){
     return (
       <div className="paquetes">
       <div className="title"><h1>Tittle</h1></div> 
       <div><p>Some quick example text to build on the card title and make up the bulk of
       the card's content.</p> </div>
      <Row>
          <Col md="auto" xs="auto" lg="auto">
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
          <br></br>
          <br></br>
        </Col>
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
        <br></br>
        <br></br>
        </Col>

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
          <br></br>
          <br></br>
          </Col>
</Row>

       </div>
   )
   }


}

export default Paquetes;
