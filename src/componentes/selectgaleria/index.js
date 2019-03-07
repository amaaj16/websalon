import React, { Component,Fragment } from 'react';
import SelectGaleria from "./SelectGaleria.js";
import App from '../header/App.js';
import {connect} from 'react-redux';
import findAlbum from '../../redux/actions/findAlbum.js';
class Albums extends Component{
  constructor(props){
    super(props);
    this.state={

      visibility: 'visible',
      concepto:''
    }


  }

  componentWillMount(){
          this.props.findAlbum();
  }

  render() {
    const finAlbums = this.props.albums;

    return(
        <Fragment>
        <App/>
        <div className="body">
        <SelectGaleria albums={finAlbums}/>
        </div>
        </Fragment>
    )
  }
}

const mapDispatchToProps ={
  findAlbum
};

const mapStateToProps = (state) =>{
  return {
    albums :state.album,
    hola:"hellow"
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Albums);
