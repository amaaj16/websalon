import React, { Component } from 'react';
import {Container,Row,Col,Form  } from 'react-bootstrap';

class Contacto extends Component{

   render(){
     return (
     <div className="Contacto">
     <Container>
       <Form>
          <Row>
            <Col>
              <Form.Group>
              <Form.Label>Nombre:</Form.Label>
              <Form.Control type="text"  placeholder="Ingresa Nombre"/>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Ingresa email"/>
              </Form.Group>
            </Col>

          </Row>

       </Form>
     </Container>
   </div>
   )
   }
}
export default Contacto;
