import {type as findAlbum} from '../../redux/actions/findAlbum.js';
import albums from '../../modelo.js'

const defaultState= [];

const query ={
    query:{
      albums:{
        to:'',
        photo:''
      }
    },
  };

function reducer (state = defaultState, {type}){
  switch (type) {
    case findAlbum :
    fetch('https://us-central1-backend-90c8e.cloudfunctions.net/api/graphql', {
  method: 'get',
  body: query
})
.then(response => console.log(response.json()))
      return albums;
    default:
      return state;

  }
}

export default reducer;
