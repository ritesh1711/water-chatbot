import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';


const app = new Hono();

// Enable CORS for frontend running at port 3001
app.use('*', cors());

app.get('/', (c) => c.text('Hello from Hono!'));
app.post('/chat', chatController);

export default app;
