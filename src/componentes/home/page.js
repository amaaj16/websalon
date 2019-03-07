import React from 'react';
import {Image,Row,Col  } from 'react-bootstrap';

//import { Player,ControlBar,PlayToggle } from 'video-react';
import "./Home.css";
import portada from '../../assets/portada.jpg';
import "../../../node_modules/video-react/dist/video-react.css";

function Page(props){
     return (
     <div className="Home">
       <div>
       <Row className="fixrow">
         <Col lg="12" md="12" className="fixcol">
            <div className="contenedor-video">
              <Image src={portada} className="portada" />
            </div>
            </Col>
        </Row>
        </div>
          <div className="Welcome"><h1>Welcome</h1></div>
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
