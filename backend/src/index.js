require('dotenv').config({ path: '.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO: use middleware to handle cookies
// TODO: use middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
