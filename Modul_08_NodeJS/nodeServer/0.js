// const http = require('http');  // commonJS
import http from 'http'; // ES-Modules

const server = http.createServer();
server.listen(8000, () => console.log('Server is running on port: 8000'));
