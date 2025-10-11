export default function About() {
  
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 relative"
      style={{ 
        backgroundImage: 'url(newjeans_members.jpg)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', 
        backgroundRepeat: 'no-repeat', 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <img 
          src="newjeans_logo.jpg" 
          alt="NewJeans Logo" 
          className="w-48 h-auto mx-auto mt-8 mb-10 rounded-xl shadow-2xl transition duration-500 hover:scale-[1.03]"
        />

        <h1 className="text-2xl font-bold text-white mb-4 text-center drop-shadow-lg">
          데뷔일 : 2022.7.22❤️
        </h1>

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center leading-tight drop-shadow-lg">
          뉴진스 그룹명의 유래
        </h1>

        <h2 className="max-w-4xl text-lg md:text-xl text-white leading-relaxed text-center p-6 bg-black bg-opacity-50 rounded-xl shadow-2xl border border-gray-100">
          대중음악은 일상과 초근접해 있는 문화이기 때문에 마치 매일 입는 옷과 같다. 특히 진스(Jeans)는 시대를 불문해 남녀노소 모두에게 사랑받아 온 아이템이다. 뉴진스(NewJeans)에는 매일 찾게 되고 언제 입어도 질리지 않는 진스처럼 시대의 아이콘이 되겠다는 포부와 New Genes, 즉 새로운 시대를 열겠다는 각오도 동시에 담겨 있다.
        </h2>
      </div>
    </div>
  );
}