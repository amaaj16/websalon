import {type as currentAlbumId} from '../../redux/actions/currentAlbumId.js';
import photos from '../../modeloImg.js'
const defaultState = '';

function reducer (state=defaultState,{type,payload}){
  switch (type) {
    case currentAlbumId:
    console.log(payload);
    return photos;
    default:
      return state;

  }
}

export default reducer;
