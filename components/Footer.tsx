"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
            <div className="mt-8">
              <a
                href="https://it.trustpilot.com/review/sitoora.it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00b67a] hover:bg-[#009e6a] text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,182,122,0.3)]"
              >
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
                  <path d="M495.8 190.5H307L256 12l-51 178.5H16.2l153 111.4-58.4 179.8L256 374l145.2 107.7-58.4-179.8 153-111.4z" />
                </svg>
                Recensiscici su Trustpilot
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Navigazione</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Chi Siamo", href: "/chi-siamo" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Come Funziona", href: "/come-funziona" },
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
              <li>info@sitoora.it</li>
              <li>+39 331 734 9165</li>
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
