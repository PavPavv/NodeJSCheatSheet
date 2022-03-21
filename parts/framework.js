const http = require("http");
const EventEmitter = require("events");

const App = require("./framework/application");
const Router = require("./framework/router");

const app = new App();
const router = new Router();

router.get('/posts', (req, res) => {
  res.end('Some test');
});

app.listen('8000', () => {
  console.log(`Server is running on port 8000`);
});