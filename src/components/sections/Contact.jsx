import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, Code2 } from 'lucide-react';

const LinkedinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all fields before sending.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/payalchaudhari9209@gmail.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error("Failed to send with FormSubmit");
      }
    } catch (error) {
      console.error('FormSubmit Error:', error);
      setErrorMessage('Failed to send message. Please try again later.');
      setStatus('error');
    }
  };

  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6 text-[#00e0ff]" />,
      title: "Email",
      value: "payalchaudhari9209@gmail.com",
      link: "mailto:payalchaudhari9209@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-[#9d33ff]" />,
      title: "Phone",
      value: "+91 9209117695",
      link: "tel:+919209117695"
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#ff0055]" />,
      title: "GitHub",
      value: "payalchaudhari21",
      link: "https://github.com/payalchaudhari21"
    },
    {
      icon: <LinkedinIcon className="w-6 h-6 text-[#0077b5]" />,
      title: "LinkedIn",
      value: "payal-chaudhari2128",
      link: "https://linkedin.com/in/payal-chaudhari2128"
    }
  ];

  return (
    <section id="contact" className="py-24 relative z-10 w-full">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-4">
            Get in <span className="text-glow">Touch</span>
          </h2>
          <p className="text-[#aab5c8] max-w-2xl mx-auto">
            Currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Left Side: Contact Info */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8 font-['Outfit']">Let's Connect</h3>
            {contactDetails.map((detail, index) => (
              <motion.a
                href={detail.link}
                target={detail.title === 'Location' ? '_self' : '_blank'}
                rel="noreferrer"
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glassmorphism card-hover p-5 flex items-center gap-5 group border border-white/5 hover:border-[#00e0ff]/30"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#00e0ff]/10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0)] group-hover:shadow-[0_0_20px_rgba(0,224,255,0.2)]">
                  {detail.icon}
                </div>
                <div>
                  <h4 className="text-[#aab5c8] text-sm mb-1">{detail.title}</h4>
                  <p className="text-white font-medium text-lg font-['Outfit'] group-hover:text-[#00e0ff] transition-colors">{detail.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right Side: Contact Form */}
          <div className="flex-[1.5]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glassmorphism p-8 md:p-10 border border-[#00e0ff]/10 shadow-[0_0_30px_rgba(0,224,255,0.05)] h-full flex flex-col justify-between rounded-2xl relative overflow-hidden"
            >
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 h-full"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 font-['Outfit']">Message Sent!</h3>
                  <p className="text-[#aab5c8] text-lg max-w-sm">
                    Thanks for reaching out! I've received your message and will respond as soon as possible.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-white font-['Outfit']"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 relative">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-300 font-['Outfit'] tracking-wide">YOUR NAME</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#030305]/60 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00e0ff] focus:ring-1 focus:ring-[#00e0ff] transition-all placeholder:text-gray-600"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2 relative">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-300 font-['Outfit'] tracking-wide">YOUR EMAIL</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#030305]/60 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00e0ff] focus:ring-1 focus:ring-[#00e0ff] transition-all placeholder:text-gray-600"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 relative flex-1 flex flex-col">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-300 font-['Outfit'] tracking-wide">YOUR MESSAGE</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full bg-[#030305]/60 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00e0ff] focus:ring-1 focus:ring-[#00e0ff] transition-all resize-none placeholder:text-gray-600 flex-1"
                      placeholder="Hi Payal, I wanted to discuss..."
                    ></textarea>
                  </div>

                  {status === 'error' && (
                     <div className="text-red-400 text-sm font-medium px-2">{errorMessage}</div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 font-bold text-lg font-['Outfit'] transition-all shadow-lg ${
                      status === 'loading' 
                        ? 'bg-gradient-to-r from-[#00e0ff]/50 to-[#9d33ff]/50 text-white/80 cursor-not-allowed shadow-none border border-transparent' 
                        : 'bg-gradient-to-r from-[#00e0ff] to-[#9d33ff] text-white hover:shadow-[0_0_30px_rgba(0,224,255,0.5)] hover:scale-[1.02] border border-transparent'
                    }`}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
