import {type as findAlbum} from '../../redux/actions/findAlbum.js';
import albums from '../../modelo.js'
const defaultState= [];




function reducer (state = defaultState, {type}){
  switch (type) {
    case findAlbum :
    fetch('http://localhost:4000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    
  },
  mode: 'cors',
  body: JSON.stringify({query: "{ albums{ name} }"})
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
      return albums;
    default:
      return state;

  }
}

export default reducer;
