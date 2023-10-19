export default class View {
    constructor() {
        this.input = document.querySelector('#myInput');
        this.addBtn = document.querySelector('#addBtn');
        this.ul = document.querySelector('#myUl');
    }

    hookAddButton(callback) {
        this.addBtn.addEventListener('click', () => {
            callback(this.input.value);

            this.input.value = "";
        })
    }

    deleteButton() {
        const dltButton = document.createElement('button');
        dltButton.innerHTML = 'X';
        dltButton.className = 'dltBtn';
        this.li.appendChild(dltButton);
    }


    updateTodos(todos) {
        const li = document.createElement('li');
        li.innerText = todos.at(-1).value;

        this.ul.appendChild(li);
    }
}