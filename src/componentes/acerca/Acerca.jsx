import React, { Component,Fragment } from 'react';

import Page from './page.jsx';
import App from '../header/App.jsx'
class Acerca extends Component{
  render(){
    return(
      <Fragment>
      <App/>
      <div className="body">
      <Page/>
      </div>
      </Fragment>
    );

  }
}
export default Acerca;
