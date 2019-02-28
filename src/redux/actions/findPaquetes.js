export const type = 'findPaquetes ';

const findPaquetes = id => {
  return {
    type,
    payload:id
  };
}

export default findPaquetes ;
