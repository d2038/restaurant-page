import { createElement } from '../utils';
import './contact.css';
import mapImage from './map.png';
import phoneImage from './phone.png';
import addressImage from './address.png';

const contact = () => {
    const text = ['(617) 421-6658',
    '51 Deepwood Pkwy, Phoenix, Arizona, 57521'];

    const contact = createElement('div', 'contact');
    const phoneContainer = createElement('div', 'contact-phone');
    const phoneImg = createElement('img', 'contact-phone-image', null, phoneImage);
    const phoneText = createElement('div', 'contact-phone-text', text[0]);
    const addressContainer = createElement('div', 'contact-address');
    const addressImg = createElement('img', 'contact-address-image', null, addressImage);
    const addressText = createElement('div', 'contact-address-text', text[1]);
    const map = createElement('img', 'contact-map', null, mapImage);

    phoneContainer.append(phoneImg, phoneText);
    addressContainer.append(addressImg, addressText);
    contact.append(phoneContainer, addressContainer, map);

    return contact;
};

export default contact;
