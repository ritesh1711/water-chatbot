import { serve } from '@hono/node-server';
import app from './server.js';
const cors = require('cors');

const port = 3000;

serve({
  fetch: app.fetch,
  port,
});

console.log(`Server running on http://localhost:${port}`);
