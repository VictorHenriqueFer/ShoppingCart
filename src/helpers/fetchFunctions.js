export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  const endpoint = `https://api.mercadolibre.com/items/${id}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data);
};

export const fetchProductsList = async (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data.results);
};
