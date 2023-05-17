import { createCustomElement } from './shopFunctions';

export const loadingOn = () => {
  const message = createCustomElement('h1', 'loading', 'carregando...');
  document.querySelector('.products').appendChild(message);
};

export const loadingOff = () => {
  const loadingElement = document.querySelector('.loading');
  if (loadingElement) {
    loadingElement.remove();
  }
};
