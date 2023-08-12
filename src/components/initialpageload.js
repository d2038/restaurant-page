import header from './header/header';
import home from './home/home';

const initialPageLoad = () => {
    const app = document.querySelector('#content');
    app.append(header(), home());
};

export default initialPageLoad;
