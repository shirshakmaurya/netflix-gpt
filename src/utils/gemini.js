import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINIAI_KEY);

const searchInGemini = async (query) => {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = query;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
};

export default searchInGemini;
