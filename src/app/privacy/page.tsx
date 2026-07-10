import { AnimatedText } from "@/components/AnimatedText";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedText 
          text="プライバシーポリシー" 
          className="text-4xl md:text-5xl font-black text-[#8B5A2B] mb-12" 
        />
        <div className="prose prose-amber text-[#5A4A42] space-y-6">
          <p>
            BHO（以下「当社」といいます。）は、お客様の個人情報の保護を最も重要な責務と認識し、以下の通りプライバシーポリシーを定めます。
          </p>
          <h2 className="text-2xl font-bold text-[#8B5A2B] mt-8">1. 個人情報の収集</h2>
          <p>
            当社は、商品の購入、お問い合わせ、メールマガジンの登録時などに、氏名、住所、電話番号、メールアドレスなどの個人情報を収集する場合があります。
          </p>
          <h2 className="text-2xl font-bold text-[#8B5A2B] mt-8">2. 個人情報の利用目的</h2>
          <p>
            収集した個人情報は、以下の目的で利用いたします：
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>商品の発送、代金決済、アフターサービスのため</li>
              <li>新商品やキャンペーン等のご案内のため</li>
              <li>お客様からのお問い合わせに対する回答のため</li>
            </ul>
          </p>
          <h2 className="text-2xl font-bold text-[#8B5A2B] mt-8">3. 第三者への開示</h2>
          <p>
            当社は、法令に基づく場合を除き、事前にお客様の同意を得ることなく、個人情報を第三者に提供いたしません。
          </p>
        </div>
      </div>
    </main>
  );
}
