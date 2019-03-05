import React, { Component,Fragment } from 'react';
import {Container,Row,Col,Card  } from 'react-bootstrap';
import Salon from '../../assets/Salon.jpg'
import Page from './Page.js';
import App from '../header/App.js'
class Paquetes extends Component{
  render(){
    return(
      <Fragment>
      <App/>
      <div className="body">
      <Page/>
      </div>
      </Fragment>
    )

  }
}

export default Paquetes;
