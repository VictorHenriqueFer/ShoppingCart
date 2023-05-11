export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = (query) => {
  if (!query) {
    return Promise.reject(new Error('Termo de busca não informado'));
  }
};
