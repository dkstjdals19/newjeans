import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Music from "./pages/Music";
import About from "./pages/About";
import Mv from "./pages/Mv";
import { BsPeopleFill, BsCameraVideoFill } from "react-icons/bs";
import { FaMusic } from "react-icons/fa6";
import { IoInformationCircleSharp } from "react-icons/io5";

export default function App() {
  return (
    <div>
      <nav className="flex items-center p-4 bg-gradient-to-r from-blue-300 to-blue-100 rounded-xl shadow-md">
        {/* 왼쪽: 홈 */}
        <div>
          <Link to="/">
            <img
              src="/NewJeans logo.png"
              alt="NewJeans Logo"
              className="h-10 w-auto transition-transform transform hover:scale-105"
            />
          </Link>
        </div>

        {/* 오른쪽: 나머지 메뉴 */}
        <div className="ml-auto flex gap-4">
          <Link
            to="/members"
            className="flex items-center gap-2 text-blue-800 font-semibold px-4 py-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-white/30 hover:text-blue-900"
          >
            <BsPeopleFill className="text-xl" />
            <span>뉴진스 멤버들</span>
          </Link>

          <Link
            to="/music"
            className="flex items-center gap-2 text-blue-800 font-semibold px-4 py-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-white/30 hover:text-blue-900"
          >
            <FaMusic className="text-xl" />
            <span>뉴진스 음악</span>
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-2 text-blue-800 font-semibold px-4 py-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-white/30 hover:text-blue-900"
          >
            <IoInformationCircleSharp className="text-xl" />
            <span>뉴진스 소개</span>
          </Link>

          <Link
            to="/mv"
            className="flex items-center gap-2 text-blue-800 font-semibold px-4 py-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-white/30 hover:text-blue-900"
          >
            <BsCameraVideoFill className="text-xl" />
            <span>뉴진스 뮤비</span>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />           {/* 홈 경로 */}
        <Route path="/members" element={<Members />} /> {/* 멤버들 페이지 */}
        <Route path="/music" element={<Music />} />     {/* 음악 페이지 */}
        <Route path="/about" element={<About />} />     {/* 소개 페이지 */}
        <Route path="/mv" element={<Mv />} />           {/* 뮤비 페이지 */}
      </Routes>
    </div>
  );
}
