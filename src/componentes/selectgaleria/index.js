import React, { Component,Fragment } from 'react';
import SelectGaleria from "./SelectGaleria.js";
import App from '../header/App.js';
import boda from '../../assets/boda.jpg';
import xv from '../../assets/xvs.jpg';
class Albums extends Component{
  constructor(props){
    super(props);
    this.state={

      visibility: 'visible',
      albums:[
        {
          name:'Bodas',
          photo:boda,
          to:'/eboda'

      },
      {
        name:'XVs',
        photo:xv,
        to:'/exv'

      }]
    }
  }
  render() {
    return(

        <Fragment>
        <App/>
        <div className="body">
        <SelectGaleria al={this.state}/>
        </div>
        </Fragment>
    )
  }
}
export default Albums;
