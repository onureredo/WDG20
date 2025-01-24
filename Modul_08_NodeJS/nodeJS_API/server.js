import http from 'http';
import { usersRouter } from './routers/usersRouter.js';
// import pool from './db/index.js';

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  usersRouter(req, res);
});

server.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
