export default class Model {
    constructor() {
        this.todos = [];
    }

    addTodo(inputText) {
        const newTodo = {
            value: inputText,
            checked: false,
            deleted: false,
            id: Math.floor(Math.random() * 100),
        }
        this.todos.push(newTodo);

        // console.log(this.todos)
    }

    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => {
            console.log(todo, id);
            return todo.id != id
        });
    }

    // deleteTodo(id) {
    //     this.todos.forEach(todo => {
    //         console.log(todo, id);
    //         if (todo.id == id) todo.deleted = true
    //     });
    // }


    checkTodo() {

    }
}