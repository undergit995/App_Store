import { useState } from "react";
import Search from "./Component/Search/Search";
import Social from "./Component/Social/Social";
import Food from "./Component/Food/Food";
import Games from "./Component/Games/Games";
import News from "./Component/News/News";

function App() {
  const nav = [
    { id: 1, name: "Social" },
    { id: 2, name: "Games" },
    { id: 3, name: "News" },
    { id: 4, name: "Food" },
  ];

  const [input1, setinput1] = useState("");

  
  const UI = [
    { id: 1, name: <Social input1={input1} /> },
    { id: 2, name: <Games input1={input1} /> },
    { id: 3, name: <News input1={input1} /> },
    { id: 4, name: <Food input1={input1} /> },
  ];

  const [store, setstore] = useState(1);

  function funStore(e) {
    setstore(e);
  }

  const appstore = UI.filter((e) => e.id === store);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-500 flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-white mb-8 drop-shadow-lg">
        App Store
      </h2>

      <input
        className="w-86 p-4 border-2 border-white/50 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder-white/80 text-center text-xl focus:outline-none  focus:ring-white/30 mb-8 shadow-2xl"
        type="text"
        placeholder="Search apps..."
        value={input1}
        onChange={(e) => setinput1(e.target.value)}
      />

      <ul className="flex gap-4 mb-12">
        {nav.map((value, index) => (
          <Search key={index} app={value} storeid={store} funStore={funStore} />
        ))}
      </ul>

      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
        {appstore.map((e) => (
          <div key={e.id}>{e.name}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
