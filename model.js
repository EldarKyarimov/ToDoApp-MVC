export default class Model {
    constructor() {
        this.todos = [];
        // this.delTask = [];
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
        console.log(this.todos);
    }

    deleteTodo(id) {
        this.todos.forEach(todo => {
            // console.log(todo, id);
            if (todo.id == id) todo.deleted = true;
        });
        console.log(this.todos);
    }

    displayChange(id) {
        if (id == 'up') {
            this.todos.sort((a, b) => a.date - b.date);
            console.log("down");
        } else if ('down') {
            this.todos.sort((a, b) => b.date - a.date);
            console.log("down");
        } else console.log('error');
    }

    // displayChange(id) {
    //     switch (id) {
    //         case 'up':
    //             this.todos.sort((a, b) => a.date - b.date);
    //             console.log("up");
    //             break;
    //         case 'down':
    //             this.todos.sort((a, b) => b.date - a.date);
    //             console.log("down");
    //             break;
    //         default:
    //             console.log('error');
    //     }
    // }

}
