import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_KEY,
  dangerouslyAllowBrowser: true, //process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export default openai;
