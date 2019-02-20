import React, { Component } from 'react';
import {Container,Row,Col  } from 'react-bootstrap';
class Acerca extends Component{

   render(){
     return (
     <div className="Acerca">
     <Container>
        <Row>
        <Col xs={12} md={12} >
        <p>El Quijote</p>
        <p>Salon de eventos sociales</p>
          <p>Somos una empresa dedicada e realizar eventos sociales de alta vanguardia,con la mejor calidad en
          en nuestros servicios, los años de esperiecia respaldan nuestro trabajo.</p>
          </Col>
        </Row>
     </Container>
   </div>
   )
   }
}
export default Acerca;
