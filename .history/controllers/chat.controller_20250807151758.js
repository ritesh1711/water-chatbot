import { getWaterRelatedResponse } from '../services/chat.service.js';

export async function chatController(c) {
  try {
    // Safely parse the request body
    const body = await c.req.json();
    const input = body?.input;

    if (!input || typeof input !== 'string') {
      return c.json({ error: 'Missing or invalid input' }, 400);
    }

    console.log("input:", input);

    const response = await getWaterRelatedResponse(input);

    console.log("response:", response);

    // Return the response in JSON format
    return c.json({ reply: response });

  } catch (err) {
    console.error("Error in chatController:", err);
    return c.json({ error: 'Failed to get response' }, 500);
  }
}
