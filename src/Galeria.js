import React, { Component } from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import descarga from './assets/descarga.png';
class Galeria extends Component{

   render(){
     return (
       <div className="Galeria">
       <Container>
          <Row>
          <Col xs="2">
            <Image src={descarga} thumbnail></Image>
          </Col>
          <Col xs="2">
            <Image src={descarga} thumbnail></Image>
          </Col>
          <Col xs="2">
            <Image src={descarga} thumbnail></Image>
          </Col>
          <Col xs="2">
            <Image src={descarga} thumbnail></Image>
          </Col>
          <Col xs="2">
            <Image src={descarga} thumbnail></Image>
          </Col>
          <Col xs="2">
            <Image src={descarga} thumbnail></Image>
          </Col>
          </Row>
       </Container> </div>
   )
   }
}
export default Galeria;
