"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { AnimatedText } from '@/components/AnimatedText';
import Link from 'next/link';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroCookieRef = useRef<HTMLImageElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero Cookie floating animation
    gsap.to(heroCookieRef.current, {
      y: -20,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });

    // Product section reveal
    const products = gsap.utils.toArray('.product-card');
    gsap.fromTo(products, 
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: productsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FDFBF7] overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-[#FDFBF7] overflow-hidden pt-16">
        
        {/* Decorative Scalloped Blob Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
           <svg viewBox="0 0 200 200" className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] text-[#F3E7D3] animate-[spin_60s_linear_infinite] opacity-60">
             <path fill="currentColor" d="M 100, 10
               C 120, 10 130, 25 145, 30
               C 165, 35 180, 50 180, 70
               C 180, 90 195, 105 190, 125
               C 185, 145 165, 160 150, 170
               C 135, 180 120, 195 100, 190
               C 80, 185 65, 175 50, 160
               C 35, 145 15, 135 10, 115
               C 5, 95 20, 80 25, 60
               C 30, 40 45, 25 65, 20
               C 80, 15 90, 10 100, 10 Z" />
           </svg>
           
           {/* Small floating decorative sparks */}
           <div className="absolute left-[15%] top-[25%] w-0 h-0 border-l-[10px] border-r-[10px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#E3D1B4] transform -rotate-45 animate-pulse"></div>
           <div className="absolute right-[20%] bottom-[15%] w-8 h-8 bg-[#E3D1B4] rounded-tr-full rounded-bl-full transform rotate-12 animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center justify-start w-full h-full max-h-[800px]">
          <div className="flex flex-col items-center relative z-40 mt-10 md:mt-0">
            <AnimatedText 
              text="サクサクで甘い" 
              className="text-4xl md:text-6xl font-black text-[#FDFBF7] tracking-widest mb-[-10px] md:mb-[-20px] z-0"
              style={{ textShadow: "0px 4px 15px rgba(227, 209, 180, 0.8)" }}
            />
            <AnimatedText 
              text="ビスケット" 
              className="text-6xl md:text-[110px] font-black text-[#8B5A2B] tracking-tighter drop-shadow-xl z-20"
            />
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto flex-grow flex justify-center items-center mt-[-40px] md:mt-[-80px] z-30">
            
            {/* Left Cookie */}
            <div className="absolute left-[5%] md:left-[10%] top-[40%] md:top-[30%] w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full shadow-2xl z-20 transform -rotate-12 hover:-rotate-6 transition-transform duration-500 overflow-hidden border-4 border-[#FDFBF7]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/matcha.jpg" alt="Matcha Cookie" className="w-full h-full object-cover mix-blend-multiply bg-[#FDFBF7]" />
            </div>

            {/* Right Cookie */}
            <div className="absolute right-[5%] md:right-[10%] top-[10%] md:top-[5%] w-[160px] h-[160px] md:w-[250px] md:h-[250px] rounded-full shadow-2xl z-20 transform rotate-12 hover:rotate-6 transition-transform duration-500 overflow-hidden border-4 border-[#FDFBF7]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/sakura.jpg" alt="Sakura Cookie" className="w-full h-full object-cover mix-blend-multiply bg-[#FDFBF7]" />
            </div>

            {/* Center Main Cookie */}
            <div 
              ref={heroCookieRef}
              className="relative w-[300px] h-[300px] md:w-[480px] md:h-[480px] rounded-full shadow-2xl z-40 transform hover:scale-105 transition-transform duration-500 overflow-hidden border-8 border-[#FDFBF7]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/sesame.jpg" alt="Premium Japanese Dark Cookie" className="w-full h-full object-cover mix-blend-multiply bg-[#FDFBF7]" />
            </div>
          </div>

          <div className="absolute bottom-10 z-40">
            <Link href="/contact" className="bg-[#A06C42] hover:bg-[#8B5A2B] text-white px-8 py-3 rounded-md text-xl font-black transition-colors shadow-xl flex items-center gap-3 tracking-widest border border-[#8B5A2B]">
              一口いかが？ <span className="text-sm border-l border-white/30 pl-3">▶</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section ref={productsRef} className="py-24 bg-[#FDFBF7] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
            
            {/* Column 1 */}
            <div className="product-card flex flex-col items-center text-center">
              <div className="relative w-full h-[350px] flex justify-center items-center mb-8">
                {/* SVG Blob */}
                <svg viewBox="0 0 200 200" className="absolute w-[280px] h-[280px] text-[#E8C68C] z-0">
                  <path fill="currentColor" d="M 100, 10 C 120, 10 130, 25 145, 30 C 165, 35 180, 50 180, 70 C 180, 90 195, 105 190, 125 C 185, 145 165, 160 150, 170 C 135, 180 120, 195 100, 190 C 80, 185 65, 175 50, 160 C 35, 145 15, 135 10, 115 C 5, 95 20, 80 25, 60 C 30, 40 45, 25 65, 20 C 80, 15 90, 10 100, 10 Z" />
                </svg>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="relative w-[240px] h-[240px] rounded-full overflow-hidden border-4 border-[#FDFBF7] shadow-xl z-10">
                  <img src="/images/butter_cream.jpg" alt="Butter and Cream" className="w-full h-full object-cover mix-blend-multiply bg-[#FDFBF7]" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#2A2420] mb-4 tracking-widest font-sans">バター＆クリーム</h3>
              <p className="text-sm md:text-base text-[#4A3F38] font-bold leading-relaxed px-4 md:px-0">
                繊細な香りが漂う軽くてサクサクの黄金バタービスケットと、バター風味の生地に滑らかなバニラクリームを挟んだクリームサンドイッチビスケット。一つ一つ丁寧に焼き上げられ、一口ごとに豊かな味わいと新鮮な喜びをお届けします。
              </p>
            </div>
            
            {/* Column 2 */}
            <div className="product-card flex flex-col items-center text-center mt-0 md:-mt-8">
              <div className="relative w-full h-[350px] flex justify-center items-center mb-8">
                {/* SVG Blob - Slightly larger */}
                <svg viewBox="0 0 200 200" className="absolute w-[340px] h-[340px] text-[#E8C68C] z-0 transform rotate-45">
                  <path fill="currentColor" d="M 100, 10 C 120, 10 130, 25 145, 30 C 165, 35 180, 50 180, 70 C 180, 90 195, 105 190, 125 C 185, 145 165, 160 150, 170 C 135, 180 120, 195 100, 190 C 80, 185 65, 175 50, 160 C 35, 145 15, 135 10, 115 C 5, 95 20, 80 25, 60 C 30, 40 45, 25 65, 20 C 80, 15 90, 10 100, 10 Z" />
                </svg>
                <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-[#FDFBF7] shadow-2xl z-10 transform scale-110">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/creamy_crispy.jpg" alt="Creamy and Crispy" className="w-full h-full object-cover mix-blend-multiply bg-[#FDFBF7]" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#2A2420] mb-4 tracking-widest font-sans">クリーミー＆クリスピー</h3>
              <p className="text-sm md:text-base text-[#4A3F38] font-bold leading-relaxed px-4 md:px-0">
                定番の滑らかなバターの風味から、サンドイッチの柔らかくクリーミーな中心部まで。どのビスケットも、厳選された最高級の素材を用いて精密に焼き上げられており、誰もが抗えない口の中でとろけるような体験をお約束します。
              </p>
            </div>

            {/* Column 3 */}
            <div className="product-card flex flex-col items-center text-center">
              <div className="relative w-full h-[350px] flex justify-center items-center mb-8">
                {/* SVG Blob */}
                <svg viewBox="0 0 200 200" className="absolute w-[280px] h-[280px] text-[#A67855] z-0 transform -rotate-12">
                  <path fill="currentColor" d="M 100, 10 C 120, 10 130, 25 145, 30 C 165, 35 180, 50 180, 70 C 180, 90 195, 105 190, 125 C 185, 145 165, 160 150, 170 C 135, 180 120, 195 100, 190 C 80, 185 65, 175 50, 160 C 35, 145 15, 135 10, 115 C 5, 95 20, 80 25, 60 C 30, 40 45, 25 65, 20 C 80, 15 90, 10 100, 10 Z" />
                </svg>
                <div className="relative w-[240px] h-[240px] rounded-full overflow-hidden border-4 border-[#FDFBF7] shadow-xl z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/butter_chocolate.jpg" alt="Butter and Chocolate" className="w-full h-full object-cover mix-blend-multiply bg-[#FDFBF7]" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#2A2420] mb-4 tracking-widest font-sans">バター＆チョコレート</h3>
              <p className="text-sm md:text-base text-[#4A3F38] font-bold leading-relaxed px-4 md:px-0">
                四角い黄金バタービスケットのシンプルな魅力を味わいたい時も、チョコレートバージョンのクリーミーな喜びを楽しみたい時も。どの瞬間もより美味しくするために作られています。ティータイムや独り占めするのにも最適です。
              </p>
            </div>
            
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center items-center gap-3 mt-16">
            <div className="w-2 h-2 rounded-full bg-[#BDB5AD]"></div>
            <div className="w-2 h-2 rounded-full bg-[#BDB5AD]"></div>
            <div className="w-8 h-2 rounded-full bg-[#E8C68C]"></div>
            <div className="w-2 h-2 rounded-full bg-[#BDB5AD]"></div>
            <div className="w-2 h-2 rounded-full bg-[#BDB5AD]"></div>
          </div>
        </div>
      </section>

      {/* Indulgence Section */}
      <section className="py-24 md:py-40 bg-[#9B6A46] relative overflow-hidden">
        
        {/* Background Decorative Flower */}
        <div className="absolute inset-0 z-0 flex items-center justify-center md:justify-end pointer-events-none md:pr-[10%]">
           <svg viewBox="0 0 200 200" className="w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] text-[#A67855] opacity-60 transform -rotate-12 translate-x-1/4">
             <path fill="currentColor" d="M 100, 10
               C 120, 10 130, 25 145, 30
               C 165, 35 180, 50 180, 70
               C 180, 90 195, 105 190, 125
               C 185, 145 165, 160 150, 170
               C 135, 180 120, 195 100, 190
               C 80, 185 65, 175 50, 160
               C 35, 145 15, 135 10, 115
               C 5, 95 20, 80 25, 60
               C 30, 40 45, 25 65, 20
               C 80, 15 90, 10 100, 10 Z" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="w-full md:w-1/2 text-[#FDFBF7]">
            <AnimatedText 
              text="純粋な至福の瞬間を味わう" 
              className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight drop-shadow-md"
            />
            <p className="text-lg md:text-xl text-[#FDFBF7]/90 leading-relaxed font-bold max-w-lg">
              サクサクの黄金バタービスケットと濃厚なチョコチップクッキーが一つになった贅沢なパック。
              一口ごとに新鮮な美味しさが広がり、最高級の素材で作られています。<br/><br/>
              内容量: 200g - シェアするのに十分な量ですが、独り占めしたくなる美味しさです。
            </p>
          </div>
          
          <div className="w-full md:w-1/2 relative h-[500px] md:h-[700px] z-20 flex justify-center items-center mt-12 md:mt-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/packets.jpg" 
              alt="BHO Cookie Packets" 
              className="absolute w-[120%] max-w-none md:w-[130%] h-auto object-contain transform rotate-6 drop-shadow-2xl mix-blend-multiply"
              style={{ filter: "drop-shadow(0px 20px 30px rgba(0,0,0,0.3))" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
