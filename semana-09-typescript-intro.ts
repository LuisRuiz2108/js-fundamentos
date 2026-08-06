class EventEmitter {
  listeners: Map<string, Function[]>;

  constructor() {
    this.listeners = new Map();
  }

  on(eventName: string, callback: Function) {
    if (this.listeners.has(eventName)) {
      this.listeners.get(eventName)!.push(callback);
    } else {
      this.listeners.set(eventName, [callback]);
    }
  }

  emit(eventName: string, data: unknown) {
    if (this.listeners.has(eventName)) {
      const callbacks = this.listeners.get(eventName)!;
      for (const callback of callbacks) {
        callback(data);
      }
    }
  }
}

const emisor = new EventEmitter();

emisor.on('login', (data: unknown) => {
    if (typeof data === "string") {
        console.log(data)
    }
});

emisor.emit('login', 'Luis');