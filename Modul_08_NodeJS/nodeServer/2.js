import http from 'http';

const PORT = process.env.PORT || 8000;

const requestListener = function (req, res) {
  res.setHeader = ('Content-Type', 'text/plain');

  const url = req.url;

  if (url === '/') {
    res.statusCode = 418;
    res.end('Hello there!');
  } else if (url === '/data') {
    res.setHeader('Content-type', 'application/json');
    res.end(
      JSON.stringify({
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        rating: {
          rate: 3.9,
          count: 120,
        },
      })
    );
  } else if (url === '/test') {
    res.statusCode = 401;
    res.end('You are not allowed');
  } else {
    res.statusCode = 404;
    res.end('404 Not found');
  }
};

const server = http.createServer(requestListener);
server.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
