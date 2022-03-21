const Emitter = require("events");

//  http
//  websocket
//  long polling
//  clusters
//  ...

const emitter = new Emitter();

emitter.on('message', (data, second, third) => {
  console.log(data);
  console.log(second);
  console.log(third);
});

const MESSAGE = 'Some message';

if (MESSAGE) {
  emitter.emit('message', MESSAGE, 123);
} else {
  emitter.emit('message', 'Error');
}


emitter.once('ask', (data, second, third) => {
  console.log(data);
  console.log(second);
  console.log(third);
});

emitter.emit('ask', 'one'); // 'one'
emitter.emit('ask', 'two'); // undefined
emitter.emit('ask', 'three'); // undefined
emitter.emit('ask', 'four'); // undefined

