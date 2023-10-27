export default class Model {
    constructor() {
        this.todos = [];
    }

    addTodo(inputText) {
        const newTodo = {
            value: inputText,
            id: Math.floor(Math.random() * 100),
            // checked: false,
            deleted: false,
            date: Date.now(),

        }
        this.todos.push(newTodo);
    }

    deleteTodo(id) {
        this.todos.forEach(todo => {
            // console.log(todo, id);
            if (todo.id == id) todo.deleted = true;
        });
    }

    displayChange(id) {
        if (id == 'up') {
            this.todos.sort((a, b) => a.date - b.date);
            console.log("up");
        } else if ('down') {
            this.todos.sort((a, b) => b.date - a.date);
            console.log("down");
        } else console.log('error');
    }

}
