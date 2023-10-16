export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    createNewLi() {
        this.li = document.createElement('li');
    }
}