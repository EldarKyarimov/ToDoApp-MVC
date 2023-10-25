export default class View {
    constructor() {
        this.input = document.querySelector('#myInput');
        this.addBtn = document.querySelector('#addBtn');
        this.ul = document.querySelector('#myUl');
        this.dltUl = document.querySelector('#dltUl');
    }

    hookAddButton(callback) {
        this.addBtn.addEventListener('click', () => {
            callback(this.input.value);

            this.input.value = "";
        })
    }
    // basic view Task's
    drawTodo(todo, callback) {
        const li = document.createElement('li');
        li.id = todo.id;
        li.innerText = todo.value;
        // checked 
        li.addEventListener('dblclick',
            function () {
                li.classList = 'checked';
            }
        )

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

    // down view Deleted Task's
    deletedTodos(todo) {
        const li = document.querySelector('li');
        li.id = todo.id;
        li.innerText = todo.value;
        this.dltUl.appendChild(li);
    }

    updateTodos(todos, callback) {
        this.ul.innerText = '';
        this.dltUl.innerText = '';
        todos.forEach((todo) => {
            this.drawTodo(todo, callback);
        })
    }

}


     // if (todo.deleted == true) {
        //     const li = document.createElement('li');
        //     li.id = todo.id;
        //     li.innerText = todo.value;
        //     this.dltUl.appendChild(li);
        // }


    // deletedTodo(todo) {
    //     const li = document.querySelector('li');
    //     li.id = todo.id;
    //     li.innerText = todo.value;
    //     console.log(li);
    //     this.dltUl.appendChild(li);
    // }

    // updateTodos(todos, callback) {
    //     this.ul.innerText = '';
    //     todos.forEach(todo => {
    //         this.drawTodo(todo, callback);
    //     });
    // }