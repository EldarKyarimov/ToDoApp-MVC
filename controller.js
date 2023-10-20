export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    init() {
        this.view.hookAddButton(this.createTodo.bind(this))
    }

    createTodo(value) {
        this.model.addTodo(value);

        this.view.updateTodos(this.model.todos);
    }
}