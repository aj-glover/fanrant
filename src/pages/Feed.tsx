import BottomNav from '../components/BottomNav';

export default function Feed() {
  const featuredArticles = [
    { id: '1', title: 'Chiefs Secure #1 Seed in AFC', category: 'NFL', time: '2h ago', color: 'from-red-600 to-yellow-500' },
    { id: '2', title: 'Josh Allen Wins AFC Offensive Player of the Week', category: 'Bills', time: '4h ago', color: 'from-blue-700 to-red-600' },
  ];

  const recentNews = [
    { id: '3', title: 'Divisional Round matchups set for next weekend', time: '5h ago', category: 'NFL' },
    { id: '4', title: 'Restroom update: Section 212 now has 6 stalls available', time: '6h ago', category: 'Live' },
    { id: '5', title: 'Parking Lot A is full. Lot C has 234 spots available', time: '7h ago', category: 'Live' },
    { id: '6', title: 'Mahomes throws for 350 yards and 3 TDs', time: '8h ago', category: 'NFL' },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a1628] pb-24">
      <div className="sticky top-0 z-20 bg-[#0a1628]/95 backdrop-blur-xl border-b border-white/[0.06] safe-area-top">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          <button className="w-11 h-11 rounded-full bg-white/[0.05] flex items-center justify-center text-white hover:bg-white/10 active:bg-white/15 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18 3a1 1 0 00-1 1v16a1 1 0 001.55.832l3-2A1 1 0 0022 18V6a1 1 0 00-.45-.832l-3-2A1 1 0 0018 3zM3 7a1 1 0 011-1h4a5 5 0 015 5v2a5 5 0 01-5 5H4a1 1 0 01-1-1V7zm1 2v6h3a3 3 0 003-3V9a3 3 0 00-3-3H4z" /></svg>
            </div>
            <span className="text-lg font-black text-white tracking-tight lowercase">fanrant</span>
          </div>
          <button className="w-11 h-11 rounded-full bg-white/[0.05] flex items-center justify-center text-white hover:bg-white/10 active:bg-white/15 transition-colors relative">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 3a1 1 0 00-1 1v16a1 1 0 001.55.832l3-2A1 1 0 0022 18V6a1 1 0 00-.45-.832l-3-2A1 1 0 0018 3zM3 7a1 1 0 011-1h4a5 5 0 015 5v2a5 5 0 01-5 5H4a1 1 0 01-1-1V7zm1 2v6h3a3 3 0 003-3V9a3 3 0 00-3-3H4z" /></svg>
            <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-[#0a1628]" />
          </button>
        </div>
      </div>

      <div className="relative z-10 px-6 pt-8">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-white uppercase tracking-tight leading-none mb-2">Feed</h1>
          <p className="text-base text-white/50">Latest news & updates</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">Featured</h2>
          <div className="space-y-4">
            {featuredArticles.map((article) => (
              <div key={article.id} className="group relative rounded-3xl overflow-hidden border-2 border-white/[0.08] hover:border-white/20 transition-all cursor-pointer">
                <div className={`h-48 bg-gradient-to-br ${article.color} relative`}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)` }} />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] text-white font-black uppercase tracking-widest bg-white/20 px-2 py-1 rounded-full">{article.category}</span>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight mt-2 leading-tight">{article.title}</h3>
                    <p className="text-xs text-white/60 mt-2">{article.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">Recent News</h2>
          <div className="space-y-2">
            {recentNews.map((news) => (
              <div key={news.id} className="p-4 rounded-2xl bg-white/[0.03] border-2 border-white/[0.06] hover:bg-white/[0.05] transition-all cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white leading-tight mb-1">{news.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-cyan-400 font-bold">{news.category}</span>
                      <span className="text-xs text-white/40">• {news.time}</span>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-white/20 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="feed" />
    </div>
  );
}
