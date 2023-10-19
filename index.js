import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';

function initialize() {
    const model = new Model();
    const view = new View();
    const controller = new Controller(view, model);

    controller.init();
}

window.addEventListener('DOMContentLoaded', initialize)
