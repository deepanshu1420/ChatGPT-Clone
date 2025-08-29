import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_KEY,
  dangerouslyAllowBrowser: true
});

async function sendMessage(question) {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: question }],
      model: 'gpt-4o-mini',
    });
    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error("Error sending message:", error);
    return "Your ChatGPT API key has expired or reached its usage limit, Please update your key or check your OpenAI account quota to continue using the services.";
  }
}

export default sendMessage;