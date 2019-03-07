import React, { Component,Fragment } from 'react';
import SelectGaleria from "./SelectGaleria.js";
import App from '../header/App.js';
import currentAlbumId from '../../redux/actions/currentAlbumId.js';
import {connect} from 'react-redux';
import findAlbum from '../../redux/actions/findAlbum.js';
class Albums extends Component{
  constructor(props){
    super(props);
    this.state={

      visibility: 'visible',
      concepto:''
    }
    this.letClick= this.letClick.bind(this);

  }
  letClick(concepto){
    this.props.currentAlbumId(concepto);
  }

  componentWillMount(){
          this.props.findAlbum();
  }

  render() {
    const finAlbums = this.props.albums;
    const {concepto} = this.state;
    return(
        <Fragment>
        <App/>
        <div className="body">
        <SelectGaleria albums={finAlbums} letClick={this.letClick}  />
        </div>
        </Fragment>
    )
  }
}

const mapDispatchToProps ={
  findAlbum,
  currentAlbumId
};

const mapStateToProps = (state) =>{
  return {
    albums :state.album,
    hola:"hellow"
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Albums);
