class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    emit(eventName, ...args) {
        const listeners = this.events[eventName];
        if (listeners) {
            listeners.forEach(listener => {
                listener(...args);
            });
        }
    }

    off(eventName, listenerToRemove) {
        const listeners = this.events[eventName];
        if (listeners) {
            this.events[eventName] = listeners.filter(listener => listener !== listenerToRemove);
        }
    }
}

module.exports = EventEmitter;
