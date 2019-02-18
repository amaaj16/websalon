import React, { Component } from 'react';
import {Container,Image,Row,Col  } from 'react-bootstrap';
import portada from './assets/fuente-jardin2.jpg';
import "./Home.css";
class Home extends Component{

   render(){
     return (
     <div className="Home">
     <Container>
          <div className="card">
            <div className="title"><h1>El Quijote</h1></div>
            <div>El salon Quijote te da la bienvenida a su portalweb.</div>
          </div>
     </Container> </div>
   )
   }
}
export default Home;
