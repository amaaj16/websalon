import React, { Component,Fragment } from 'react';
import {Image} from 'react-bootstrap';
import App from '../header/App.js';
import {connect} from 'react-redux';
import currentAlbumId from '../../redux/actions/currentAlbumId.js';
//import ItemsGaleria from "./ItemsGaleria.js";
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





  handleClick(id) {
    if (!this.state.viewImg) {
      this.setState({viewImg:true,visibility: 'visible',idItem:id})
    }
    if(this.state.viewImg){
      this.setState({viewImg:false,visibility: 'hidden'})
    }
}


componentWillMount(){
  console.log('concepto'+ this.props.concepto);
  this.props.currentAlbumId(this.props.concepto);
}

   render(){
     const{
       concepto,
       visibility,
       idItem,

     }=this.state;
     console.log(this.props)
     const hola=["jj",1,3,8];

       const its=hola;
       const regis = its.map((it,i)=>(
         <div key={i}>{it}</div>
       ));




     return (
       <Fragment>
       <App/>
       <div className="body">
       <div className="Galeria">
         <p>{concepto}</p>
         <div style={visibility} className="contenedor-img">
           <div style={visibility} className="img-view">
             <Image src={idItem}  thumbnail></Image>
             <div>
               <button onClick={this.handleClick} className="img-close">X</button>
             </div>
           </div>
           {regis}
        </div>
        </div>
        </div>
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
