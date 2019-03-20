import {type as findAlbum} from '../../redux/actions/findAlbum.js';
import albums from '../../modelo.js'

const defaultState= [];

function reducer (state = defaultState, {type}){
  switch (type) {
    case findAlbum :
      return albums;
    default:
      return state;

  }
}

export default reducer;
