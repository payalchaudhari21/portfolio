import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send } from 'lucide-react';

const presetQuestions = [
  "Who are you?",
  "Projects",
  "Skills",
  "Internships?"
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Payal's AI assistant. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handlePresetClick = (question) => {
    // Add user question
    setMessages(prev => [...prev, { text: question, isBot: false }]);
    
    // Simulate AI response
    setTimeout(() => {
      let reply = "I'm still learning, but you can email Payal directly for that!";
      if (question === "Who are you?") reply = "I am an AI assistant here to help you navigate Payal's portfolio.";
      if (question === "Projects") reply = "Payal has built a Deepfake Detection System, EventHub, and a Campus Issue Reporter.";
      if (question === "Skills") reply = "Payal's core skills include Python, React, Deep Learning, and Full Stack Development.";
      if (question === "Internships?") reply = "Yes, Payal is actively looking for new opportunities and internships!";
      
      setMessages(prev => [...prev, { text: reply, isBot: true }]);
    }, 800);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user question
    setMessages(prev => [...prev, { text: inputValue, isBot: false }]);
    setInputValue('');
    
    // Simulate AI response
    setTimeout(() => {
      const reply = "Thanks for your message! You can also contact Payal directly via email or the contact form.";
      setMessages(prev => [...prev, { text: reply, isBot: true }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-['Outfit']">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-80 glassmorphism bg-[#030305]/90 rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-[#00e0ff]/20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#00e0ff]/20 to-[#9d33ff]/20 p-4 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2 text-white font-bold">
                <Bot className="w-5 h-5 text-[#00e0ff]" /> AI Assistant
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 h-64 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div key={i} className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${msg.isBot ? 'bg-[#00e0ff]/10 text-white self-start rounded-tl-sm' : 'bg-[#9d33ff]/50 text-white self-end rounded-tr-sm'}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Presets */}
            <div className="p-3 bg-black/40 border-t border-white/5 flex gap-2 flex-wrap">
              {presetQuestions.map((q, i) => (
                <button 
                  key={i} 
                  onClick={() => handlePresetClick(q)}
                  className="px-3 py-1.5 text-xs text-[#00e0ff] bg-[#00e0ff]/10 border border-[#00e0ff]/20 rounded-full hover:bg-[#00e0ff]/20 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Field */}
            <form onSubmit={handleSend} className="p-3 border-t border-white/10 flex items-center gap-2 bg-[#030305]/95">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[#00e0ff] transition-colors"
              />
              <button
                type="submit"
                className="p-2 bg-[#00e0ff] text-black rounded-full hover:bg-white transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full glow-btn flex items-center justify-center text-white bg-[#00e0ff]/10 border-[#00e0ff] shadow-lg shadow-[#00e0ff]/20"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6 text-[#00e0ff]" />}
      </button>
    </div>
  );
};

export default ChatWidget;
