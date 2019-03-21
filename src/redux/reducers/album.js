import {type as findAlbum} from '../../redux/actions/findAlbum.js';
import albums from '../../modelo.js'
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
const defaultState= [];

const client = new ApolloClient({
  uri: "localhost:4000"
});




function reducer (state = defaultState, {type}){
  switch (type) {
    case findAlbum :
      return albums;
    default:
      return state;

  }
}

export default reducer;
