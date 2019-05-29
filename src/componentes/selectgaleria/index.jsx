import React, { Component,Fragment } from 'react';
import SelectGaleria from "./SelectGaleria.jsx";
import App from '../header/App.jsx';
import {connect} from 'react-redux';
import findAlbum from '../../redux/actions/findAlbum.js';
import {cliente} from '../../resolvers/resolver.js';
class Albums extends Component{
  constructor(props){
    super(props);
    this.state={

      visibility: 'visible',
      concepto:''
    }


  }

  componentWillMount(){
    const micliente = new cliente('POST');
    const query = micliente.query("{getAlbums{name,to,photo }}");
    
    console.log(query.toString());
    const request = micliente.enviar(query);
    request.then(data=>{
      console.log(data.data)
      this.props.findAlbum(data.data.getAlbums);
    });
     
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
