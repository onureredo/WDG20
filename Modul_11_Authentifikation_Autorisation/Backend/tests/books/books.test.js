import { beforeAll, beforeEach, afterAll, describe, expect, test } from 'vitest';
import BookModel from '../../models/BookModel.js';
import request from 'supertest';
import app from '../../app.js';

describe('Books public API', () => {
  // Setup

  const testBooks = [
    {
      title: 'Ronja Räubertocher',
      author: 'Astrid Lindgren',
      year: 1981,
      description:
        "Ronia, the Robber's Daughter is a children's fantasy book by the Swedish author Astrid Lindgren, first published in 1981.",
      isbn: '3-7891-2940-2',
      publisher: 'Oetinger',
    },
    {
      title: 'The Lord of the Rings',
      author: 'J. R. R. Tolkien',
      year: 1954,
      description:
        "The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien. Set in Middle-earth, the story began as a sequel to Tolkien's 1937 children's book The Hobbit but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.",
      isbn: '9780261102385',
      publisher: 'HarperCollins',
    },
  ];

  beforeAll(async () => {
    await BookModel.insertMany(testBooks);
  });

  afterAll(async () => {
    await BookModel.deleteMany();
  });

  // Einzelnen Test Endpunkte
  describe('GET /books', () => {
    // arrange
    // act
    let res;

    beforeEach(async () => {
      res = await request(app).get('/books');
    });

    // assert
    test('Should return status code 200', () => {
      expect(res.status).toBe(200);
    });
    test('Should redur correct number of books', () => {
      expect(res.body.data.length).toBe(testBooks.length);
    });
  });

  describe('GET /books/:id', async () => {
    test('Should get first book', async () => {
      const allBooks = await request(app).get('/books');
      // console.log(allBooks.body);
      const firstBookID = allBooks.body.data[0]._id;

      const response = await request(app).get(`/books/${firstBookID}`);
      expect(response.status).toBe(200);
    });
  });
});
