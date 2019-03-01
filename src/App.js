import React, { Component } from 'react';
import { Navbar,Nav,Image} from 'react-bootstrap';
import Routing from './Routing.js';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import logo1 from './assets/logo1.jpg';
import Home from './Home.js';
import store from './redux/store.js'
//import {Provider} from 'react-redux';
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


        <div className="App">
          <div className="App-header">
          <Navbar  fixed="top" bg="dark" variant="dark" expand="md" >
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
          <div className="App-body">
            <Provider store={store}>
              <Router>
            <Switch>

              <Redirect from="/" to="/home"  exact/>
              <Routing/>
            </Switch>
            </Router>
            </Provider>
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
const Home_page = ({match}) => (
  <Home/>
)

export default App;
