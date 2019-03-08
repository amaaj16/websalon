import {type as currentAlbumId} from '../../redux/actions/currentAlbumId.js';
import photos from '../../modeloImg.js'
const defaultState = [];

function reducer (state=defaultState,{type,payload}){
  switch (type) {
    case currentAlbumId:
      return photos;
    break;
    default:
      return state;

  }
}

export default reducer;
