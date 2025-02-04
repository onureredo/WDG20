import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const port = process.env.PORT || 8000;

const client = new MongoClient(process.env.MONGO_URI);
const Movies = client.db('sample_mflix').collection('movies');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'Running' });
});

app.get('/movies', async (req, res, next) => {
  try {
    const data = await Movies.find().skip(123).limit(15).toArray();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.get('/movies/:id', async (req, res, next) => {
  const { id } = req.params;
  const objectId = ObjectId.createFromHexString(id);
  try {
    const data = await client.db('sample_mflix').collection('movies').findOne(objectId);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.post('/movies', async (req, res, next) => {
  try {
    const data = await client.db('sample_mflix').collection('movies').insertOne(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.put('/movies/:id', async (req, res, next) => {
  const { id } = req.params;
  const objectId = ObjectId.createFromHexString(id);
  try {
    const data = await client
      .db('sample_mflix')
      .collection('movies')
      .findOneAndUpdate({ _id: objectId }, { $set: { title: req.body.title } }, { returnDocument: 'after' });
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.delete('/movies/:id', async (req, res, next) => {
  const { id } = req.params;
  const objectId = ObjectId.createFromHexString(id);
  try {
    const data = await client.db('sample_mflix').collection('movies').findOneAndDelete({ _id: objectId });
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ msg: err.message });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
