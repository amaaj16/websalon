import React, { Component, } from 'react';
import {Container,Col,Image} from 'react-bootstrap';
import descarga from './assets/descarga.png';
import "./Galeria.css";
class Galeria extends Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      viewImg:false,
      visibility: 'hidden'

    }
      this.handleClick = this.handleClick.bind(this);

  }
  handleClick() {
    this.setState({visibility: 'visible'})

  }

   render(){

     return (
       <div className="Galeria">
         <div style={this.state} className="contenedor-img">
           <div style={this.state} className="img-view">
             <Image src={descarga} thumbnail></Image>
             <div><button</div>
           </div>
         </div>
       <Container>
          <button onClick={this.handleClick}>
              <Image src={descarga} thumbnail></Image>
          </button>
       </Container>

     </div>
   )
   }
}
export default Galeria;
