import { createElement } from '../utils';
import './home.css';
import imageFile from './chef.png';

const home = () => {
    const text = ['Welcome to Arepa Bistro, where every bite tells a story of flavor, culture, and community.',
    'Our mouthwatering arepas are made with the finest ingredients and a passion for sharing the tastes of Venezuela with the world.'];

    const home = createElement('div', 'home');
    const textContainer = createElement('div', 'text-container');
    const textOne = createElement('div', 'text-1', text[0]);
    const textTwo = createElement('div', 'text-2', text[1]);
    const image = createElement('img', 'image', null, imageFile);

    textContainer.append(textOne, textTwo);
    home.append(textContainer, image);

    return home;
};

export default home;
