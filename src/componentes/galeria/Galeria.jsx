import React, { Component,Fragment } from 'react';
import {Image} from 'react-bootstrap';
import App from '../header/App.jsx';
import {connect} from 'react-redux';
import currentAlbumId from '../../redux/actions/currentAlbumId.js';
import ItemsGaleria from "./ItemsGaleria.js";
import CssBaseline from '@material-ui/core/CssBaseline';
import HeadGaleria from "../selectgaleria/HeadGaleris.jsx";
import "./Galeria.css";
class Galeria extends Component{
  constructor(props){
    super(props);
    this.state={
      items:'',
      viewImg:false,
      visibility: 'hidden',
      idItem: ''

    }
    this.handleClick = this.handleClick.bind(this);

  }





  handleClick(id,e) {
    if (!this.state.viewImg) {
      this.setState({viewImg:true,visibility: 'visible',idItem:id})
    }
    if(this.state.viewImg){
      this.setState({viewImg:false,visibility: 'hidden'})
    }
}


componentWillMount(){

  this.props.currentAlbumId(this.props.concepto);
}

   render(){


     const {allalbum,concepto}=this.props;

     return (
       <Fragment>
       <CssBaseline />
       <App/>
       <div className="body">
       <div className="Galeria">

         <div style={this.state} className="contenedor-img">
           <div style={this.state} className="img-view">
             <Image src={this.state.idItem}  thumbnail></Image>
             <div className="dv-btn-close">
               <button onClick={this.handleClick} className="img-close">X</button>
             </div>
           </div>

        </div>

        </div>
        </div>
        <HeadGaleria concepto={concepto}/>

        <ItemsGaleria handleClick={this.handleClick} item={allalbum}/>
      </Fragment>

   )
   }
}

const mapDispatchToProps ={
  currentAlbumId
};

const mapStateToProps = (state) =>{
  return {
    allalbum :state.selectAlbum,
    hola:"hellow"
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Galeria);
