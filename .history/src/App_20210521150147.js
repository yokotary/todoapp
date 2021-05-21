import { element } from "./view/html-util";

export class App {
    mount() {
        const formElement = document.querySelector('#js-form');
        const inputElement = document.querySelector('#js-form-input');
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count");
        //Todoアイテム数
        let todoItemCount = 0;
        formElement.addEventListener("submit", (event) => {
            //submitの本来の動作を止める
            event.preventDefault();
            console.log(`入力欄の値: ${inputElement.value}`);
            //追加するTodoアイテムの要素(li要素)を作成する
            const todoItemElement = element`<li>${inputElement.value}</li>`
        });
    }
}
