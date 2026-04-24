"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contatti() {
  const contatti = [
    { icon: Mail, label: "Email", value: "info@sitoora.it", action: "mailto:info@sitoora.it" },
    { icon: Phone, label: "Telefono", value: "+39 012 345 6789", action: "tel:+390123456789" },
    { icon: MapPin, label: "Sede", value: "Milano, Italia", action: "#" },
  ];

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Animated Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/20 blur-[130px] rounded-full mix-blend-screen pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/20 blur-[130px] rounded-full mix-blend-screen pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10 max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
          Iniziamo a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Collaborare</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400">
          Hai un'idea o un progetto in mente? Scrivici, siamo pronti a trasformarlo in realtà.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl mx-auto relative z-10">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-8"
        >
          {contatti.map((info, idx) => (
            <a key={idx} href={info.action} className="flex items-center space-x-6 group">
              <div className="w-14 h-14 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-center justify-center text-blue-500 group-hover:text-violet-400 group-hover:border-violet-500/50 transition-all">
                <info.icon size={28} />
              </div>
              <div>
                <p className="text-neutral-500 text-sm font-medium mb-1 uppercase tracking-wider">{info.label}</p>
                <p className="text-white text-lg font-semibold group-hover:text-blue-400 transition-colors">{info.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form className="p-8 rounded-3xl bg-neutral-900/40 backdrop-blur-md border border-neutral-800/50 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-400">Nome</label>
                <input type="text" id="name" className="px-4 py-3 rounded-xl bg-neutral-950/50 border border-neutral-800 focus:border-blue-500 outline-none text-white transition-colors" placeholder="Mario Rossi" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-400">Email</label>
                <input type="email" id="email" className="px-4 py-3 rounded-xl bg-neutral-950/50 border border-neutral-800 focus:border-blue-500 outline-none text-white transition-colors" placeholder="mario@email.it" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-neutral-400">Messaggio</label>
              <textarea id="message" rows={5} className="px-4 py-3 rounded-xl bg-neutral-950/50 border border-neutral-800 focus:border-blue-500 outline-none text-white transition-colors resize-none" placeholder="Descrivi brevemente il tuo progetto..."></textarea>
            </div>

            <button type="button" className="w-full py-4 mt-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] active:scale-95">
              Invia Messaggio
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
