import React, { Component } from 'react';
import {Container,Row,Col  } from 'react-bootstrap';
class Acerca extends Component{

   render(){
     return (
     <div className="Acerca">
     <Container>
        <Row>
        <Col xs={12} md={12} >
          <p>Acerca</p>
          </Col>
        </Row>
     </Container>
   </div>
   )
   }
}
export default Acerca;
