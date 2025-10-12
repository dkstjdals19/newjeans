

export default function Mv() {

  
  const MusicVideos = [
    { title: "New Jeans", ytUrl: "https://img.youtube.com/vi/kcelgrGY1h8/hqdefault.jpg", id:"kcelgrGY1h8" },
    { title: "Ditto", ytUrl: "https://img.youtube.com/vi/Km71Rr9K-Bw/hqdefault.jpg", id:"Km71Rr9K-Bw"  },
    { title: "Super Shy", ytUrl: "https://img.youtube.com/vi/ArmDp-zijuc/hqdefault.jpg", id:"ArmDp-zijuc" },
    { title: "OMG", ytUrl: "https://img.youtube.com/vi/sVTy_wmn5SU/hqdefault.jpg", id:"sVTy_wmn5SU" },
    { title: "Hype Boy", ytUrl: "https://img.youtube.com/vi/11cta61wi0g/hqdefault.jpg", id:"11cta61wi0g" },
    { title: "How Sweet", ytUrl: "https://img.youtube.com/vi/Q3K0TOvTOno/hqdefault.jpg", id:"Q3K0TOvTOno" },
    { title: "ETA", ytUrl: "https://img.youtube.com/vi/jOTfBlKSQYY/hqdefault.jpg", id:"jOTfBlKSQYY" },
    { title: "Supernatural", ytUrl: "https://img.youtube.com/vi/ZncbtRo7RXs/hqdefault.jpg", id:"ZncbtRo7RXs" },
    { title: "Attention", ytUrl: "https://img.youtube.com/vi/js1CtxSY38I/hqdefault.jpg", id:"js1CtxSY38I" },
    { title: "Bubble Gum", ytUrl: "https://img.youtube.com/vi/ft70sAYrFyY/hqdefault.jpg", id:"ft70sAYrFyY" },
    { title: "Get Up", ytUrl: "https://img.youtube.com/vi/6CDELCElBtE/hqdefault.jpg", id:"6CDELCElBtE" },
    { title: "Zero", ytUrl: "https://img.youtube.com/vi/XIOoqJyx8E4/hqdefault.jpg", id:"XIOoqJyx8E4" },
    { title: "Cool With You", ytUrl: "https://img.youtube.com/vi/zsYSSVoQnP4/hqdefault.jpg", id:"zsYSSVoQnP4" },
    { title: "ASAP", ytUrl: "https://img.youtube.com/vi/dJdqn5v4Dkw/hqdefault.jpg", id:"dJdqn5v4Dkw" },
    { title: "Right Now", ytUrl: "https://img.youtube.com/vi/m6pTbEz4w3o/hqdefault.jpg", id:"m6pTbEz4w3o" },
    { title: "Hurt", ytUrl: "https://img.youtube.com/vi/tVIXY14aJms/hqdefault.jpg", id: "tVIXY14aJms"},
    { title: "Cookie", ytUrl: "https://img.youtube.com/vi/VOmIplFAGeg/hqdefault.jpg", id:"VOmIplFAGeg" },
    { title: "Gods", ytUrl: "https://img.youtube.com/vi/C3GouGa0noM/hqdefault.jpg", id:"C3GouGa0noM" }
  ];


  return (
  <div>
  <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center text-pink-500 mb-12 tracking-tight drop-shadow-lg">
    뉴진스 뮤비 페이지
  </h1>

  <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
    {MusicVideos.map((video) => (
      <div
        key={video.ytUrl} // YouTube ID를 key로 사용
        className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
      >
        <h3 className="text-gray-800 text-lg font-bold mb-2 text-center">{video.title}</h3>
        <img
          src={video.ytUrl}
          alt={video.title}
          className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-lg mb-2 hover:scale-105 transition-transform duration-300"
        />
        <a
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-4 py-2 bg-pink-400 text-white font-semibold rounded-full shadow-md hover:bg-pink-500 transition duration-300"
        >
          유튜브로 보러가기
        </a>
      </div>
    ))}
  </div>
</div>

    
    
  );
}
