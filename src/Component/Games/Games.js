export default function Games({ input1 }) {
  const game = [
    {
      id: 1,
      url: "https://img.icons8.com/color/1200/subway-surfers.jpg",
      name: "Subway Surfers",
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wMfG1MFFI9VW_4FIBTNb62CmjurbZeug8oLRP0CbAw&s",
      name: "Crossy Road",
    },
    {
      id: 3,
      url: "https://img.icons8.com/?size=160&id=NDj9mugFLidA&format=png",
      name: "Angry Birds",
    },
    {
      id: 4,
      url: "https://img.icons8.com/?size=160&id=b81NXcL1rAtf&format=png",
      name: "Temple Run",
    },
    {
      id: 5,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXhOy9Lo7h2BzxN-rxxOsquVrENYT9j9QSyA&s",
      name: "Hill Climb 2",
    },
    {
      id: 6,
      url: "https://img.icons8.com/?size=96&id=KyOh76bc3dny&format=png",
      name: "My Talking Tom",
    },
    {
      id: 7,
      url: "https://img.icons8.com/?size=64&id=63638&format=png",
      name: "PUBG Mobile",
    },
    {
      id: 8,
      url: "https://play-lh.googleusercontent.com/JvMhIxuwArVmcMReJQB8PIEB1MIQNMGf9j5i914JtkBrHrA55K-nMUIVlYCa7SXAdHtzLtsycEo6NpXeHFxLwvI",
      name: "Candy Crush",
    },
    {
      id: 9,
      url: "https://play-lh.googleusercontent.com/sFmWfYbYp_2ea7VRMTnwd3gjIBrPGXHj_d_ab1_k1q1p2OMk4riGMF1vqxdhONOtTYOt_BVpk7a4AYcKU68LNGQ",
      name: "Clash of Clans",
    },
    {
      id: 10,
      url: "https://play-lh.googleusercontent.com/hXSJ_2koqdr_Uxdnd_P0HxDjR2tXEJ2rI1AEeHr8-I33a-75_v8l_i61tpAJ-CYxhLPQA-3YxYAVE_ro7uG0",
      name: "Mobile Legends",
    },
  ];

  const games = game.filter((e) =>
    e.name.toLowerCase().includes(input1.toLowerCase()),
  );
  const displayItems = input1 ? games : game;
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
