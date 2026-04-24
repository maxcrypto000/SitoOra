"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, PhoneCall, Palette, LayoutTemplate, Code, SearchCheck, Rocket, Settings, ShieldCheck, TrendingUp, BarChart } from "lucide-react";

export default function ComeFunziona() {
  const stepsWeb = [
    { icon: PhoneCall, title: "1. Chiamata di Allineamento", description: "Discutiamo delle tue esigenze, del tuo target e degli obiettivi del progetto.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" },
    { icon: Palette, title: "2. Scelta della Palette", description: "Definiamo i colori che meglio rappresentano il tuo brand e la tua identità.", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" },
    { icon: LayoutTemplate, title: "3. Definizione dello Stile", description: "Progettiamo l'aspetto visivo (UI/UX) per garantire un'esperienza utente ottimale.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" },
    { icon: Code, title: "4. Creazione & Sviluppo", description: "Scriviamo il codice del tuo sito utilizzando le tecnologie più moderne.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" },
    { icon: CheckCircle2, title: "5. Revisione", description: "Ti mostriamo il sito e raccogliamo i tuoi feedback per le rifiniture finali.", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop" },
    { icon: Rocket, title: "6. Deploy & Consegna", description: "Pubblichiamo il sito online, pronto per accogliere i tuoi primi visitatori.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" },
  ];

  const stepsManutenzione = [
    { icon: Settings, title: "1. Monitoraggio Continuo", description: "Controlliamo lo stato di salute del sito 24/7 per prevenire malfunzionamenti.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
    { icon: ShieldCheck, title: "2. Aggiornamenti & Sicurezza", description: "Manteniamo aggiornati i plugin e i sistemi per garantire la massima sicurezza.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" },
    { icon: Code, title: "3. Piccole Modifiche", description: "Interveniamo rapidamente per aggiornare testi, immagini o piccole sezioni.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" },
  ];

  const stepsSeo = [
    { icon: SearchCheck, title: "1. Analisi Iniziale", description: "Studiamo il tuo sito e i tuoi competitor per trovare le migliori opportunità.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
    { icon: TrendingUp, title: "2. Ottimizzazione On-Page", description: "Miglioriamo la struttura, i testi e i meta tag per piacere ai motori di ricerca.", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop" },
    { icon: BarChart, title: "3. Report & Risultati", description: "Ti forniamo report periodici per mostrarti la crescita del traffico.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  ];

  const Section = ({ id, title, description, steps }: { id: string, title: string, description: string, steps: any[] }) => (
    <section id={id} className="py-16 scroll-mt-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-neutral-400 text-lg">{description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-neutral-800/60 to-neutral-950/80 backdrop-blur-md border border-white/5 hover:border-blue-500/50 shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-colors relative group overflow-hidden min-h-[220px] flex flex-col justify-end"
          >
            {/* Background Hover Image */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Image 
                src={step.image} 
                alt={step.title} 
                fill 
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
              />
              {/* Gradient Overlay to make text readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
            </div>

            <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
              <div className="w-12 h-12 bg-neutral-950/80 rounded-xl flex items-center justify-center mb-4 text-blue-400 border border-neutral-800 group-hover:text-white group-hover:border-white/20 transition-all">
                <step.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-200 transition-colors">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );

  return (
    <main className="min-h-screen px-4 md:px-12 py-20 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Animated Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10 max-w-3xl mx-auto pt-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
          Come <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Funziona</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400">
          Scopri il nostro processo collaudato per portare la tua attività online in modo rapido, efficace e senza stress.
        </p>
      </motion.div>

      <Section id="sviluppo-web" title="Sviluppo Web" description="Dall'idea iniziale al sito live, un percorso chiaro e strutturato." steps={stepsWeb} />
      
      <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <Section id="manutenzione" title="Manutenzione" description="Il tuo sito sempre aggiornato, sicuro e scattante." steps={stepsManutenzione} />
      
      <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <Section id="ottimizzazione-seo" title="Ottimizzazione SEO" description="Scaliamo le classifiche di Google insieme." steps={stepsSeo} />

    </main>
  );
}
