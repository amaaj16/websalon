import React, { Component } from 'react';
import {Container,Image,Row,Col  } from 'react-bootstrap';
import portada from './assets/fuente-jardin2.jpg';
import { Player,ControlBar,PlayToggle } from 'video-react';
import "./Home.css";
import logo2 from './assets/logo2.jpg';
import {connect} from 'react-redux';
import "../node_modules/video-react/dist/video-react.css";
class Home extends Component{

   render(){
     const {album} = this.props;
     console.log(this.props);
     return (
     <div className="Home">
       <div className="title"><h1>Welcome</h1></div>
     <Container>
            <div className="contenedor-video">
              <Player  autoPlay playsInline poster={logo2} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                <ControlBar autoHide={true} disableDefaultControls={false}>
                  <PlayToggle />
                </ControlBar>
              </Player>
            </div>
     </Container> </div>
   )
   }
}

const mapStateToProps = (state) =>{
  return {
    album : state.album,
    hola:"hellow"
  };
}
export default connect(mapStateToProps)(Home);
