// 홈 페이지
import { TiSocialFacebook } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section
        id="home"
        className="relative py-16 sm:py-24 flex items-center justify-center min-h-[1300px] overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/NEW JEANS, NewJeans - Videogame Ver..mp4"
          className="absolute top-0 left-0 h-full w-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

        <div className="text-center px-4 relative z-20">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-white mb-4 tracking-tight">
            Welcome to NewJeans Fanpage
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            뉴진스 멤버들, 음악, 소개가 있는 팬 페이지
          </p>
          <Link
            to="/music"
            className="inline-block px-8 py-3 bg-pink-400 text-white font-bold rounded-full shadow-md hover:bg-pink-500 transition duration-300 transform sm:hover:scale-105"
          >
            음악 듣기
          </Link>
        </div>
      </section>



      {/* Members Section */}
      <section className="py-32 bg-gray-50 flex flex-col items-center">
        <div className="max-w-7xl w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 px-4 mb-8">
          {/* 민지 카드 */}
          <div className="bg-gradient-to-b from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center cursor-pointer">
            <img
              src="/Minji.jpg"
              alt="Minji"
              className="w-36 h-36 rounded-full mb-4 object-cover border-4 border-purple-400"
            />
            <h3 className="text-xl font-bold text-gray-900">민지</h3>
          </div>

          {/* 하니 카드 */}
          <div className="bg-gradient-to-b from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center cursor-pointer">
            <img
              src="/Hanni.jpeg"
              alt="Hanni"
              className="w-36 h-36 rounded-full mb-4 object-cover border-4 border-purple-400"
            />
            <h3 className="text-xl font-bold text-gray-900">하니</h3>
          </div>

          {/* 다니엘 카드 */}
          <div className="bg-gradient-to-b from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center cursor-pointer">
            <img
              src="/Danielle.png"
              alt="Daniel"
              className="w-36 h-36 rounded-full mb-4 object-cover border-4 border-purple-400"
            />
            <h3 className="text-xl font-bold text-gray-900">다니엘</h3>
          </div>

          {/* 해린 카드 */}
          <div className="bg-gradient-to-b from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center cursor-pointer">
            <img
              src="/Haerin.png"
              alt="Haerin"
              className="w-36 h-36 rounded-full mb-4 object-cover border-4 border-purple-400"
            />
            <h3 className="text-xl font-bold text-gray-900">해린</h3>
          </div>

          {/* 혜인 카드 */}
          <div className="bg-gradient-to-b from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center cursor-pointer">
            <img
              src="/Hyein.jpg"
              alt="Hyein"
              className="w-36 h-36 rounded-full mb-4 object-cover border-4 border-purple-400"
            />
            <h3 className="text-xl font-bold text-gray-900">혜인</h3>
          </div>
        </div>

        {/* 멤버들 보러가기 버튼 */}
        <Link
          to="/members"
          className="inline-block px-8 py-3 bg-pink-400 text-white font-bold rounded-full shadow-md hover:bg-pink-500 transition duration-300 transform hover:scale-105"
        >
          멤버들 보러가기
        </Link>
      </section>

      {/* Footer Section */}
      <section className="bg-black py-14 flex flex-col items-center justify-center">
        <div className="text-center px-4">
          {/* 로고 */}
          <img
            src="/HomePage_NewJeansLogo.png"
            alt="NewJeans Logo"
            className="w-60 sm:w-80 mb-8 mx-auto"
          />

          {/* 소개 버튼 */}
          <Link
            to="/about"
            className="inline-block mb-12 px-8 py-3 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition duration-300 transform hover:scale-105"
          >
            뉴진스 소개
          </Link>

          {/* SNS 아이콘 */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.instagram.com/newjeans_official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white text-lg hover:text-pink-400 transition"
            >
              <CiInstagram className="text-2xl" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/official.newjeans"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white text-lg hover:text-blue-600 transition"
            >
              <TiSocialFacebook className="text-2xl" />
              <span>Facebook</span>
            </a>

            <a
              href="https://x.com/NewJeans_ADOR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white text-lg hover:text-blue-400 transition"
            >
              <FaXTwitter className="text-2xl" />
              <span>Twitter</span>
            </a>

            <a
              href="https://www.youtube.com/@NewJeans_official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white text-lg hover:text-red-500 transition"
            >
              <FaYoutube className="text-2xl" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
