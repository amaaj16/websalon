import React, { Component } from 'react';
import {Container,Image,Row,Col  } from 'react-bootstrap';
import portada from './assets/fuente-jardin2.jpg';
import { Player,ControlBar,PlayToggle } from 'video-react';
import "./Home.css";
import logo2 from './assets/logo2.jpg';
import "../node_modules/video-react/dist/video-react.css";
class Home extends Component{

   render(){
     return (
     <div className="Home">
     <Container>
          <div className="cardd">

            <div className="contenedor-video">
              <Player  autoPlay playsInline poster={logo2} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                <ControlBar autoHide={true} disableDefaultControls={false}>
                  <PlayToggle />
                </ControlBar>
              </Player>
            </div>
        </div>
     </Container> </div>
   )
   }
}
export default Home;
