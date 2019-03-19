import React,{Component}  from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import apiKey from '../../api-key.json';

export class MapContainer extends Component {
    constructor(props){
      super(props);
      this.state={
        selectedPlace : 'name'
      }
    }
    onMarkerClick(){

    }
    onInfoWindowClose(){

    }
  render() {
    const style = {
      width: '100%',
      height: '300px'
    }
    const initialCenter = {
      lat: 40.854885,
      lng: -88.081807

    }
    return (
      <Map google={this.props.google} initialCenter={initialCenter} style={style} zoom={14}>

        <Marker title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{lat: 37.778519, lng: -122.405640}}/>

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('apiKey')
})(MapContainer)
