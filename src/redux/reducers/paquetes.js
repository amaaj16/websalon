import {type as findPaquetes} from '../actions/findPaquetes.js';
import paquetes from '../../modeloPaquetes.js';
const defaultState= [];

function reducer (state = defaultState, {type}){
  switch (type) {
    case findPaquetes:
      return paquetes;
    default:
      return state;

  }
}

export default reducer;
