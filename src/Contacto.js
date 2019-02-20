import React, { Component } from 'react';
import {Container,Row,Col,Form,Button  } from 'react-bootstrap';
import './Contacto.css';
class Contacto extends Component{

   render(){
     return (
     <div className="Contacto">
     <div className="card-c">
      <p>Envianos todas tus dudas.</p>
     </div>
     <Container>
     <Row>
     <Col lg="5">
       <Form>
        <Form.Group>
          <Form.Label>Nombre:</Form.Label>
          <Form.Control type="text"  placeholder="Ingresa Nombre"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control variant="ale" type="email" placeholder="Ingresa email"/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control as="textarea" rows="6"/>
        </Form.Group>
        <Button variant="primary"type="Submit">Enviar</Button>
       </Form>
      </Col>

       <Col lg={{span: 5, offset:2}}>
        <div className="datos">
        <p>55-55-55-55-55</p>
        <p>elquijote@gmail.com</p>
        <p>Zapopan 52 Col. Virgencitas 57300 Edo. Mex.</p>
        </div>
       </Col>
      </Row>
     </Container>
   </div>
   )
   }
}
export default Contacto;
