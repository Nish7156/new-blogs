const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

export async function geminiPrompt(userInput: string) {
  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(userInput, {
      maxUnchangedPercentage: 97, // Adjust the percentage of unchanged content
      temperature: 0.5, // Adjust the temperature for creativity level
      maxRetries: 3 // Adjust the maximum number of retries
    });
    const response = await result.response;
    const text = response.text();
    console.log(text);
  } catch (error) {
    console.error("Error:", error);
  }
}
