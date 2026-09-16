import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function Venues() {
  const navigate = useNavigate();
  const venues = [
    { id: '1', name: 'MetLife Stadium', city: 'East Rutherford, NJ', color: 'from-green-700 to-green-900' },
    { id: '2', name: 'Yankee Stadium', city: 'Bronx, NY', color: 'from-blue-700 to-blue-900' },
    { id: '3', name: 'Wrigley Field', city: 'Chicago, IL', color: 'from-blue-600 to-red-700' },
    { id: '4', name: 'Lambeau Field', city: 'Green Bay, WI', color: 'from-yellow-600 to-green-800' },
    { id: '5', name: 'TD Garden', city: 'Boston, MA', color: 'from-black to-green-800' },
    { id: '6', name: 'The Linc', city: 'Philadelphia, PA', color: 'from-green-600 to-green-900' },
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
          <h1 className="text-4xl font-black text-white uppercase tracking-tight leading-none mb-2">Venues</h1>
          <p className="text-base text-white/50">Explore iconic stadiums</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {venues.map((venue) => (
            <button key={venue.id} onClick={() => navigate(`/team/1`)} className="group relative aspect-square rounded-3xl overflow-hidden border-2 border-white/[0.08] hover:border-white/20 transition-all">
              <div className={`absolute inset-0 bg-gradient-to-br ${venue.color}`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)` }} />
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-30"><span className="text-6xl">🏟️</span></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-base font-black text-white uppercase tracking-tight leading-tight">{venue.name}</h3>
                <p className="text-xs text-white/60 mt-1">{venue.city}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <BottomNav active="photos" />
    </div>
  );
}
