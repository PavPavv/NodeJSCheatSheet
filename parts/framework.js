const App = require("./framework/application");
const usersRouter = require("./framework/routes/user-router");
const jsonParser = require("./framework/middleware/parseJson");

const app = new App();

app.use(jsonParser);

app.addRouter(usersRouter);

app.listen('8000', () => {
  console.log(`Server is running on port 8000`);
});