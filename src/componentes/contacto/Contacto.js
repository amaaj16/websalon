import React, { Component, Fragment } from 'react';
import Page from './page.js';
import App from '../header/App.js'
class Contacto extends Component{
  render() {
    return(
      <Fragment>
      <App/>
      <div className="body">
      <Page/>
      </div>
      </Fragment>
    )
  }
}
export default Contacto;
