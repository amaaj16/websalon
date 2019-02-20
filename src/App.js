import React, { Component } from 'react';
import { Navbar,Nav} from 'react-bootstrap';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home.js';
import Galeria from './Galeria.js';
import Paquetes from './Paquetes.js';
import Contacto from './Contacto.js';
import Acerca from './Acerca.js';
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
          <Switch>
          <Route path="/home" component={Home_page}/>
          <Route path="/Galeria" component={Galeria_page}/>
          <Route path="/Paquetes" component={Paquetes_page}/>
          <Route path="/Contacto" component={Contacto_page}/>
          <Route path="/Acerca" component={Acerca_page}/>
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

const Home_page = ({match}) => (
  <Home/>
)

const Galeria_page=({match}) =>(
  <Galeria/>
)

const Paquetes_page=({match}) =>(
  <Paquetes/>
)
const Contacto_page=({match}) =>(
  <Contacto/>
)
const Acerca_page=({match}) =>(
  <Acerca/>
)
export default App;
