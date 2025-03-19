import React, { useState } from "react";
import axios from "axios";
import "./Css/ChatBot.css"; // Import the CSS file for styling the ChatBot
import Fuse from "fuse.js"; // Import fuse.js for fuzzy matching

function ChatBot({ user }) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]); // Store history of questions and answers
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Track visibility of ChatBot
  const [customQuestion, setCustomQuestion] = useState(false); // Track if user is entering their own question

  // Predefined questions and their answers
  const predefinedQuestions = {
    "What is Diwali?": "Diwali, also known as Deepavali, is a Hindu festival celebrated with lights, fireworks, and sweets. It marks the victory of light over darkness and good over evil.",
    "What is Holi?": "Holi is a vibrant Hindu festival known as the 'Festival of Colors.' Participants throw colored powders and water at each other, symbolizing the arrival of spring and the victory of good over evil.",
    "What is Pongal?": "Pongal is a South Indian harvest festival celebrated with cooking a special dish called 'Pongal' made from newly harvested rice. It is a time to express gratitude to nature and celebrate the harvest.",
    // Add more predefined questions and answers here
  };

  // Custom questions and answers related to the website
  const customQuestions = {
    "What is Param-Sanskrit?": "Param-Sanskrit is a website dedicated to showcasing the rich culture and heritage of India. It features sections on Indian festivals, historical places, folklores, games, and more.",
    "What games are available on Param-Sanskrit?": "Param-Sanskrit offers interactive games like 'Guess the Heritage Place', 'Match the Artifact', and cultural quizzes. These games help users learn about India's history and cultural artifacts in a fun and engaging way.",
    "Explore Indian states' culture and heritage is available in Param-Sanskrit": "You can explore the culture and heritage of various Indian states on our website. Each state is showcased with its unique traditions, historical sites, and cultural practices.",
    "Festivals and folklores of India": "Our website highlights major Indian festivals and folklores. You can learn about the significance, celebrations, and stories behind various festivals and traditional folklores of India.",
    "Write a blog about unknown and known heritage places of India": "You can write and publish blogs about both known and lesser-known heritage places of India. Share your knowledge and insights with our community through our blog section.",
    "Can I participate in cultural programs?": "Yes, you can participate in various cultural programs and events organized through our website. Stay tuned for announcements and opportunities to get involved in celebrating India's diverse culture.",
  };

  // Create a Fuse instance for fuzzy matching
  const fuseCustomQuestions = new Fuse(Object.keys(customQuestions), { threshold: 0.3 });
  const fusePredefinedQuestions = new Fuse(Object.keys(predefinedQuestions), { threshold: 0.3 });

  // Function to normalize text
  const normalizeText = (text) => text.toLowerCase().trim();

  // Function to find the best match for a question
  const findBestMatch = (question, questionsList) => {
    const normalizedQuestion = normalizeText(question);
    const result = questionsList.search(normalizedQuestion);
    return result.length > 0 ? result[0].item : null;
  };

  // Function to format the answer with the prefix
  const formatAnswer = (content) => `Thank you for asking me this question, I am Param-Sanskrit ChatBot. ${content}`;

  // Function to generate chatbot's response to user questions
  async function generateAnswer(askedQuestion) {
    const userQuestion = askedQuestion || question; // If askedQuestion is provided, use it; otherwise, use the state

    if (!userQuestion.trim()) {
      setAnswers([
        ...answers,
        {
          question: "No question provided",
          answer: formatAnswer("Please enter a question related to Indian culture, heritage, or the Param-Sanskrit website."),
        },
      ]);
      return;
    }

    setLoading(true);
    setAnswers([...answers, { question: userQuestion, answer: "Loading..." }]);

    let answer;

    // Check if the question matches any predefined questions
    const predefinedMatch = findBestMatch(userQuestion, fusePredefinedQuestions);
    if (predefinedMatch) {
      answer = formatAnswer(predefinedQuestions[predefinedMatch]);
    } else {
      // Check if the question matches any custom questions
      const customMatch = findBestMatch(userQuestion, fuseCustomQuestions);
      if (customMatch) {
        answer = formatAnswer(customQuestions[customMatch]);
      } else {
        // Fallback to API if the question is not in the custom or predefined list
        try {
          const response = await axios({
            url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAIp-L7QhAstvGenkCC6BkD3NKzMV2TOac",
            method: "post",
            data: {
              contents: [
                {
                  parts: [
                    {
                      text: `This ChatBot is created by Team Param-Sanskrit to answer questions specifically related to Indian culture and heritage: ${userQuestion}`,
                    },
                  ],
                },
              ],
            },
          });

          const result = response.data.candidates[0].content.parts[0].text;

          answer =
            result.toLowerCase().includes("indian") ||
            result.toLowerCase().includes("culture") ||
            result.toLowerCase().includes("heritage")
              ? formatAnswer(result)
              : formatAnswer("Sorry, I can only answer questions related to Indian culture and heritage.");
        } catch (error) {
          console.error("Error generating answer:", error);
          answer = formatAnswer("Sorry, there was an error processing your request.");
        }
      }
    }

    setAnswers((prevAnswers) => [
      ...prevAnswers.slice(0, prevAnswers.length - 1),
      { question: userQuestion, answer },
    ]);
    setQuestion("");
    setLoading(false);
  }

  // Function to handle predefined question selection
  const handlePredefinedQuestionClick = (selectedQuestion) => {
    if (selectedQuestion === "Others") {
      setCustomQuestion(true);
    } else {
      generateAnswer(selectedQuestion); // Directly pass the selected question to generateAnswer
    }
  };

  // Function to open the ChatBot and greet the user
  const handleOpen = () => {
    setIsVisible(true);
    setAnswers([
      {
        question: "Greeting",
        answer: formatAnswer(`Namaste ${user.name}! Welcome to the Param-Sanskrit ChatBot! This bot is designed to help you explore Indian culture and heritage through our website. You can ask me questions about our games, Indian festivals, historical places, artifacts, folklores, and more.`),
      },
    ]);
  };

  // Function to close the ChatBot and reset the conversation history
  const handleClose = () => {
    setIsVisible(false);
    setAnswers([]); // Reset the question and answer history
    setQuestion("");
    setCustomQuestion(false);
  };

  if (!user) return null; // Do not render if user is not logged in

  if (!isVisible)
    return (
      <button className="chatbot-open-button" onClick={handleOpen}>
        Open ChatBot
      </button>
    );

  return (
    <div className={`chatbot-container ${isVisible ? "open" : ""}`}>
      <div className="chatbot-header">
        <h2>Param-Sanskrit ChatBot</h2>
        <button className="chatbot-close-button" onClick={handleClose}>
          X
        </button>
      </div>
      <div className="chatbot-body">
        <div className="chatbot-messages">
          {answers.map((msg, index) => (
            <div key={index} className="chatbot-message">
              <div className="chatbot-question">Q: {msg.question}</div>
              <div className="chatbot-answer">A: {msg.answer}</div>
            </div>
          ))}
        </div>

        {!customQuestion && (
          <div className="predefined-questions">
            <h4>Select a question:</h4>
            {Object.keys(predefinedQuestions).map((q, index) => (
              <button
                key={index}
                className="predefined-question-button"
                onClick={() => handlePredefinedQuestionClick(q)}
              >
                {q}
              </button>
            ))}
            {Object.keys(customQuestions).length > 0 && (
              <button
                className="predefined-question-button"
                onClick={() => handlePredefinedQuestionClick("Others")}
              >
                Others
              </button>
            )}
          </div>
        )}

        {customQuestion && (
          <div className="custom-question-form">
            <h4>Enter your own question:</h4>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question here..."
            />
            <button onClick={() => generateAnswer()}>
              {loading ? "Loading..." : "Ask"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatBot;