import React, { Component, Fragment } from 'react';
import Page from './page.jsx';
import App from '../header/App.jsx';
import MapContainer from '../map/MapContainer.jsx'
class Contacto extends Component{
  render() {
    return(
      <Fragment>
      <App/>
      <div className="body">
        <MapContainer/>
        <Page/>
      </div>
      </Fragment>
    )
  }
}
export default Contacto;
