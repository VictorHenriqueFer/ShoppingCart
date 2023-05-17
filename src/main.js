import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import { loadingOn, loadingOff } from './helpers/loading';
import './style.css';

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
      console.log(error);
    })
    .finally(() => {
      loadingOff();
    });
}
productList();

document.querySelector('.cep-button').addEventListener('click', searchCep);
