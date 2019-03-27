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
    fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        
        },
        mode: 'cors',
        body: JSON.stringify({query: "{ albums{ name, to, photo } }"})
        }).then(r => r.json())
        .then(data=>{
          console.log(data)
          this.props.findAlbum(data.data.albums);
        })
          
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
