import React from 'react';
import {Image,Row,Col,Container,Card  } from 'react-bootstrap';
import { Player,ControlBar} from 'video-react';
import "./Home.css";
import vidPromo from '../../assets/vidPromo.mp4';
import calidad from '../../assets/medalla.svg';
import profesionalismo from '../../assets/camarero.svg';
import experiencia from '../../assets/escudo.svg';
import "../../../node_modules/video-react/dist/video-react.css";

function Page(props){
     return (
     <div className="Home">
       <div>
       <Row className="fixrow">
         <Col lg="12" md="12" className="fixcol">
            <div className="contenedor-video">
              <Player autoPlay src={vidPromo} width={1000} >
                <ControlBar  className="my-class" />
              </Player>
            </div>
            </Col>
        </Row>
        </div>
          <div className="contenedor-title">
            <h1 className="logotitle title-home">El Quijote</h1>
            <div className="linea"></div>
          </div>
          <Container>
            <Row className="justify-content-md-center justify-content-sm-center">
            <Col lg="auto" md="auto" sm="auto" >
              <Card style={{ width: '20rem' }} className="card-home">
                <Card.Img variant="top" src={calidad} className="card-img-top-home"/>
                  <Card.Body>
                    <Card.Title className="card-title-home">Calidad</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
            </Col>
            <Col lg="auto" md="auto" sm="auto">
              <Card style={{ width: '20rem' }} className="card-home">
                <Card.Img variant="top" src={experiencia} className="card-img-top-home"/>
                  <Card.Body>
                    <Card.Title className="card-title-home">Experiencia</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
            </Col>
            <Col lg="auto" md="auto" sm="auto">
              <Card style={{ width: '20rem' }} className="card-home">
                <Card.Img variant="top" src={profesionalismo} className="card-img-top-home" />
                  <Card.Body>
                    <Card.Title className="card-title-home">Profesionalismo</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>

                  </Card.Body>
                </Card>
            </Col>
            </Row>
          </Container>
     </div>
   );

/*
<Player  autoPlay playsInline poster={logo2} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
  <ControlBar autoHide={true} disableDefaultControls={true}>
    <PlayToggle />
  </ControlBar>
</Player>
*/

}

export default Page;
