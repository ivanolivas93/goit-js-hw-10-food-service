import './styles.css';
import './changeTheme.js';
import menuItems from './templates/menu-items.hbs';
import menuPositions from '../menu.json';

// Шаблонизатор

let menu = document.querySelector('.js-menu');

function buildMenu(array) {
  const markup = array.map(post => menuItems(post)).join('');
  menu.insertAdjacentHTML('beforeend', markup);
}

buildMenu(menuPositions);
