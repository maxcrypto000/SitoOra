"use client";

import { motion } from "framer-motion";
import { Users, Target, Zap } from "lucide-react";

export default function ChiSiamo() {
  const features = [
    {
      icon: Users,
      title: "Chi Siamo",
      description: "Siamo un team di sviluppatori, designer ed esperti SEO appassionati del web. La nostra missione è trasformare idee in progetti digitali di successo.",
    },
    {
      icon: Target,
      title: "Il Nostro Obiettivo",
      description: "Vogliamo rendere il web accessibile a tutte le aziende, fornendo siti veloci, belli e ottimizzati che convertono i visitatori in clienti.",
    },
    {
      icon: Zap,
      title: "Il Nostro Metodo",
      description: "Lavoriamo a stretto contatto con te. Dalla progettazione iniziale al lancio, fino alla manutenzione continua, ci prendiamo cura di tutto noi.",
    },
  ];

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
          La mente dietro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">SitoOra</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400">
          Un'agenzia nata con uno scopo: creare esperienze digitali memorabili. Non facciamo solo siti web, costruiamo il futuro del tuo business online.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10 w-full">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="p-8 rounded-3xl bg-neutral-900/40 backdrop-blur-md border border-neutral-800/50 hover:border-violet-500/50 transition-colors"
          >
            <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-6 text-violet-400">
              <feature.icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
            <p className="text-neutral-400 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
