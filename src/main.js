import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement, createCustomElement,
  createCartProductElement } from './helpers/shopFunctions';
import { loadingOn, loadingOff } from './helpers/loading';
import './style.css';
import { getSavedCartIDs } from './helpers/cartFunctions';

const products = document.querySelector('.products');

function productList() {
  loadingOn();
  fetchProductsList('computador')
    .then((fetchProducts) => {
      fetchProducts.forEach((product) => {
        products.appendChild(createProductElement(product));
      });
    })
    .catch((error) => {
      const erro = createCustomElement(
        'h1',
        'error',
        'Algum erro ocorreu, recarregue a página e tente novamente',
      );
      document.querySelector('.products').appendChild(erro);
    })
    .finally(() => {
      loadingOff();
    });
}
async function productsCart() {
  const cart = document.querySelector('.cart__products');
  const ids = getSavedCartIDs();
  if (ids.length > 0) {
    const promises = ids.map((id) => fetchProduct(id));
    const result = await Promise.all(promises);
    result.forEach((product) => {
      cart.appendChild(createCartProductElement(product));
    });
  }
}

productList();
productsCart();

document.querySelector('.cep-button').addEventListener('click', searchCep);
