export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  const endpoint = `https://api.mercadolibre.com/items/${id}`;
  return fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Não foi possível obter os dados do produto');
      }
      return response.json();
    })
    .then((data) => data);
};

export const fetchProductsList = async (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado');
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
