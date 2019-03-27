import {type as findAlbum} from '../../redux/actions/findAlbum.js';

//import albums from '../../modelo.js';

const defaultState= [];




function reducer (state = defaultState, {type,payload}){
  switch (type) {
    case findAlbum : 
      return payload;
    default:
      return state;

  }
}

export default reducer;
