import React, { Component,Fragment } from 'react';
import Page from './Page.jsx';
import App from '../header/App.jsx';
import {connect} from 'react-redux';
import findPaquetes from '../../redux/actions/findPaquetes.js';
class Paquetes extends Component{
  constructor(props){
    super(props);
    this.state={
      concepto:''
    }
  };
  componentWillMount(){
      this.props.findPaquetes();
  }
  render(){
    console.log(this.props);
    const {paquetes} = this.props;
    return(
      <Fragment>
      <App/>
      <div className="body">
      <Page paquetes={paquetes}/>
      </div>
      </Fragment>
    )

  }
}
const mapDispatchToProps ={
  findPaquetes
};

const mapStateToProps = (state) =>{
  return {
    paquetes:state.paquetes,
    hola:"hello"
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Paquetes);
