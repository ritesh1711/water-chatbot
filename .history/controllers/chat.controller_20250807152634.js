import { getWaterRelatedResponse } from '../services/chat.service.js';

export async function chatController(c) {
  try {
    const { input } = await c.req.json();

    if (!input) {
      return new Response(
        JSON.stringify({ error: 'Missing input' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log("input:", input);

    const response = await getWaterRelatedResponse(input);

    return new Response(
      JSON.stringify({ reply: response }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    console.error("Error in chatController:", err);

    return new Response(
      JSON.stringify({ error: 'Failed to get response', details: err.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
