import './header.css';

const header = (title) => {
    const header = createElement('div', 'header');
    const headerTitle = createElement('div', 'header-title', title);
    const headerNav = createElement('div', 'header-nav');
    const navHome = createElement('div', ['nav-home', 'selected'], 'Home');
    const navMenu = createElement('div', 'nav-menu', 'Menu');
    const navContact = createElement('div', 'nav-contact', 'Contact');

    headerNav.append(navHome, navMenu, navContact);
    header.append(headerTitle, headerNav);

    return header;
};

function createElement(type, classList, text) {
    const element = document.createElement(type);
    console.log(classList);

    if (Array.isArray(classList)) {
        classList.forEach(className => {
            element.classList.add(className);
        });
    }
    if (classList) {
        element.classList.add(classList);
    }
    if (text) {
        element.textContent = text;
    }
    return element;
}

export default header;
