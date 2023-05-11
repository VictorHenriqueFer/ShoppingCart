import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import { loandingOn, loandingOff } from './helpers/loanding';
import './style.css';

const products = document.querySelector('.products');

function productList() {
  loandingOn();
  fetchProductsList('computador')
    .then((fetchProducts) => {
      fetchProducts.forEach((product) => {
        products.appendChild(createProductElement(product));
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loandingOff();
    });
}
productList();

document.querySelector('.cep-button').addEventListener('click', searchCep);
