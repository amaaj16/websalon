import React, { Component } from 'react';
import {Container,Image,Row,Col  } from 'react-bootstrap';
import portada from './assets/fuente-jardin2.jpg';
class Paquetes extends Component{

   render(){
     return (
     <div className="Paquetes">
     <Container>
        <Row>
        <Col xs={12} md={12} >
          <Image src={portada} fluid/>
          </Col>
        </Row>
     </Container> </div>
   )
   }
}
export default Paquetes;
