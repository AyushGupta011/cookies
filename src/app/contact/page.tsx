import { AnimatedText } from "@/components/AnimatedText";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedText 
          text="お問い合わせ" 
          className="text-5xl md:text-7xl font-black text-[#8B5A2B] text-center mb-6" 
        />
        <p className="text-center text-[#5A4A42] mb-16 font-medium">
          特別なオファーや最新の美味しいバリエーションの情報を<br/>
          受信トレイにお届けします！
        </p>
        
        <form className="space-y-6 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-[#8B5A2B]/5">
          <div>
            <label className="block text-[#8B5A2B] font-bold mb-2">お名前 (FULL NAME)</label>
            <input 
              type="text" 
              className="w-full bg-[#FDFBF7] border border-[#D2A679]/30 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#8B5A2B] transition-all text-[#5A4A42]"
              placeholder="山田 太郎"
            />
          </div>
          <div>
            <label className="block text-[#8B5A2B] font-bold mb-2">メールアドレス (EMAIL ADDRESS)</label>
            <input 
              type="email" 
              className="w-full bg-[#FDFBF7] border border-[#D2A679]/30 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#8B5A2B] transition-all text-[#5A4A42]"
              placeholder="info@example.com"
            />
          </div>
          <button 
            type="button" 
            className="w-full bg-[#8B5A2B] hover:bg-[#5A4A42] text-white font-bold py-4 rounded-xl transition-colors mt-8"
          >
            送信する (SUBMIT)
          </button>
        </form>
      </div>
    </main>
  );
}
