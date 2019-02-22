import React, { Component, } from 'react';
import {Container,Image} from 'react-bootstrap';
import descarga from './assets/descarga.png';
import Salon from './assets/Salon.jpg'
import "./Galeria.css";
class Galeria extends Component{
  constructor(props){
    super(props);
    this.state={
      concepto:props.concepto,
      items:[descarga,Salon,descarga,Salon,descarga,Salon,Salon,descarga,Salon,Salon],
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
   render(){
     const handleClick = this.handleClick;

     function ItemsGaleria(props){
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
       <div className="Galeria">
         <p>{this.state.concepto}</p>
         <div style={this.state} className="contenedor-img">
           <div style={this.state} className="img-view">
             <Image src={this.state.idItem}  thumbnail></Image>
           <div><button onClick={this.handleClick} className="img-close">X</button></div>
         </div>
          </div>

              <ItemsGaleria itemsS={this.state.items}/>


     </div>
   )
   }
}
export default Galeria;
