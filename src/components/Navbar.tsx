"use client";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "ホーム", path: "/" },
    { name: "私たちについて", path: "/about" },
    { name: "お問い合わせ", path: "/contact" }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#8B5A2B]/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-black text-[#8B5A2B] tracking-tighter">
            和クッキー
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((item, i) => (
              <Link key={i} href={item.path} className="text-[#5A4A42] font-bold hover:text-[#8B5A2B] transition-colors relative group">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B5A2B] transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/contact" className="bg-[#D2A679] hover:bg-[#8B5A2B] text-white px-6 py-2 rounded-full font-bold transition-colors">
              今すぐ注文
            </Link>
          </div>
          
          <button 
            className="md:hidden text-[#8B5A2B] p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[72px] left-0 w-full bg-[#FDFBF7] shadow-xl z-40 md:hidden flex flex-col border-b border-[#8B5A2B]/10"
          >
            {links.map((item, i) => (
              <Link 
                key={i} 
                href={item.path} 
                onClick={() => setIsOpen(false)}
                className="text-[#5A4A42] font-bold py-4 px-6 border-b border-[#8B5A2B]/5 hover:bg-[#F5EAD4] transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="p-6">
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="block text-center w-full bg-[#D2A679] text-white px-6 py-3 rounded-full font-bold shadow-md"
              >
                今すぐ注文
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
