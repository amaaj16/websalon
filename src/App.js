import React, { Component } from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import Routing from './Routing.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Loader from './Loader.js';

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
        <Router>
        <div className="App">
          <div className="App-header">
          <Navbar  fixed="top" bg="light" expand="md" >
            <Navbar.Brand href="home" className="title-nav">El Quijote</Navbar.Brand>
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
          <div className="App-body">
          <Switch >
          <Routing/>
          </Switch>
          </div>
        </div>

        </Router>
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
