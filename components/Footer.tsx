"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 z-10 border-t border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500">
                SitoOra
              </span>
            </Link>
            <p className="mt-4 text-neutral-400 max-w-sm">
              Trasformiamo le tue idee in esperienze digitali straordinarie. Il partner tecnologico per la crescita del tuo business online.
            </p>
            <div className="mt-6 flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Navigazione</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Chi Siamo", href: "/chi-siamo" },
                { label: "Servizi", href: "#" },
                { label: "Contatti", href: "/contatti" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contatti</h3>
            <ul className="space-y-3 text-neutral-400">
              <li>Via Roma 123, Milano, IT</li>
              <li>info@sitoora.it</li>
              <li>+39 012 345 6789</li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} SitoOra. Tutti i diritti riservati.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-neutral-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Termini di Servizio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
