require('dotenv').config();
jest.setTimeout(15000);

const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');
const User = require('../src/models/User');
const Book = require('../src/models/Book');
const jwt = require('jsonwebtoken');

describe('Books API', () => {
  let token;

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);

    const user = new User({
      username: 'booktester',
      email: 'book@test.com',
      password: 'password123'
    });
    await user.save();

    token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  });

  afterAll(async () => {
    await User.deleteMany({});
    await Book.deleteMany({});
    await mongoose.disconnect();
  });

  test('should create a new book', async () => {
    const res = await request(app)
      .post('/api/books')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Test Book',
        author: 'Test Author'
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toBe('Test Book');
  });

  test('should fetch all books', async () => {
    const res = await request(app)
      .get('/api/books')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
