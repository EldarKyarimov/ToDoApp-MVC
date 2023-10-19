export default class Model {
    constructor() {
        this.todos = [];
    }

    addTodo(inputText) {
        const newTodo = {
            value: inputText,
            cheked: false,
            deleted: false,
        }
        this.todos.push(newTodo);

        console.log(this.todos)
    }
}