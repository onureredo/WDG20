import express from 'express';
import morgan from 'morgan';

import userRouter from './routers/users.js';
import postRouter from './routers/posts.js';

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

// app.use(myMiddleware);

app.use('/users', userRouter);

// app.use(morgan('dev'));
// app.use('/posts', morgan('dev'), postRouter);
app.use('/posts', postRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));

function myMiddleware(req, res, next) {
  console.log('Logging: ');
  console.log(req.method);
  console.log(req.url);
  if (req.method === 'PUT') {
    req.hello = 'Greetings';
  }

  if (req.method === 'DELETE') {
    res.status(403).json({ error: "You're not allowed to delete" });
  }

  next();
}
