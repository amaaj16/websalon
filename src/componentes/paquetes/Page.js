import React from 'react';
import {Row,Col,Card,Container,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Paquetes.css';
function LtsPaquetes(item){
  console.log(item.paquetes);
  const listapaquetes = item.paquetes.map((paquete,i)=>(
    <Col md="auto" lg="auto">
    <Card className="card">
      <Card.Img variant="top" src={paquete.img}/>
      <Card.Body>
          <Card.Title><h5>{paquete.title}</h5></Card.Title>
          <Card.Text>
            {paquete.intro}
          </Card.Text>
          <Link to={paquete.to} key={i} replace >
            <Button variant="primary" >Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
    <br/>
    <br/>
    </Col>
  ));

  return listapaquetes;
}
function Page(props){
  console.log(props);
  return (
    <div className="paquetes">
      <div className="title"><h1>Servicios</h1></div>
      <div>
          <p>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </p>
      </div>
      <Container>
        <Row>
          <LtsPaquetes paquetes={props}/>
        </Row>
      </Container>
    </div>
);
}

export default Page;
