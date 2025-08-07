import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";

// Set up the Google GenAI chat model
const model = new ChatGoogleGenerativeAI({
  modelName: "gemini-2.0-flash", // or another available model
  // Optionally, you can set apiKey here or use environment variable GOOGLE_API_KEY
});

// Prompt template focused on water-related queries
const prompt = ChatPromptTemplate.fromMessages([
  ["system", "You are a helpful assistant that only answers questions related to water (e.g., water conservation, water cycle, water pollution, water in daily life, etc.). If the question is not about water, politely refuse to answer. Respond in around 70-80 words only."],
  ["human", "{input}"]
]);

// Create a chain that combines the prompt and the model
const chain = RunnableSequence.from([
  {
    input:(input) => input
  },
  prompt,
  model,
  new StringOutputParser()
]);

/**
 * Responds to a user query with a water-related answer using Google GenAI via LangChain.
 * @param {string} userInput - The user's question.
 * @returns {Promise<string>} - The model's response.
 */
export async function getWaterRelatedResponse(userInput) {
  const response = await chain.invoke({ input: userInput });
  console.log("response:", response);
  return response;
}
