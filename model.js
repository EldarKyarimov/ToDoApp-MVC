export default class Model {
    constructor() {
        this.todos = [];
        this.delTask = [];
    }

    addTodo(inputText) {
        const newTodo = {
            value: inputText,
            id: Math.floor(Math.random() * 100),
            // checked: false,
            deleted: false,
        }
        this.todos.push(newTodo);
        console.log(this.todos);
    }

    deleteTodo(id) {
        this.todos.forEach(todo => {
            // console.log(todo, id);
            if (todo.id == id) todo.deleted = true;
        });
        console.log(this.todos);
    }

}
