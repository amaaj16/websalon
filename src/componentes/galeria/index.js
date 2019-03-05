import React, { Component,Fragment } from 'react';
import Galeria from "./Galeria.js";
import App from '../header/App.js'
class IGaleria extends Component{
  render() {
    return(

        <Fragment>
        <App/>
        <Galeria/>
        </Fragment>
    )
  }
}
export default IGaleria;
