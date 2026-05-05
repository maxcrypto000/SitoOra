"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/come-funziona", label: "Come Funziona" },
    { href: "/contatti", label: "Contatti" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" onClick={closeMenu}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-10 w-auto flex items-center"
          >
            <Image 
              src="/logoNoBG.png" 
              alt="SitoOra Logo" 
              width={160} 
              height={40} 
              className="h-10 w-auto object-contain" 
              priority
            />
          </motion.div>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <motion.li 
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  href={link.href} 
                  className={`text-base font-medium transition-colors hover:text-white relative ${isActive ? "text-white" : "text-neutral-400"}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                    />
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block transition-transform origin-center rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white block transition-opacity rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white block transition-transform origin-center rounded-full"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-3xl border-t border-white/10 md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center justify-start pt-20 h-full gap-8">
              {links.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`text-2xl font-semibold transition-colors hover:text-white ${isActive ? "text-blue-500" : "text-neutral-400"}`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
