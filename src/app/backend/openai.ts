import axios from "axios";

export const handleSendMessage = async (inputText:any) => {
  // Trim input text
  inputText = inputText.trim();
  
  // Check if input is empty
  if (inputText === "") {
    console.log("Input text is empty.");
    return;
  }

  try {
    // Send request to OpenAI API
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: [
          { role: "user", content: inputText },
        ],
        model: "gpt-3.5-turbo", // Specify the model
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GPT_KEY}`,
        },
      }
    );

    // Extract AI response
    const aiResponse = response.data.choices[0].message.content;

    // Check if AI response contains code blocks using triple backticks
    const codeBlockRegex = /```javascript\n([\s\S]+?)\n```/;
    const matches = aiResponse.match(codeBlockRegex);

    if (matches && matches[1]) {
      const extractedQuery = matches[1];

      // Execute the database query
      try {
        console.log("Database Query Result:", extractedQuery);
        // Execute your Prisma query here
      } catch (error) {
        console.error("Error executing database query:", error);
      }
    } else {
      console.log("AI response does not contain a valid JavaScript code block.");
    }
  } catch (error) {
    console.error("Error sending message:", error);
  }
};


