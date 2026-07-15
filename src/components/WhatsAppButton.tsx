'use client';

import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone } from 'lucide-react';

type MessageType = 'sent' | 'received';

interface Message {
  id: number;
  type: MessageType;
  text: string;
  time: string;
}

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "received",
      text: "Bonjour ! 👋 Comment pouvons-nous vous aider aujourd'hui ?",
      time: "10:32"
    },
    {
      id: 2,
      type: "received",
      text: "Devis, intervention urgente ou information ?",
      time: "10:33"
    }
  ]);

  const phoneNumber = "237658769733";
  const companyName = "NEXORA - Vermine Secret";

  const quickReplies = [
    "Je veux un devis",
    "Intervention urgente",
    "Problème de punaises de lit",
    "Présence de rats ou souris",
    "Cafards dans la cuisine"
  ];

  const redirectToWhatsApp = (customMessage?: string) => {
    const finalMessage = customMessage || message.trim() || 
      "Bonjour NEXORA, je souhaite obtenir un devis ou une intervention. Merci !";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`, 
      '_blank'
    );
    
    setTimeout(() => setIsOpen(false), 700);
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMsg: Message = {
      id: Date.now(),
      type: "sent",
      text: message.trim(),
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMsg]);
    
    // Redirection vers WhatsApp avec le message saisi
    setTimeout(() => {
      redirectToWhatsApp(message.trim());
      setMessage("");
    }, 650);
  };

  const handleQuickReply = (text: string) => {
    redirectToWhatsApp(text);
  };

  return (
    <>
      {/* Bouton Flottant */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[200] w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-[0_0_30px_#25D366]"
      >
        <MessageCircle className="w-8 h-8" />
        <div className="absolute top-0 right-0 w-5 h-5 bg-green-400 border-[2.5px] border-white rounded-full animate-ping" />
      </motion.button>

      {/* Fenêtre WhatsApp */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-md p-3 sm:p-4">
            <motion.div
              initial={{ y: 120, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.96 }}
              className="bg-white w-full max-w-[420px] h-[82vh] sm:h-[640px] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="bg-[#128C7E] text-white px-4 py-3.5 flex items-center gap-3">
                <button onClick={() => setIsOpen(false)} className="p-1 -ml-1">
                  <X className="w-6 h-6" />
                </button>
                
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-11 h-11 bg-white/25 rounded-full flex items-center justify-center text-3xl">
                    🛡️
                  </div>
                  <div>
                    <div className="font-semibold leading-tight">{companyName}</div>
                    <div className="flex items-center gap-1.5 text-xs mt-0.5">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      En ligne
                    </div>
                  </div>
                </div>
                <button onClick={() => redirectToWhatsApp()}>
                  <Phone className="w-5 h-5" />
                </button>
              </div>

              {/* Zone des messages */}
              <div className="flex-1 overflow-y-auto bg-[#E5DDD5] p-4 space-y-3">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.type === "sent" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[78%] px-4 py-3 rounded-2xl text-[15.2px] leading-snug shadow-sm
                        ${msg.type === "sent"
                          ? 'bg-[#DCF8C6] rounded-br-none'
                          : 'bg-white rounded-bl-none'}`}
                    >
                      {msg.text}
                      <div className="text-[10px] mt-1 opacity-70 text-right">
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Réponses rapides */}
              <div className="px-4 py-3 bg-white border-t flex gap-2 overflow-x-auto pb-3">
                {quickReplies.map((reply, i) => (
                  <motion.button
                    key={i}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleQuickReply(reply)}
                    className="bg-white border border-gray-200 hover:border-emerald-300 text-xs px-4 py-2.5 rounded-3xl whitespace-nowrap transition-colors"
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>

              {/* Input */}
              <div className="bg-white p-3 border-t flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Écrivez votre message..."
                  className="flex-1 bg-gray-100 rounded-full px-5 py-3 focus:outline-none text-[15px]"
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={sendMessage}
                  className="w-12 h-12 bg-[#128C7E] text-white rounded-full flex items-center justify-center disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;