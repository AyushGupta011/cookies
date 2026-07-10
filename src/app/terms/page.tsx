import { AnimatedText } from "@/components/AnimatedText";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedText 
          text="利用規約" 
          className="text-4xl md:text-5xl font-black text-[#8B5A2B] mb-12" 
        />
        <div className="prose prose-amber text-[#5A4A42] space-y-6">
          <p>
            この利用規約（以下「本規約」といいます。）は、BHO（以下「当社」といいます。）がこのウェブサイト上で提供するサービスの利用条件を定めるものです。
          </p>
          <h2 className="text-2xl font-bold text-[#8B5A2B] mt-8">第1条（適用）</h2>
          <p>
            本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
          </p>
          <h2 className="text-2xl font-bold text-[#8B5A2B] mt-8">第2条（禁止事項）</h2>
          <p>
            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当社のサービスの運営を妨害するおそれのある行為</li>
            </ul>
          </p>
          <h2 className="text-2xl font-bold text-[#8B5A2B] mt-8">第3条（免責事項）</h2>
          <p>
            当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
          </p>
        </div>
      </div>
    </main>
  );
}
