export const type = 'findAlbum';

const findAlbum = albums => {
  return {
    type,
    payload:albums
  };
}

export default findAlbum;
