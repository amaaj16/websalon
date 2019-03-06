export const type = 'currentPaquetesId';

const currentPaquetesId = id => {
  return {
    type,
    payload:id
  };
}

export default currentPaquetesId  ;
