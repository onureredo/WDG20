import { MongoClient, ObjectId } from 'mongodb';
const client = new MongoClient(process.env.MONGO_URI);

client
  .db('testdb')
  .collection('testCollection')
  .insertMany([{ test: 123 }, { title: 'Whatever' }]);
