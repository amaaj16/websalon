import React, { Component,Fragment } from 'react';
import {Container,Image} from 'react-bootstrap';
import descarga from '../../assets/descarga.png';
import Salon from '../../assets/Salon.jpg';
import App from '../header/App.js';
import {connect} from 'react-redux';
import currentAlbumId from '../../redux/actions/currentAlbumId.js';
import "./Galeria.css";
class Galeria extends Component{
  constructor(props){
    super(props);
    this.state={
      concepto:props.concepto,
      items:[],
      viewImg:false,
      visibility: 'hidden',
      idItem: ''

    }
    this.handleClick = this.handleClick.bind(this);

  }

  componentWillMount(){
          this.props.currentAlbumId(this.state.concepto);
  }


  handleClick(id,e) {
    if (!this.state.viewImg) {
      this.setState({viewImg:true,visibility: 'visible',idItem:id})
    }
    if(this.state.viewImg){
      this.setState({viewImg:false,visibility: 'hidden'})
    }




  }
   render(){
     const handleClick = this.handleClick;
     const {allalbum} = this.props;
     console.log(allalbum);
     console.log(this.props);
     function ItemsGaleria(props){
      const {allalbum} = this.props;
      console.log(allalbum);
     const itemsImg = props.itemsS;
     const listImg = itemsImg.map((item,i)=>(
       <div className="responsive" key={i}>
         <div className="gallery" key={i}>
           <button  onClick={handleClick.bind(this, item)} className="btn-img" key={i} >
             <Image src={item}  key={i}></Image>
           </button>
         </div>
       </div>

     )
   )
   return (<Container>{listImg}</Container>);
 }
     return (
       <Fragment>
       <App/>
       <div className="body">
       <div className="Galeria">
         <p>{this.state.concepto}</p>
         <div style={this.state} className="contenedor-img">
           <div style={this.state} className="img-view">
             <Image src={this.state.idItem}  thumbnail></Image>
           <div><button onClick={this.handleClick} className="img-close">X</button></div>
         </div>
          </div>

              <ItemsGaleria itemsS={this.props.allalbum}/>


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
