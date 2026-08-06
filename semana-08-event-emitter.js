class EventEmitter {
    constructor() {
        this.listeners = new Map();
    }

    // Use the on method to register a callback for a specific event
    on(eventName, callback) {
        if (this.listeners.has(eventName)) {
            this.listeners.get(eventName).push(callback);
        } else {
            this.listeners.set(eventName, [callback]);
        }
    }

    // Use the emit method to trigger all callbacks associated with a specific event
    emit(eventName, data) {
        if (this.listeners.has(eventName)) {
            const callbacks = this.listeners.get(eventName);

            for (const callback of callbacks) {
                callback(data)
            }
        }
    }

    // Use the off method to remove a specific callback for a specific event
    off(eventName, callback) {
        if (this.listeners.has(eventName)) {
            const callbacks = this.listeners.get(eventName);
            const newCallbacks = callbacks.filter( cb => cb !== callback);
            this.listeners.set(eventName, newCallbacks);
        }
    }

    // Use the once method to register a callback that will be called only once for a specific event
    once( eventName, callback ) {
        const wrapper = ( data ) => {
            callback(data);
            this.off(eventName, wrapper);
        }

        this.on(eventName, wrapper);
    }
}