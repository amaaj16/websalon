import React, { Component } from 'react';
import {Container,Row,Col,Form,Button,Image  } from 'react-bootstrap';
import telefono from './assets/llamar.svg';
import email from './assets/mensaje.svg';
import ubicacion from './assets/marcador-de-posicion.svg';
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
          <Row>
            <Image src={telefono}/>
            <p>55-55-55-55-55</p>
          </Row>
          <Row>
            <Image src={email}/>
            <p>elquijote@gmail.com</p>
          </Row>
          <Row>
            <Image src={ubicacion}/>
              <p>Zapopan 52 Col. Virgencitas 57300 Edo. Mex.</p>
          </Row>

        </div>
       </Col>
      </Row>
     </Container>
   </div>
   )
   }
}
export default Contacto;
