require('dotenv').config();
const app = require('./src/app');
const logger = require('./src/utils/logger');
const connectDB = require('./src/config/db');

// Connect to DB
connectDB();

const PORT = process.env.PORT || 5000;
  
app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});
