export default class Model {
    constructor() {
        this.todos = [];
    }

    addTodo(inputText) {
        const newTodo = {
            value: inputText,
            checked: false,
            deleted: false,
            todoId: Math.floor(Math.random() * 100),
        }
        this.todos.push(newTodo);

        console.log(this.todos)
    }

    deleteTodo() {

    }

    checkTodo() {

    }
}