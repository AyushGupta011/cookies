import { AnimatedText } from "@/components/AnimatedText";

export default function About() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedText 
          text="私たちについて" 
          className="text-5xl md:text-7xl font-black text-[#8B5A2B] text-center mb-16" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-lg text-[#5A4A42] leading-relaxed">
            <p>
              私たちのクッキーは、日本の伝統的な味わいとモダンな製菓技術を融合させた、最高品質のスイーツです。厳選された素材を使用し、一つ一つ丁寧に焼き上げています。
            </p>
            <p>
              抹茶、桜、黒ごまなど、日本ならではの風味を活かし、サクサクのビスケットとしっとりとしたクリームの絶妙なハーモニーをお届けします。
            </p>
            <p>
              すべての工程において品質にこだわり、皆様に「美味しい」と言っていただける商品作りを心がけています。
            </p>
          </div>
          
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/mixed.jpg" 
              alt="Japanese Cookies Box" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
