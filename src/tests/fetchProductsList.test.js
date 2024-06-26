import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador')
    expect(fetch).toHaveBeenCalled()
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProductsList('computador')
      expect(fetch).toBeCalledWith(url);
    })
    
  it('Ao chamar a função fetchProductsList sem argumento, retorna uma mensagem de erro', async () => {
    try {
      await fetchProductsList()
    } catch (error) {
      expect(error.message).toBe('Termo de busca não informado');
    }
  });
});
