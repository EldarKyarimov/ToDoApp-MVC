export default class View {
    constructor() {
        this.input = document.querySelector('#myInput');
        this.addBtn = document.querySelector('#addBtn');
        this.ul = document.querySelector('#myUl');
        this.todosContainer = document.querySelector('#todosContainer');
    }

    hookAddButton(callback) {
        this.addBtn.addEventListener('click', () => {
            callback(this.input.value);

            this.input.value = "";
        })
    }

    drawTodo(todo, callback) {
        const li = document.createElement('li');
        li.id = todo.id;
        li.innerText = todo.value;
        // checked 
        li.addEventListener('dblclick', function () {
            li.classList = 'checked';
        })
        this.ul.appendChild(li);

        // delete button
        const dltButton = document.createElement('button');
        dltButton.innerHTML = 'X';
        dltButton.className = 'dltBtn';

        dltButton.addEventListener('click', () => {
            callback(dltButton.parentElement.id);
        })

        li.appendChild(dltButton);
    }

    updateTodos(todos, callback) {
        this.ul.innerText = '';
        todos.forEach(todo => {
            this.drawTodo(todo, callback);
        });
    }


}
