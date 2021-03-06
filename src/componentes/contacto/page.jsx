import React  from 'react';
import {Container,Row,Col,Form,Button,Image  } from 'react-bootstrap';
import telefono from '../../assets/llamar.svg';
import email from '../../assets/mensaje.svg';
import ubicacion from '../../assets/marcador-de-posicion.svg';
import './Contacto.css';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
const style= theme =>({
  root:{
    width: '90%',
    height:'auto',
    margin: '0 auto',
    position: 'relative',
    top:'460px',
    display: 'flex',
    justifyContent:'center',
    flexDirection:'column',

  }

})

function Page(props){
  const {classes} = props;
  return (
  <Paper className={classes.root} elevation={2}>
  <div className="Contacto">
  <div className="card-c">
    <h1 className="textCenter" >Contacto</h1>
    <div className="linea"></div>
    <h3 className="textCenter" >¡Envianos todas tus dudas! </h3>
  </div>
  <Container fluid={true}>
  <Row>
  <Col lg="5" md="5" >
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
       <Form.Label>Comentario:</Form.Label>
       <Form.Control as="textarea" rows="6"/>
     </Form.Group>
     <Button variant="primary" type="Submit">Enviar</Button>
    </Form>
   </Col>

    <Col lg={{span: 5, offset:2}} md={{span: 5, offset:2}}>
     <div className="datos">
       <Row >
         <Col lg="auto" md="auto" sm="auto" className="datos-sm">
           <Image src={telefono}/>
          <p>55-55-55-55-55</p>
         </Col>
       </Row>
       <Row>
         <Col lg="auto" md="auto" sm="auto" className="datos-sm">
           <Image src={email}/>
          <p>elquijote@gmail.com</p>
         </Col>
       </Row>
       <Row>
         <Col lg="auto" md="auto" sm="auto" className="datos-sm">
           <Image src={ubicacion}/>
           <p>Zapopan 52 Col. Virgencitas 57300 Edo. Mex.</p>
          </Col>
       </Row>

     </div>
    </Col>
   </Row>
  </Container>
</div>
</Paper>
);
}


Page.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style) (Page);
