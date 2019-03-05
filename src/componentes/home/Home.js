import React, { Component, Fragment } from 'react';
import Page from "./page.js";
import {connect} from 'react-redux';
import App from '../header/App.js'
class Home extends Component{
  render(){

    const {album} = this.props;
    console.log(this.props);
    return (
      <Fragment>
      <App/>
      <Page/>
      </Fragment>
    );
  }

}
const mapStateToProps = (state) =>{
  return {
    album : state.album,
    hola:"hellow"
  };
}

export default connect(mapStateToProps)(Home);
