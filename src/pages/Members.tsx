import { useState } from "react";
import { BsSearchHeartFill } from "react-icons/bs";

// 멤버들에 대한 사진과 설명등을 보여주는 페이지
export default function Members() {

  type MemberKey = "민지" | "하니" | "다니엘" | "해린" | "혜인";

  const [selected, setSelected] = useState<MemberKey | null>(null);

  // 멤버들 정보
  const members: Record<MemberKey, { description: string[]; img: string }> = {
    민지: { description: ["출생일: 2004년 5월 7일","출생지: 대한민국 강원도 춘천","데뷔: 2022년 7월 22일","포지션 : 보컬 & 랩","브랜드 모델: 샤넬 하우스 앰버서더","MBTI: ESTJ","키: 169cm","별명 : 곰아지", "취향 : 책읽기, 다이어리 꾸미기를 좋아한다"], img: "/Minji.jpg" },
    하니: { description: ["출생일: 2004년 10월 6일","출생지: 호주 빅토리아주 멜버른","포지션 : 보컬 & 댄스","데뷔: 2022년 7월 22일","브랜드 모델: 구찌 글로벌 앰버서더","MBTI: INFP","키: 162cm","별명 : 팜하니","취향 : 영화보는것을 좋아한다"], img: "/Hanni.jpeg" },
    다니엘:{ description: ["출생일: 2005년 4월 11일","출생지: 호주 뉴사우스웨일스주 뉴캐슬","포지션 : 보컬 & 댄스","데뷔: 2022년 7월 22일","브랜드 모델: 버버리 글로벌 앰버서더","MBTI: ENFP","키: 165cm","별명 : 모다니","취향 : 디즈니 영화들을 좋아한다"], img: "/Danielle.png" },
    해린: { description: ["출생일: 2006년 5월 15일","출생지: 대한민국 서울특별시 동작구","포지션 : 보컬 & 댄스","데뷔: 2022년 7월 22일","브랜드 모델: 디올 글로벌 앰버서더","MBTI: INTP","키: 164.5cm","별명 : 아기고양이","취향 : 노래 듣는것을 좋아한다"], img: "/Haerin.png" },
    혜인: { description: ["출생일: 2008년 4월 21일","출생지: 대한민국 인천광역시 남구 문학동","포지션 : 보컬 & 랩","데뷔: 2022년 7월 22일","브랜드 모델: 루이비통 하우스 앰버서더","MBTI: ISFP","키: 170cm","별명 : 혠스터","취향 : 산책하기,사진찍기,영화보기를 좋아한다"], img: "/Hyein.jpg" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-300 to-cyan-300 flex flex-col items-center px-6 py-24 space-y-12 justify-center">
      {/*<nav className="flex items-center p-4 bg-gradient-to-r from-blue-300 to-blue-100 rounded-xl shadow-md"> */}
      {/* 아무것도 안했을 때 보이는 페이지 */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-12 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 drop-shadow-lg ">
        뉴진스 멤버들 페이지❤️
      </h1>

      <div className="max-w-7xl w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">

        {/* 민지 카드 */}
        <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center transform hover:scale-[1.02] cursor-pointer" onClick={() => setSelected("민지")}>
          <img src="/Minji.jpg" alt="Minji" className="w-40 h-40 rounded-full mb-6 object-cover border-3 border-blue-500" />
          <h3 className="text-2xl font-extrabold text-gray-800 mb-1">🐻민지</h3>
          <p className="text-blue-600 font-medium">맏언니 & 리더</p>
        </div>

        {/* 하니 카드 */}
        <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center transform hover:scale-[1.02] cursor-pointer" onClick={() => setSelected("하니")}>
          <img src="/Hanni.jpeg" alt="Hanni" className="w-40 h-40 rounded-full mb-6 object-cover border-3 border-blue-500" />
          <h3 className="text-2xl font-extrabold text-gray-800 mb-1">🦦하니</h3>
          <p className="text-blue-600 font-medium">보컬 & 댄스</p>
        </div>

        {/* 다니엘 카드 */}
        <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center transform hover:scale-[1.02] cursor-pointer" onClick={() => setSelected("다니엘")}>
          <img src="/Danielle.png" alt="Daniel" className="w-40 h-40 rounded-full mb-6 object-cover border-3 border-blue-500" />
          <h3 className="text-2xl font-extrabold text-gray-800 mb-1">🐶다니엘</h3>
          <p className="text-blue-600 font-medium">보컬 & 댄스</p>
        </div>

        {/* 해린 카드 */}
        <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center transform hover:scale-[1.02] cursor-pointer" onClick={() => setSelected("해린")}>
          <img src="/Haerin.png" alt="Haerin" className="w-40 h-40 rounded-full mb-6 object-cover border-3 border-blue-500" />
          <h3 className="text-2xl font-extrabold text-gray-800 mb-1">😺해린</h3>
          <p className="text-blue-600 font-medium">보컬 & 댄스</p>
        </div>

        {/* 혜인 카드 */}
        <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center transform hover:scale-[1.02] cursor-pointer" onClick={() => setSelected("혜인")}>
          <img src="/Hyein.jpg" alt="Hyein" className="w-40 h-40 rounded-full mb-6 object-cover border-4 border-blue-500" />
          <h3 className="text-2xl font-extrabold text-gray-800 mb-1">🐹혜인</h3>
          <p className="text-blue-600 font-medium">막내 & 보컬</p>
        </div>
      </div>
      {/* 멤버들 클릭했을 때 모달 띄워주기 */}
      {selected && (
        <div className="fixed inset-0 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full border-sky-300 border-2" onClick={(e) => e.stopPropagation()}>
            <img src={members[selected].img} alt={selected} className="w-40 h-40 rounded-full mb-4 mx-auto border-gray-500 border-3"/>
            <h2 className="text-3xl font-bold mb-4 text-center">{selected}</h2>
            {/* 멤버들 map 함수로 효율적이게 화면에 띄우기 */}
            <ul className="list-disc list-inside space-y-2">
              {members[selected].description.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 p-2 rounded-lg transition-all duration-200 hover:bg-sky-50 hover:scale-[1.02]">
                  <BsSearchHeartFill className="text-pink-400 text-base" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 px-6 py-2 bg-pink-400 text-white font-semibold rounded-full block mx-auto hover:bg-pink-500 transition-colors" onClick={() => setSelected(null)}>
              닫기
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
