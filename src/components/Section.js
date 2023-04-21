export default class Section {
    constructor(renderer, container) {
        this._renderer = renderer;
        this._container = container;
    }

    setItem(element) {
        this._container.prepend(element);
    }

    renderItems(items) {
        items.reverse().forEach((item) => {
            this._renderer(item);
        });
    }
}