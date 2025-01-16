import { useState } from 'react';
import axios from 'axios';
import Message from './Message';
import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setTyping(true);

    try {
      const message = [
        ...messages
          .map((msg) => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text?.trim() || '',
          }))
          .filter((msg) => msg.content),
        { role: 'user', content: input.trim() },
      ];

      const response = await axios.post(
        'http://localhost:5050/api/v1/chat/completions',
        {
          // model: 'gpt-3.5-turbo',
          model: 'gpt-4o',
          messages: message,
        },
        {
          headers: {
            provider: 'open-ai',
            mode: 'production',
          },
        }
      );

      const botMessage = {
        sender: 'bot',
        text: response.data.message?.content || 'No response from the bot.',
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert(error.response?.data?.error || error.message);
    } finally {
      setTyping(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-zinc-900 text-white'>
      <h2 className='text-4xl text-center text-white font-bold pb-8'>
        🧑🏻‍💻 ASSISTANT
      </h2>
      <div className='w-full max-w-3xl bg-zinc-800 rounded-lg shadow-lg flex flex-col h-[85vh]'>
        <div className='flex-grow p-4 overflow-y-auto space-y-4'>
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender} text={msg.text} />
          ))}
          {typing && (
            <div className='flex justify-start'>
              <div className='bg-zinc-700 text-white px-4 py-2 rounded-lg'>
                <span>
                  <ThreeDots
                    visible={true}
                    height='24'
                    width='24'
                    color='#71717A'
                  />
                </span>
              </div>
            </div>
          )}
        </div>

        <div className='p-4 border-t border-zinc-700 flex items-center'>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            placeholder='Type your message...'
            className='flex-grow p-3 bg-zinc-900 text-white border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500'
          />
          <button
            onClick={handleSend}
            className='ml-4 px-4 py-2 bg-zinc-600 text-white rounded-lg hover:bg-zinc-700'
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
