const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');
const User = require('../src/models/User');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await User.deleteMany({});
  await mongoose.disconnect();
});

describe('Auth API', () => {
  it('should register a user', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'TestPassword123',
      });

    console.log(res.body);
    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toBe('User created successfully');
  });

  it('should login and return a JWT', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',  
        password: 'TestPassword123', 
      });

    console.log(res.body);
    expect(res.statusCode).toEqual(200);
    expect(res.body.token).toBeDefined();
  });
});
