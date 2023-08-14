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

export default createElement;
