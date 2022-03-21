module.exports = class Router {
  constructor() {
    this.endpoint = {}
  }

  request(method = "GET", path, handler) {
    if (!this.endpoint[path]) {
      this.endpoint[path] = {};
    }

    const endpoint = this.endpoint[path];

    if (endpoint[method]) {
      throw new Error(`[${method}] with path ${path} already exist`);
    }

    endpoint[method] = handler;
  }

  get(path, handler) {
    this.request("GET", path, handler);
  }

  post(path, handler) {
    this.request("POST", path, handler);
  }

  put(path, handler) {
    this.request("PUT", path, handler);
  }

  delete(path, handler) {
    this.request("DELETE", path, handler);
  }
};