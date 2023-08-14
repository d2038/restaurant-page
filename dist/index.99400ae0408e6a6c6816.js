"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([[826],{

/***/ 805:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./src/components/utils.js
const createElement = (type, classList, text, image) => {
    const element = document.createElement(type);

    if (Array.isArray(classList)) {
        classList.forEach(className => {
            element.classList.add(className);
        });
    } else if (classList) {
        element.classList.add(classList);
    }

    if (text) {
        element.textContent = text;
    }

    if (image) {
        element.src = image;
    }

    return element;
};

/* harmony default export */ const utils = (createElement);

;// CONCATENATED MODULE: ./src/components/home/chef.png
const chef_namespaceObject = __webpack_require__.p + "717f7630405ab6bfbe22.png";
;// CONCATENATED MODULE: ./src/components/home/home.js




const home = () => {
    const text = ['Welcome to Arepa Bistro, where every bite tells a story of flavor, culture, and community.',
    'Our mouthwatering arepas are made with the finest ingredients and a passion for sharing the tastes of Venezuela with the world.'];

    const home = utils('div', 'home');
    const textContainer = utils('div', 'text-container');
    const textOne = utils('div', 'text-1', text[0]);
    const textTwo = utils('div', 'text-2', text[1]);
    const image = utils('img', 'home-image', null, chef_namespaceObject);

    textContainer.append(textOne, textTwo);
    home.append(textContainer, image);

    return home;
};

/* harmony default export */ const home_home = (home);

;// CONCATENATED MODULE: ./src/components/menu/reina.jpg
const reina_namespaceObject = __webpack_require__.p + "ed5b3ada95d2c9903160.jpg";
;// CONCATENATED MODULE: ./src/components/menu/pelua.jpg
const pelua_namespaceObject = __webpack_require__.p + "a54bc6570812409da075.jpg";
;// CONCATENATED MODULE: ./src/components/menu/domino.jpg
const domino_namespaceObject = __webpack_require__.p + "5fa303361b203bc27ad4.jpg";
;// CONCATENATED MODULE: ./src/components/menu/perico.jpg
const perico_namespaceObject = __webpack_require__.p + "c1ac161cafdff447906f.jpg";
;// CONCATENATED MODULE: ./src/components/menu/llanera.jpg
const llanera_namespaceObject = __webpack_require__.p + "c62c1074f7d4bbb3f178.jpg";
;// CONCATENATED MODULE: ./src/components/menu/patapata.jpg
const patapata_namespaceObject = __webpack_require__.p + "44f005cdb0b595eabbae.jpg";
;// CONCATENATED MODULE: ./src/components/menu/menu.js









const menu = () => {
    const cards = {
        images: [reina_namespaceObject, pelua_namespaceObject, domino_namespaceObject, perico_namespaceObject, llanera_namespaceObject, patapata_namespaceObject],
        titles: ['Reina Pepiada', 'La pelúa', 'Dominó', 'Perico', 'Llanera', 'Patapata'],
        text: ['Arepa filled with shredded chicken, avocado, mayonnaise, and yellow cheese.',
               'Arepa filled with shredded beef, yellow cheese, and tomato sauce.',
               'Arepa filled with yellow cheese, ham, and bacon.',
               'Arepa filled with scrambled eggs, onion, tomato, and cilantro.',
               'Arepa filled with roast beef, yellow cheese, avocado, and tomato.',
               'Arepa filled with yellow cheese, onion, and tomato.'
              ]
    };

    const menu = utils('div', 'menu');

    for (let index = 0; index < cards.images.length; index++) {
        const card = utils('div', 'menu-card');
        const image = utils('img', 'menu-image', null, cards.images[index]);
        const title = utils('div', 'menu-title', cards.titles[index]);
        const text = utils('div', 'menu-text', cards.text[index]);

        card.append(image, title, text);
        menu.append(card);
    }

    return menu;
};

/* harmony default export */ const menu_menu = (menu);

;// CONCATENATED MODULE: ./src/components/contact/map.png
const map_namespaceObject = __webpack_require__.p + "3c54573021c1cb85c228.png";
;// CONCATENATED MODULE: ./src/components/contact/phone.png
const phone_namespaceObject = __webpack_require__.p + "693fed2e79cb2bc222f9.png";
;// CONCATENATED MODULE: ./src/components/contact/address.png
const address_namespaceObject = __webpack_require__.p + "a56a698fed726247c7f7.png";
;// CONCATENATED MODULE: ./src/components/contact/contact.js






const contact = () => {
    const text = ['(617) 421-6658',
    '51 Deepwood Pkwy, Phoenix, Arizona, 57521'];

    const contact = utils('div', 'contact');
    const phoneContainer = utils('div', 'contact-phone');
    const phoneImg = utils('img', 'contact-phone-image', null, phone_namespaceObject);
    const phoneText = utils('div', 'contact-phone-text', text[0]);
    const addressContainer = utils('div', 'contact-address');
    const addressImg = utils('img', 'contact-address-image', null, address_namespaceObject);
    const addressText = utils('div', 'contact-address-text', text[1]);
    const map = utils('img', 'contact-map', null, map_namespaceObject);

    phoneContainer.append(phoneImg, phoneText);
    addressContainer.append(addressImg, addressText);
    contact.append(phoneContainer, addressContainer, map);

    return contact;
};

/* harmony default export */ const contact_contact = (contact);

;// CONCATENATED MODULE: ./src/components/header/header.js



const header = () => {
    const header = utils('div', 'header');
    const headerTitle = utils('div', 'header-title', 'Arepa Bistro');
    const headerNav = utils('div', 'header-nav');
    const navHome = utils('div', ['nav-home', 'selected', 'header-btn'], 'Home');
    const navMenu = utils('div', ['nav-menu', 'header-btn'], 'Menu');
    const navContact = utils('div', ['nav-contact', 'header-btn'], 'Contact');

    headerNav.append(navHome, navMenu, navContact);
    header.append(headerTitle, headerNav);

    return header;
};

/* harmony default export */ const header_header = (header);

;// CONCATENATED MODULE: ./src/components/initialpageload.js



const initialPageLoad = () => {
    const app = document.querySelector('#content');
    app.append(header_header(), home_home());
};

/* harmony default export */ const initialpageload = (initialPageLoad);

;// CONCATENATED MODULE: ./src/index.js







initialpageload();

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
            app.append(home_home());
            break;
        case 'menu':
            app.append(menu_menu());
            break;
        case 'contact':
            app.append(contact_contact());
            break;
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(805));
/******/ }
]);
//# sourceMappingURL=index.99400ae0408e6a6c6816.js.map