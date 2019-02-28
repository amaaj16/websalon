export const type = 'findAlbum';

const findAlbum = id => {
  return {
    type,
    payload:id
  };
}

export default findAlbum;
