import findAlbum from '../../redux/actions/findAlbum.js';
const defaultState= [];

function reducer (state = defaultState, {type,payload}){
  switch (type) {
    case findAlbum :
      return Object.assign({},state,{payload})
    default:
      return state;

  }
}

export default reducer;
