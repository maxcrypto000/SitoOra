"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Code2, Wrench, Search } from "lucide-react";

const services = [
  {
    title: "Sviluppo Web",
    description: "Realizziamo siti web su misura, veloci e responsivi, utilizzando le tecnologie più all'avanguardia.",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    link: "/come-funziona#sviluppo-web"
  },
  {
    title: "Manutenzione",
    description: "Ci prendiamo cura del tuo sito con aggiornamenti continui e backup di sicurezza.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    link: "/come-funziona#manutenzione"
  },
  {
    title: "Ottimizzazione SEO",
    description: "Miglioriamo il posizionamento del tuo sito sui motori di ricerca per farti trovare dai clienti.",
    icon: Search,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "/come-funziona#ottimizzazione-seo"
  }
];

export default function Services() {
  return (
    <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">I Nostri Servizi</h2>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">Tutto ciò di cui hai bisogno per far decollare la tua attività online in un'unica soluzione.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link href={service.link} key={index} passHref>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300 relative overflow-hidden flex flex-col cursor-pointer h-full"
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              </div>

              <div className="p-8 relative z-10 flex-1 flex flex-col">
                <div className="absolute -top-10 right-8 w-16 h-16 bg-black border border-white/10 rounded-2xl flex items-center justify-center text-blue-500 shadow-xl group-hover:text-violet-400 group-hover:border-blue-500/50 transition-colors z-20">
                  <service.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white mt-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  {service.title}
                  <svg className="w-5 h-5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
