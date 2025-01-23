import http from 'http';
import pg from 'pg';

const PORT = process.env.PORT || 8000;

const { Pool } = pg;

// console.log(process.env.DB_URI);

const pool = new Pool({ connectionString: process.env.DB_URI });

pool.connect((err) => {
  if (err) {
    console.log('Error connecting to neonDB', err.stack);
  } else {
    console.log('successfully connected to neonDBN');
  }
});

const requestListener = function (req, res) {
  res.writeHead(418);
  res.end('Hello, we will continue....');
};

const server = http.createServer(requestListener);
server.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
