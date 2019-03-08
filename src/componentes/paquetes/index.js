import React, { Component,Fragment } from 'react';
import Page from './Page.js';
import App from '../header/App.js';
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
    const {paquete} = this.props;
    return(
      <Fragment>
      <App/>
      <div className="body">
      <Page {...paquete}/>
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
    paquete:state.paquetes,
    hola:"hello"
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Paquetes);
