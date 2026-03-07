export default function Food({ input1 }) {
  const food = [
    {
      id: 1,
      url: "https://play-lh.googleusercontent.com/mn_8bXJbRJdE4BJlBjx66MvpT5ZH4Re7vsf8wtVCVaoyo2cuZ80c7FVdWMoECazGVQ",
      name: "Zomato",
    },
    {
      id: 2,
      url: "https://img.icons8.com/doodle/1200/swiggy.jpg",
      name: "Swiggy",
    },
    {
      id: 3,
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/250px-Domino%27s_pizza_logo.svg.png",
      name: "Domino's Pizza",
    },
    {
      id: 4,
      url: "https://img.icons8.com/color/1200/uber-eats.jpg",
      name: "Uber Eats",
    },
    {
      id: 5,
      url: "https://img.icons8.com/color/1200/instacart.jpg",
      name: "Instacart",
    },
    {
      id: 6,
      url: "https://play-lh.googleusercontent.com/Blc1g08q37WRK-Rjk9cgJvpL9P5N1mb7o1Ti03Iw99dNuI9K91qFZLg0pYfX_kvtkHg",
      name: "Saucey",
    },
    {
      id: 7,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cQjRaFeDacpO1-TIFRhHfuxYYrvmI860Vg&s",
      name: "Waitr",
    },
    {
      id: 8,
      url: "https://img.icons8.com/color/1200/grubhub.jpg",
      name: "Grubhub",
    },
    {
      id: 9,
      url: "https://dye1fo42o13sl.cloudfront.net/logos/04212021/SVGMercato/mercato-white.svg",
      name: "Mercato",
    },
    {
      id: 10,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzxLe6hd7IEm6egsO3S13UOxiz36PgBaoVaQ&s",
      name: "DoorDash",
    },
  ];

  const foods = food.filter((e) =>
    e.name.toLowerCase().includes((input1 || "").toLowerCase()),
  );

  const displayItems = input1 ? foods : food;

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
