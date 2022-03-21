const http = require("http");
const EventEmitter = require("events");

module.exports = class App {
  constructor() {
    this.emitter = new EventEmitter();
    this.server = this._createServer();
  }

  _createServer() {
    return http.createServer((req, res) => {
      const emitted = this.emitter.emit(this._getRouteMask(req.path, res.method), req, res);
      if (!emitted) {
        res.end();
      }
    });
  }

  _getRouteMask(path, method) {
    return `[${path}]:[${method}]`;
  }

  addRouter(router) {
    Object.keys(router.endpoints).forEach(path => {
      const endpoint = router.endpoint[path];

      Object.keys(endpoint).forEach((method) => {
        const handler = endpoint[method];

        this.emitter.on(this._getRouteMask(path, method), (req, res) => {
          handler(req, res);
        });
      });
    })
  }

  listen(port, cb) {
    this.server.listen(port, cb);
  }
}