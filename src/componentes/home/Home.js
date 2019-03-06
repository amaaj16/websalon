import React, { Component, Fragment } from 'react';
import Page from "./page.js";
import {connect} from 'react-redux';
import App from '../header/App.js';
import findAlbum from '../../redux/actions/findAlbum.js';
import store from '../../store.js';

class Home extends Component{

  render(){
    store.dispatch(findAlbum([{name:"alex",url:"tourl"}]))
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
    album :state.album,
    hola:"hellow"
  };
}

export default connect(mapStateToProps)(Home);
