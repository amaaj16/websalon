import {type as findAlbum} from '../../redux/actions/findAlbum.js';
import {allalbum} from '../../resolvers/resolver.js';
//import albums from '../../modelo.js';

const defaultState= [];




function reducer (state = defaultState, {type}){
  switch (type) {
    case findAlbum : 
      return allalbum;

    default:
      return state;

  }
}

export default reducer;
