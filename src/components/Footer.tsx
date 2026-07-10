"use client";
import Link from 'next/link';
import { siteData } from '@/config/siteData';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-[#FDFBF7] pt-24 pb-12 border-t border-[#8B5A2B]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-[#8B5A2B] mb-4">
            ご購入いただき<br/>ありがとうございます
          </h2>
          <p className="text-2xl font-bold text-[#D2A679] mb-8">
            心より感謝申し上げます
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-xl font-bold text-[#8B5A2B] mb-2 tracking-wider">お問い合わせ</h3>
            <p className="text-[#5A4A42]">{siteData.email}</p>
            <p className="text-[#5A4A42]">{siteData.contactNumber}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#8B5A2B] mb-2 tracking-wider">住所</h3>
            <p className="text-[#5A4A42]">{siteData.address}</p>
          </div>
          <div className="flex space-x-6 font-bold">
            <a href={siteData.social.instagram} className="text-[#D2A679] hover:text-[#8B5A2B] transition-colors">インスタグラム</a>
            <a href={siteData.social.twitter} className="text-[#D2A679] hover:text-[#8B5A2B] transition-colors">ツイッター</a>
            <a href={siteData.social.facebook} className="text-[#D2A679] hover:text-[#8B5A2B] transition-colors">フェイスブック</a>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#8B5A2B]/10 flex flex-col md:flex-row justify-between items-center text-sm text-[#5A4A42]">
        <p>&copy; 2026 和クッキー BHO. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-[#8B5A2B]">プライバシーポリシー</Link>
          <Link href="/terms" className="hover:text-[#8B5A2B]">利用規約</Link>
        </div>
      </div>
    </footer>
  );
};
