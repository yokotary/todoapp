//IDを管理する変数
let todoIdx = 0;

export class todoItemModel {
   /**
     * @param {string} title Todoアイテムのタイトル
     * @param {boolean} completed Todoアイテムが完了済みならばtrue、そうでない場合はfalse
     */

   constructor({title, completed}) {
     this.id = todoIdx++;
     this.title = title;
     this.completed = completed;
   }
}