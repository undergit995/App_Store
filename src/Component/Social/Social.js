
export default function Social({input1}) {
    
      const social = [
  { id: 1,  url: "https://img.icons8.com/color/1200/facebook-new.jpg",      name: "Facebook" },        
  { id: 2,  url: "https://img.icons8.com/color/1200/instagram-new--v1.jpg", name: "Instagram" },       
  { id: 3,  url: "https://img.icons8.com/color/1200/facebook-messenger.jpg",name: "Messenger" },
  { id: 4,  url: "https://img.icons8.com/color/1200/whatsapp--v1.jpg",      name: "WhatsApp" },        
  { id: 5,  url: "https://img.icons8.com/color/1200/snapchat.jpg",          name: "Snapchat" },
  { id: 6,  url: "https://img.icons8.com/color/1200/twitterx--v1.jpg",      name: "Twitter (X)" },     
  { id: 7,  url: "https://img.icons8.com/color/1200/tiktok--v1.jpg",        name: "TikTok" },          
  { id: 8,  url: "https://img.icons8.com/color/1200/linkedin.jpg",          name: "LinkedIn" },        
  { id: 9,  url: "https://img.icons8.com/color/1200/pinterest--v1.jpg",     name: "Pinterest" },       
  { id: 10, url: "https://img.icons8.com/color/1200/reddit.jpg",            name: "Reddit" }
];



  const socials=social.filter((e)=>(
    e.name.toLowerCase().includes(input1.toLowerCase())
  ))
  const displayItems=input1? socials:social


  return (
    <div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
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
    </div>
  )
}
