import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import errorHandler from './utils/errorHandler.js';
import ErrorResponse from './utils/ErrorResponse.js';

import userRouter from './routes/userRouter.js';
import bookRouter from './routes/bookRouter.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cookieParser());

app.use('/users', userRouter);
app.use('/books', bookRouter);

app.use('*', (req, res, next) => {
  next(new ErrorResponse(`Cannot find ${req.originalUrl}`, 404));
});

app.use(errorHandler);

export default app;
