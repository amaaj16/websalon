import React, { Component, } from 'react';
import Galeria from './Galeria.js';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import {Container,Image} from 'react-bootstrap';
import boda from './assets/boda.jpg';
import xv from './assets/xvs.jpg';
import "./Galeria.css";
class SelectGaleria extends Component{
  constructor(props){
    super(props);
    this.state={
      albums:[
        {
          name:'Bodas',
          photo:boda,
          to:'/Galeria/boda'
      },
      {
        name:'XVs',
        photo:xv,
        to:'/Galeria/xv'

      }]
    }
  }
  render(){
    function ViewAlbums (props){
      const albumsD = props.albumsI;
      const lstAlbums = albumsD.map((album,i)=>(
        <Link to={album.to} key={i}>
        <div className="responsive">
          <div className="album">
            <Image src={album.photo}></Image>
            <div className="titleAlbum">
              <h5>{album.name}</h5>
            </div>
          </div>
        </div>

        </Link>



      ))
      return (<Container>{lstAlbums}</Container>)
}

function Routing (props){
  const albumsD = props.albumsI;
  const rut = albumsD.map((album,i)=>(

      <Route path={album.to} component={Galeria_page}/>

  ))
  return (<Switch>{rut}</Switch>)
}
    return (
      <Router>
        <ViewAlbums albumsI={this.state.albums}/>
        <Routing albumsI={this.state.albums}/>
      </Router>
    )
  }
}


const Galeria_page = ({match})=>(
  <Galeria/>

)
export default SelectGaleria;
