import React, { Component, } from 'react';

import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import {Container,Image} from 'react-bootstrap';
import boda from './assets/boda.jpg';
import xv from './assets/xvs.jpg';
import "./Galeria.css";
class SelectGaleria extends Component{
  constructor(props){
    super(props);
    this.state={
      concepto:props.concepto,
      visibility: 'visible',
      albums:[
        {
          name:'Bodas',
          photo:boda,
          to:'/Galer/boda'
      },
      {
        name:'XVs',
        photo:xv,
        to:'/Galer/xv'

      }]
    }
  }
  showHide(){
    this.setState({visibility:'hidden'});
  }

  render(){
    const showHide = this.showHide;
    function ViewAlbums (props){
      const albumsD = props.albumsI;
      const lstAlbums = albumsD.map((album,i)=>(
        <Link to={album.to} key={i}>
        <div className="responsive">
          <div className="album">
            <Image src={album.photo} ></Image>
            <div className="titleAlbum">
              <h5>{album.name}</h5>
            </div>
          </div>
        </div>

      </Link>



      ))
      return (<Container>{lstAlbums}</Container>)
}


    return (
      <Route>
        <ViewAlbums albumsI={this.state.albums}/>
      </Route>
    )
  }
}



export default SelectGaleria;
