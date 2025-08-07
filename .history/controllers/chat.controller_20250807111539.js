import { getWaterRelatedResponse } from '../services/chat.service.js';


export async function chatController(c) {
  const { input } = await c.req.json();
  if (!input) {
    return c.json({ error: 'Missing input' }, 400);
  }
  console.log("input:", input);
  
  try {
    const response = await getWaterRelatedResponse(input);
    return c.json({ reply: response });
  } catch (err) {
    return c.json({ error: 'Failed to get response' }, 500);
  }
}