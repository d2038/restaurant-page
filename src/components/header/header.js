import createElement from '../utils';
import './header.css';

const header = () => {
    const header = createElement('div', 'header');
    const headerTitle = createElement('div', 'header-title', 'Arepa Bistro');
    const headerNav = createElement('div', 'header-nav');
    const navHome = createElement('div', ['nav-home', 'selected', 'header-btn'], 'Home');
    const navMenu = createElement('div', ['nav-menu', 'header-btn'], 'Menu');
    const navContact = createElement('div', ['nav-contact', 'header-btn'], 'Contact');

    headerNav.append(navHome, navMenu, navContact);
    header.append(headerTitle, headerNav);

    return header;
};

export default header;
