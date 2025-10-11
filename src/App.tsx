import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Music from "./pages/Music";
import About from "./pages/About";

export default function App() {
  return (
    <div>
      <nav className="flex items-center p-4 bg-gradient-to-r from-blue-300 to-blue-100 rounded-xl shadow-md">
        {/* 왼쪽: 홈 */}
        <div>
          <Link to="/">
            <img src="/NewJeans logo.png" alt="NewJeans Logo" className="h-10 w-auto transition-transform transform hover:scale-105"/>
          </Link>
        </div>


        {/* 오른쪽: 나머지 메뉴 */}
        <div className="ml-auto flex gap-4">
          <Link
            to="/members"
            className="text-blue-800 font-semibold px-4 py-2 rounded-lg transition transform hover:scale-105 hover:bg-white/50 hover:text-blue-900"
          >
            뉴진스 멤버들
          </Link>
          <Link
            to="/music"
            className="text-blue-800 font-semibold px-4 py-2 rounded-lg transition transform hover:scale-105 hover:bg-white/50 hover:text-blue-900"
          >
            뉴진스 음악
          </Link>
          <Link
            to="/about"
            className="text-blue-800 font-semibold px-4 py-2 rounded-lg transition transform hover:scale-105 hover:bg-white/50 hover:text-blue-900"
          >
            뉴진스 소개
          </Link>
        </div>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />           {/* 기본 홈 경로 */}
        <Route path="/members" element={<Members />} />
        <Route path="/music" element={<Music />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
