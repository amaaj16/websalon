import {type as findPaquetes} from '../actions/findPaquetes.js';
import paquetes from '../../modeloPaquetes.js';
const defaultState= paquetes;

function reducer (state = defaultState, {type}){
  switch (type) {
    case findPaquetes:
      return paquetes;
    default:
      return state;

  }
}

export default reducer;
