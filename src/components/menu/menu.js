import { createElement } from '../utils';
import './menu.css';
import reina from './reina.jpg';
import pelua from './pelua.jpg';
import domino from './domino.jpg';
import perico from './perico.jpg';
import llanera from './llanera.jpg';
import patapata from './patapata.jpg';

const menu = () => {
    const cards = {
        images: [reina, pelua, domino, perico, llanera, patapata],
        titles: ['Reina Pepiada', 'La pelúa', 'Dominó', 'Perico', 'Llanera', 'Patapata'],
        text: ['Arepa filled with shredded chicken, avocado, mayonnaise, and yellow cheese.',
               'Arepa filled with shredded beef, yellow cheese, and tomato sauce.',
               'Arepa filled with yellow cheese, ham, and bacon.',
               'Arepa filled with scrambled eggs, onion, tomato, and cilantro.',
               'Arepa filled with roast beef, yellow cheese, avocado, and tomato.',
               'Arepa filled with yellow cheese, onion, and tomato.'
              ]
    };

    const menu = createElement('div', 'menu');

    for (let index = 0; index < cards.images.length; index++) {
        const card = createElement('div', 'menu-card');
        const image = createElement('img', 'menu-image', null, cards.images[index]);
        const title = createElement('div', 'menu-title', cards.titles[index]);
        const text = createElement('div', 'menu-text', cards.text[index]);

        card.append(image, title, text);
        menu.append(card);
    }

    return menu;
};

export default menu;
