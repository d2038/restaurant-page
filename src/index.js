import './preflight.css';
import './style.css';
import home from './components/home/home';
import menu from './components/menu/menu';
import contact from './components/contact/contact';
import initialPageLoad from './components/initialpageload';

initialPageLoad();

const app = document.querySelector('#content');
const tabs = {
    home: document.querySelector('.nav-home'),
    menu: document.querySelector('.nav-menu'),
    contact: document.querySelector('.nav-contact')
};

// Add event listeners to tabs
for (const tab in tabs) {
    if (Object.hasOwnProperty.call(tabs, tab)) {
        const element = tabs[tab];
        element.addEventListener('click', changeTab);
    }
}

function changeTab(event) {
    const currentTab = event.target;

    // Remove 'selected' class from all tabs
    for (const tab in tabs) {
        if (Object.hasOwnProperty.call(tabs, tab)) {
            const element = tabs[tab];
            element.classList.remove('selected');
        }
    }

    currentTab.classList.add('selected');

    app.removeChild(app.lastChild);
    const selection = currentTab.textContent.toLowerCase();

    switch (selection) {
        case 'home':
            app.append(home());
            break;
        case 'menu':
            app.append(menu());
            break;
        case 'contact':
            app.append(contact());
            break;
    }
}
