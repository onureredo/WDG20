import { beforeAll } from 'vitest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { afterAll } from 'vitest';

let mongod;

beforeAll(async () => {
  console.log('RUNNING');
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  await mongoose.connect(uri);
  // await mongoose.connect(process.env.MONGO_URI, {dbName: "testdb"})
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
});
