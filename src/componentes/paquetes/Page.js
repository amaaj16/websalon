import React,{Fragment} from 'react';
import {Row,Col,Card,Container,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Paper} from '@material-ui/core';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import './Paquetes.css';

const style= theme =>({
  root:{
    position:'relative',
    display: 'flex',
    justifyContent:'center',
    flexDirection:'column',
    height: '500px',
    alignSelf:'flex-start '
  },
  cont:{
    marginTop: '10px'
  }

});

function LtsPaquetes(items){
  console.log(items);
  const {paquetes} = items;
  const listapaquetes = paquetes.map((paquete,i)=>(
    <Col md="auto" sm="auto" lg="auto" key={i}>
    <Card className="card" style={{ width: '30rem' }}>
      <Card.Img variant="top" src={paquete.img}/>
      <Card.Body>
          <Card.Title><h5>{paquete.title}</h5></Card.Title>
          <Card.Text>
            {paquete.intro}
          </Card.Text>
          <Link to={paquete.to} key={i} replace >
            <Button variant="primary" >Ver más...</Button>
        </Link>
      </Card.Body>
    </Card>
    <br/>
    <br/>
    </Col>
  ));
  return (listapaquetes);
}
function Page(props){
  console.log(props);
  const {paquetes,classes} = props;
  return (
    <Fragment>
    <div className="paquetes">
      <Paper elevation={1} className={classes.root}>
        <h1 className="textCenter" >Servicios</h1>
        <div className="linea"></div>
        <h4 className="textCenter" >Some quick example text to build on the card title and make up the bulk of
        the card's content. </h4>

      </Paper>
      <Container className={classes.cont} fluid={true}>
        <Row className="justify-content-md-center justify-content-sm-center">
          <LtsPaquetes paquetes={paquetes}/>
        </Row>
      </Container>
    </div>
    </Fragment>
);
}
Page.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style) (Page);
