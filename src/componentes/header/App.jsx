import React, { Component } from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import Loader from '../loader/Loader.jsx';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading : false
    }

  }


  componentDidMount(){
        changeState().then(()=>{
          this.setState({loading:true})
        });

  }

  render() {
      if(!this.state.loading){
        return(
          <Loader type="spin" color="#2196F3" />


        )
      }else {
        return (
        <div className="App">
          <div className="App-header">
          <Navbar  fixed="top" bg="light" className="bar-text" expand="md" >
            <Navbar.Brand href="home" className="title-nav"><p className="logotitle">El Quijote</p></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ">
                <Nav.Link href="home">Inicio</Nav.Link>
                <Nav.Link href="Galeria">Galeria</Nav.Link>
                <Nav.Link href="Paquetes">Servicios</Nav.Link>
                <Nav.Link href="Contacto">Contacto</Nav.Link>
                <Nav.Link href="Acerca">Nosotros</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
        </div>



      )
      }

  }
}

const changeState = () =>{
  return new Promise((resolve)=>{
    setTimeout(resolve,1000)
  })
}


export default App;
