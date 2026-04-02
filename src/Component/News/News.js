

export default function News({ input1 }) {
  const news = [
    {
      id: 1,
      url: "https://img.icons8.com/color/1200/google-news.jpg",
      name: "Google News",
    },
    {
      id: 2,
      url: "https://images.icon-icons.com/70/PNG/512/bbc_news_14062.png",
      name: "BBC News",
    },
    { id: 3, url: "https://img.icons8.com/color/1200/cnn.jpg", name: "CNN" },
    {
      id: 4,
      url: "https://play-lh.googleusercontent.com/hd-zjb0kvaVWufm0SEsant8zt0-HS_0tUMv79m2onY_wpkdrAArYV8oZ0vQPiMolpPIa",
      name: "Inshorts",
    },
    {
      id: 5,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwur2ylj3S8ESz2bbYTswCAGPpQUD7CYboeA&s",
      name: "Way2News",
    },
    {
      id: 6,
      url: "https://img.icons8.com/color/1200/twitterx.jpg",
      name: "X News",
    },
    {
      id: 7,
      url: "https://avatars.githubusercontent.com/u/8807928?s=280&v=4",
      name: "SmartNews",
    },
    {
      id: 8,
      url: "https://play-lh.googleusercontent.com/iTahFdenu9eMKQmLkiu-MM6QmEz4gGV11mXIi_ozsKkxI5b4XE3fU1xzsR8WvW1M_w",
      name: "Flipboard",
    },
    {
      id: 9,
      url: "https://getlogovector.com/wp-content/uploads/2021/07/news18-logo-vector.png",
      name: "News18",
    },
    {
      id: 10,
      url: "https://play-lh.googleusercontent.com/hob_fdd8pV3AI8K2rv49MumzgdqmBcYW8BfuquYzGtFpsDu-JabZmvZhxm8oNNIX3bg",
      name: "DailyHunt",
    },
  ];

  const newss = news.filter((e) =>
    e.name.toLowerCase().includes(input1.toLowerCase()),
  );

  const displayItems = input1 ? newss : news;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displayItems.map((e) => (
        <div
          key={e.id}
          className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-300 border border-white/30 cursor-pointer"
        >
          <div className="w-20 h-20 bg-gray-200/50 rounded-2xl mx-auto mb-4 flex items-center justify-center overflow-hidden ">
            <img
              src={e.url}
              alt={e.name}
              className="w-12 h-12 object-contain "
              loading="lazy"
            />
          </div>
          <p className="text-white font-semibold text-lg">{e.name}</p>
        </div>
      ))}
    </div>
  );
}
