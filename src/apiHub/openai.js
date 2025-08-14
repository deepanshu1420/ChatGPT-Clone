import OpenAI from 'openai';

/* The OpenAI client initialization is commented out to prevent API key exposure. to GitHub  */

/*

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_KEY,
    dangerouslyAllowBrowser: true
  });


*/  

async function sendMessage(question) {
  try {
    /* The API call is commented out. The function will now return a placeholder message. */

    /*
    
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: question }],
      model: 'gpt-4o-mini',
    });
    return chatCompletion.choices[0].message.content;
    
    */

    /* A placeholder response to allow the app to function without the API call. */
    return "The OpenAI API call has been temporarily disabled to protect the API key.";

  } catch (error) {
    console.error("Error sending message:", error);
    return "Your current quota has expired. Please upgrade your account!";
  }
}

export default sendMessage;