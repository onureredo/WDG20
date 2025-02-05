import express from 'express';
import dbInit from './db/init.js';
import authorRouter from './routes/authorRoutes.js';
import blogPostRouter from './routes/blogPostRoutes.js';

const app = express();
const port = process.env.PORT || 8000;

// mongoose.connect(process.env.MONGO_URI, { dbName: 'wdg20' })
await dbInit();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'Running' });
});

app.use('/authors', authorRouter);
app.use('/blog', blogPostRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ msg: err.message });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
