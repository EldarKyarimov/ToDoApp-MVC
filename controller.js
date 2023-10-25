export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    init() {
        this.view.hookAddButton(this.createTodo.bind(this));
    }

    createTodo(value) {
        this.model.addTodo(value);
        this.view.drawTodo(this.model.todos.at(-1), this.onDelete.bind(this));
    }

    onDelete(id) {
        this.model.deleteTodo(id);
        this.view.updateTodos(this.model.todos, this.onDelete.bind(this));
        console.log(this.model.todos);
        // this.view.deletedTodos(this.model.todos, this.onDelete.bind(this));
    }

}