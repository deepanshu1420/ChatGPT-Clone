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
    return "Your current quota has expired. Please upgrade your account!";
  }
}

export default sendMessage;