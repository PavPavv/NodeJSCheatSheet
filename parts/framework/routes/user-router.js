const Router = require("../router");

const userRouter = new Router();

const users = [
  {
    id: 1,
    name: 'Mag',
  },
  {
    id: 2,
    name: 'Jack',
  },
];

userRouter.get('/users', (req, res) => {
  res.send(users);
});

userRouter.post('/users', (req, res) => {
  console.log(req.body);
  const user = req.body;
  users.push(user);
  res.send(users);
});

module.exports = userRouter;