export const type = 'findPaquetes';

const findPaquetes = (paquetes) => {
  return {
    type,
    payload:paquetes
  };
}

export default findPaquetes ;
