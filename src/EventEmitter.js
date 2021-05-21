export class EventEmitter {
  constructor() {
    // 登録する [イベント名, Set(リスナー関数)] を管理するMap
    this._listener = new Map();
  }
}

/**
 * 指定したイベントが実行されたときに呼び出されるリスナー関数を登録する
 * @param {string} type イベント名
 * @param {Function} listener イベントリスナー
 */
addEventListener(type, listener) {
  //指定したイベントに対応するSetterを作成しリスナー関数を登録
  if(!this._listener.has(type)) {
    this._listener.set(type, new Set());
  }
  const listenerSet = this._listener.get(type);
  listenerSet.add(listener);
}

 /**
     * 指定したイベントをディスパッチする
     * @param {string} type イベント名
     */
    emit(type) {
      //指定したイベントに対応するSetを取り出しすべてのリスナー関数を呼び出す
      const listenerSet = this._listener.get(type);
      if(!listenerSet) {
        return;
      }
      listenerSet.forEach(ownListener => {
        if(ownListener === listener) {
          listenerSet.delete(listener);
        }
      });
    }