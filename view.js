export default class View {
    constructor() {
        this.input = document.querySelector('#myInput');
        this.addBtn = document.querySelector('#addBtn');
        this.ul = document.querySelector('#myUl');
    }

    hookAddButton(callback) {
        this.addBtn.addEventListener('click', function () {
            callback(this.model.value);

            this.input.value = "";
        })
    }


    updateTodos(todos) {
        const li = document.createElement('li');
        li.innerText = todos.at(-1).value;

        this.ul.appendChild(li)
    }
}