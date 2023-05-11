import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', () => {
    return fetchProductsList('computador')
    .then(() => {
      expect(fetch).toHaveBeenCalled();
    })

  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    return fetchProductsList('computador')
    .then(() => {
      expect(fetch).toBeCalledWith(url);
    })

  });

  // it('...', () => {
  // });
});
