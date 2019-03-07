export const type = 'currentAlbumId  ';

const currentAlbumId = id => {
  return {
    type,
    payload:id
  };
}

export default currentAlbumId  ;
