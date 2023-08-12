import createElement from '../utils';
import './header.css';

const header = () => {
    const header = createElement('div', 'header');
    const headerTitle = createElement('div', 'header-title', 'Arepa Bistro');
    const headerNav = createElement('div', 'header-nav');
    const navHome = createElement('div', ['nav-home', 'selected'], 'Home');
    const navMenu = createElement('div', 'nav-menu', 'Menu');
    const navContact = createElement('div', 'nav-contact', 'Contact');

    headerNav.append(navHome, navMenu, navContact);
    header.append(headerTitle, headerNav);

    return header;
};

export default header;
