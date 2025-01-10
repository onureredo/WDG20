const Message = ({ sender, text }) => {
  const isUser = sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] px-4 py-2 rounded-lg ${
          isUser ? 'bg-zinc-900 text-white' : 'bg-zinc-700 text-gray-200'
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
