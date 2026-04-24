"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-4 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Animated Gradient */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/30 via-[#141414] to-[#141414] pointer-events-none" 
      />
      
      {/* Background Animated Lights */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
        className="relative z-10 w-full md:w-1/2 text-left pt-20 md:pt-0"
      >
        <motion.div 
          className="inline-block mb-6 px-5 py-2 rounded-full border border-blue-500/30 bg-black/40 backdrop-blur-md text-blue-300 text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          ✨ Sviluppo Web di Nuova Generazione
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-white leading-[1.1]">
          SitoOra: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-500 animate-gradient-x">
            Il tuo sito, ora.
          </span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-neutral-300 max-w-xl mb-10 leading-relaxed"
        >
          Creiamo, manteniamo e ottimizziamo la tua presenza digitale. Soluzioni moderne e performanti per far crescere il tuo business in un mondo che non si ferma mai.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/contatti" passHref>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all flex items-center justify-center gap-2"
            >
              Inizia Progetto
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </motion.button>
          </Link>
          
          <Link href="/come-funziona" passHref>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black/40 backdrop-blur-md hover:bg-white/10 border border-white/10 text-white font-semibold rounded-full transition-all text-center h-full flex items-center justify-center"
            >
              Scopri come funziona
            </motion.button>
          </Link>
        </motion.div>

        {/* Focus Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap gap-4 items-center text-sm md:text-base font-semibold text-white/90"
        >
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm shadow-lg">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            Siti live in sole <span className="text-green-400 font-bold">72h</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm shadow-lg">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </div>
            Prezzi accessibili da <span className="text-blue-400 font-bold">400€</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 w-full md:w-1/2 mt-16 md:mt-0 flex justify-end"
      >
        <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.2)] group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
          <Image 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="Cyberpunk Office" 
            fill
            priority
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        {/* Floating Glassmorphism Badge */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <div>
            <p className="text-sm text-neutral-400 font-medium">Performance</p>
            <p className="text-lg text-white font-bold">100% Ottimizzate</p>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}
