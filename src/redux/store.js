import {createStore,combineReducers} from 'redux';
import album from './reducers/album.js';
import Paquetes from './reducers/paquetes.js';
import selectAlbum from './reducers/selectAlbum.js';
import selectPaquete from './reducers/selectpaquete.js';
const reducer = combineReducers({
  album,
  Paquetes,
  selectAlbum,
  selectPaquete,
});

const store = createStore(reducer);



export default store;
