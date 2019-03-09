import React,{Fragment} from 'react';
import {Row,Col,Card,Container,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Paquetes.css';
function LtsPaquetes(items){
  console.log(items);
  const {paquetes} = items;
  const listapaquetes = paquetes.map((paquete,i)=>(
    <Col md="auto" sm="auto" lg="auto" key={i}>
    <Card className="card" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={paquete.img}/>
      <Card.Body>
          <Card.Title><h5>{paquete.title}</h5></Card.Title>
          <Card.Text>
            {paquete.intro}
          </Card.Text>
          <Link to={paquete.to} key={i} replace >
            <Button variant="primary" >Ver más..</Button>
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
  const {paquetes} = props;
  return (
    <Fragment>
    <div className="paquetes">
      <div className="title"><h1>Servicios</h1></div>
      <div>
          <p>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </p>
      </div>
      <Container fluid={true}>
        <Row className="justify-content-md-center justify-content-sm-center">
          <LtsPaquetes paquetes={paquetes}/>
        </Row>
      </Container>
    </div>
    </Fragment>
);
}

export default Page;
