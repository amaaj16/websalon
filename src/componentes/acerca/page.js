import React from 'react';
import {Container,Row,Col,Image  } from 'react-bootstrap';
import logo2 from '../../assets/logo2.jpg';
const page = (props)=>{
  return (
  <div className="Acerca">
  <Container>
     <Row>
     <Col xs={12} md={12} >
     <div className="title"><Image src={logo2}/></div>
     <div className="title"><h4>Salon de eventos sociales</h4></div>
       <p>Somos una empresa dedicada a realizar eventos sociales de alta vanguardia,con la mejor calidad en
       en nuestros servicios, los años de esperiecia respaldan nuestro trabajo.</p>
       </Col>
     </Row>
  </Container>
</div>
);
}

export default page;
