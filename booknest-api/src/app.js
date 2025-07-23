const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./utils/logger');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/docs/swagger');
const app = express();

// Security middlewares
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());


app.use(
  morgan('combined', {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);


const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, 
  message: 'Too many login/signup attempts, please try again after 15 minutes',
});
app.use('/api/auth', authLimiter, require('./routes/authRoutes'));

// Book routes
app.use('/api/books', require('./routes/bookRoutes'));

// 404 route
app.use((req, res, next) => {
  logger.warn(`404 - ${req.originalUrl} - ${req.method}`);
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use(errorHandler);

module.exports = app;
