export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (query) => {
  if (!query) {
    return new Error('Termo de busca não informado');
  }
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  return fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Não foi possível obter os dados');
      }
      return response.json();
    })
    .then((data) => data.results);
};
