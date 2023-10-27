export default class View {
    constructor() {
        this.input = document.querySelector('#myInput');
        this.addBtn = document.querySelector('#addBtn');
        this.upBtn = document.querySelector('#up');
        this.downBtn = document.querySelector('#down');
        this.ul = document.querySelector('#myUl');
        this.dltUl = document.querySelector('#dltUl');
    }

    hookAddButton(callback) {
        this.addBtn.addEventListener('click', () => {
            callback(this.input.value);

            this.input.value = '';
        })
    }

    // basic view Task's
    drawTodo(todo, callback, change) {
        const li = document.createElement('li');
        li.id = todo.id;
        li.innerText = todo.value;

        this.ul.appendChild(li);
        const dltButton = document.createElement('button');
        dltButton.innerHTML = 'X';
        dltButton.className = 'dltBtn';

        // todos display change  ===============================
        this.upBtn.addEventListener('click', () => {
            change(this.upBtn.id);
        });

        this.downBtn.addEventListener('click', () => {
            change(this.downBtn.id);
        });
        // =====================================================


        dltButton.addEventListener('click', () => {
            callback(dltButton.parentElement.id);
        });

        li.appendChild(dltButton);
    }

    // down view Deleted Task's
    deletedTodos(todo) {

        const li = document.createElement('li');
        li.innerText = todo.value;

        this.dltUl.appendChild(li);
    }

    updateTodos(todos, callback) {
        this.ul.innerText = '';
        this.dltUl.innerText = '';
        todos.forEach((todo) => {
            if (todo.deleted) {
                this.deletedTodos(todo, callback);
            } else this.drawTodo(todo, callback);
        })
    }



}
