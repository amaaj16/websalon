import React, { Component } from 'react';
import {Container,Row,Col  } from 'react-bootstrap';

class Galeria extends Component{

   render(){
     return (
       <div className="Galeria">
         <p>Galeria</p>
       <Container>
          <Row>
          <Col xs={12} md={12} >
            <p>Galeria</p>
            </Col>
          </Row>
       </Container> </div>
   )
   }
}
export default Galeria;
