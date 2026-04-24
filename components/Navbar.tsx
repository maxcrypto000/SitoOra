"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/contatti", label: "Contatti" },
    { href: "/come-funziona", label: "Come Funziona" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
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
        <ul className="flex items-center gap-6 md:gap-8">
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
                  className={`text-sm md:text-base font-medium transition-colors hover:text-white relative ${isActive ? "text-white" : "text-neutral-400"}`}
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
      </div>
    </nav>
  );
}
