export default function Music() {
  const songs = [
    { title: "New Jeans", embedUrl: "https://open.spotify.com/embed/track/6rdkCkjk6D12xRpdMXy0I2?utm_source=generator" },
    { title: "Ditto", embedUrl: "https://open.spotify.com/embed/track/3r8RuvgbX9s7ammBn07D3W?utm_source=generator" },
    { title: "Super Shy", embedUrl: "https://open.spotify.com/embed/track/5sdQOyqq2IDhvmx2lHOpwd?utm_source=generator" },
    { title: "OMG", embedUrl: "https://open.spotify.com/embed/track/65FftemJ1DbbZ45DUfHJXE?utm_source=generator" },
    { title: "Hype Boy", embedUrl: "https://open.spotify.com/embed/track/0a4MMyCrzT0En247IhqZbD?utm_source=generator" },
    { title: "How Sweet", embedUrl: "https://open.spotify.com/embed/track/38tXZcL1gZRfbqfOG0VMTH?utm_source=generator" },
    { title: "ETA", embedUrl: "https://open.spotify.com/embed/track/56v8WEnGzLByGsDAXDiv4d?utm_source=generator" },
    { title: "Supernatural", embedUrl: "https://open.spotify.com/embed/track/5ocSQW5sIUIOFojwXEz9Ki?utm_source=generator" },
    { title: "Attention", embedUrl: "https://open.spotify.com/embed/track/2pIUpMhHL6L9Z5lnKxJJr9?utm_source=generator" },
    { title: "Bubble Gum", embedUrl: "https://open.spotify.com/embed/track/19D8LNpWwIPpi6hs9BG7dq?utm_source=generator" },
    { title: "Get Up", embedUrl: "https://open.spotify.com/embed/track/1wUnuiXMMvhudmzvcCtlZP?utm_source=generator" },
    { title: "Zero", embedUrl: "https://open.spotify.com/embed/track/5LMoKDVzW2kDneNu2UbspP?utm_source=generator" },
    { title: "Cool With You", embedUrl: "https://open.spotify.com/embed/track/02wk5BttM0QL38ERjLPQJB?utm_source=generator" },
    { title: "ASAP", embedUrl: "https://open.spotify.com/embed/track/5fpyAakgFOm4YTXkgfPzvV?utm_source=generator" },
    { title: "Right Now", embedUrl: "https://open.spotify.com/embed/track/58Q3FZFs1YXPpliWQB5kXB?utm_source=generator" },
    { title: "Hurt", embedUrl: "https://open.spotify.com/embed/track/5expoVGQPvXuwBBFuNGqBd?utm_source=generator" },
    { title: "Cookie", embedUrl: "https://open.spotify.com/embed/track/2DwUdMJ5uxv20EhAildreg?utm_source=generator" },
    { title: "Gods", embedUrl: "https://open.spotify.com/embed/track/62J3LcwTASdo624WsF3L6k?utm_source=generator" }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-teal-50 py-12">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center text-pink-500 mb-12 tracking-tight drop-shadow-lg">
        뉴진스 음악 페이지
      </h1>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {songs.map((song, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <h3 className="text-gray-800 text-lg font-bold mb-2 text-center">{song.title}</h3>
              <iframe
                src={song.embedUrl}
                width="100%"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
