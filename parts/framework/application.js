const http = require("http");
const EventEmitter = require("events");

module.exports = class App {
  constructor() {
    this.emitter = new EventEmitter();
    this.server = this._createServer();
    this.middlewares = [];
  }

  _createServer() {
    return http.createServer((req, res) => {
      let body = "";
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        if (body) {
          req.body = JSON.parse(body);
        }

        const emitted = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res);
        if (!emitted) {
          res.end();
        }
      });


    });
  }

  _getRouteMask(path, method) {
    return `[${path}]:[${method}]`;
  }

  addRouter(router) {
    Object.keys(router.endpoints).forEach(path => {
      const endpoint = router.endpoints[path];

      Object.keys(endpoint).forEach((method) => {
        this.emitter.on(this._getRouteMask(path, method), (req, res) => {
          const handler = endpoint[method];
          this.middlewares.forEach(middleware => middleware(req, res));
          handler(req, res);
        });
      });
    })
  }

  listen(port, cb) {
    this.server.listen(port, cb);
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }
}