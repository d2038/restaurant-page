import './preflight.css';
import './style.css';
import header from './components/header/header';
import home from './components/home/home';
import menu from './components/menu/menu';

const app = document.querySelector('#content');
app.appendChild(header());
app.appendChild(menu());
