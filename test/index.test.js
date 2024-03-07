const assert = require('assert');
const EventEmitter = require('../src/EventEmitter');

describe('EventEmitter', () => {
    it('should emit events', () => {
        const emitter = new EventEmitter();
        let count = 0;
        const callback = () => {
            count++;
        };
        emitter.on('test', callback);
        emitter.emit('test');
        assert.strictEqual(count, 1);
    });

    it('should remove listeners', () => {
        const emitter = new EventEmitter();
        let count = 0;
        const callback = () => {
            count++;
        };
        emitter.on('test', callback);
        emitter.emit('test');
        assert.strictEqual(count, 1);
        emitter.off('test', callback);
        emitter.emit('test');
        assert.strictEqual(count, 1);
    });
});
