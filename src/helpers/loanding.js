import { createCustomElement } from './shopFunctions';

export const loandingOn = () => {
  const message = createCustomElement('h1', 'loanding', 'carregando...');
  document.querySelector('.products').appendChild(message);
};

export const loandingOff = () => {
  const loandingElement = document.querySelector('loanding');
  if (loandingElement) {
    loandingElement.remove();
  }
};
