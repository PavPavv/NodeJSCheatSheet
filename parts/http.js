const http = require("http");

const PORT = process.env.PORT || 8000;

const server = http.createServer({

}, (req, res) => {
  // res.writeHead(200, {
  //   'Content-Type': 'text/html; charset=utf-8',
  // })
  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  // res.end('<h1>Православный сервер поднят</h1>');
  //  res.end(req.url)

  // if (req.url === '/users') {
  //   return res.end('<h2>Пользователи</h2>')
  // } else if (req.url === '/') {
  //   return res.end('<h2>Дом</h2>')
  // } else if (req.url === '/test') {
  //   return res.end('<ol><li>Тест 1</li><li>Тест 2</li><li>Тест 3</li></ol>')
  // }

  if (req.url === '/users') {
    return res.end(JSON.stringify([
      {
        "id": "1",
        "user": "Paul",
      },
      {
        "id": "2",
        "user": "Sveta",
      },
    ]))
  } else if (req.url === '/') {
    return res.end(JSON.stringify([
      {
        "home": "home",
      }
    ]))
  } else if (req.url === '/test') {
    return res.end(JSON.stringify([
      {
        "test": "test",
      }
    ]))
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on a ${PORT} port`);
});