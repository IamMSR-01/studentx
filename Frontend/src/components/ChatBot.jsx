import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/v1/chat", {
        messages: [...messages, userMessage],
      });

      const botMessage = {
        role: "assistant",
        content: res.data.message,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (err) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  // Function to format the bot's response
  const formatResponse = (content) => {
    const formattedContent = content.split("\n").map((line, index) => {
      // Detect headings (example: # Heading)
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <h2 key={index} className="text-2xl font-semibold mt-4 pb-2">
            {line.replace("**", "").trim()}
          </h2>
        );
      }
      if (line.startsWith("** ")) {
        return (
          <h2 key={index} className="text-xl font-semibold mt-4">
            {line.replace("** ", "").trim()}
          </h2>
        );
      }
      // Detect subheadings (example: ## Subheading)
      if (line.startsWith("** ")) {
        return (
          <h3 key={index} className="text-xl font-medium mt-2 text-white">
            {line.replace("** ", "").trim()}
          </h3>
        );
      }
      // Detect bullet points (example: - Item)
      if (line.startsWith(" ")) {
        return (
          <li key={index} className="ml-6 text-base list-disc">
            {line.replace("* ", "").trim()}
          </li>
        );
      }
      // Default text
      return (
        <p key={index} className="text-base">
          {line}
        </p>
      );
    });

    return <div>{formattedContent}</div>;
  };

  return (
    <div className="min-h-screen pt-30 bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto"> 
        <h2 className="text-3xl font-bold mb-4 text-cyan-400">
          AI Career Guidance ChatBot
        </h2>
        <div className="bg-gray-800 rounded-lg p-4 h-[500px] space-y-4 mb-4 overflow-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-md max-w-4xl ${
                msg.role === "user"
                  ? "bg-cyan-600 ml-auto text-white"
                  : "bg-yellow-500 text-black"
              }`}
            >
              <div className="font-semibold text-sm">
                {msg.role === "user" ? "You" : "AI"}:
              </div>
              <div>
                {msg.role === "assistant"
                  ? formatResponse(msg.content)
                  : msg.content}
              </div>
            </div>
          ))}
          {loading && <p className="text-sm text-gray-400">Typing...</p>}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask your career query..."
            className="flex-1 px-4 py-2 rounded-md border text-white bg-gray-700"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={sendMessage}
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
