import http from 'http';

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.end(`
    <!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
      html {
        color-scheme: dark;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
    </style>

  </head>

  <body>
    <h1>Hello from Node.js</h1>
  </body>

  <script>console.log("JS is running")</script>

</html>
    `);
});

server.listen(8000, () => console.log('Server läuft auf port 8000'));
