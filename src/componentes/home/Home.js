import React, { Component, Fragment } from 'react';
import Page from "./page.js";
import {connect} from 'react-redux';
import App from '../header/App.js';

import store from '../../redux/store.js';

class Home extends Component{

  render(){

    const {album} = this.props;
    console.log(this.props);
    return (
      <Fragment>
      <App/>
      <div className="body">
      <Page/>
      </div>
      </Fragment>
    );
  }

}
const mapStateToProps = (state) =>{
  return {
    hola:"hellow"
  };
}

export default connect(mapStateToProps)(Home);
