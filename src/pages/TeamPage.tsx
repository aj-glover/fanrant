import { useParams, useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function TeamPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const teams: Record<string, { name: string; abbr: string; color: string; city: string; record: string; division: string; stadium: string }> = {
    '1': { name: 'Philadelphia Eagles', abbr: 'PHI', color: '#004C54', city: 'Philadelphia, PA', record: '13-3', division: '1st in NFC East', stadium: 'Lincoln Financial Field' },
    '2': { name: 'Dallas Cowboys', abbr: 'DAL', color: '#003594', city: 'Arlington, TX', record: '12-4', division: '1st in NFC East', stadium: 'AT&T Stadium' },
    '3': { name: 'Kansas City Chiefs', abbr: 'KC', color: '#E31837', city: 'Kansas City, MO', record: '14-3', division: '1st in AFC West', stadium: 'GEHA Field' },
  };

  const team = teams[id || '1'] || teams['1'];
  const schedule = [
    { opponent: 'NYG', score: '28-14', result: 'W' },
    { opponent: 'DAL', score: '35-21', result: 'W' },
    { opponent: 'WAS', score: '17-20', result: 'L' },
    { opponent: 'CHI', score: '42-7', result: 'W' },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a1628] pb-24">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004C54] via-[#003a42] to-[#001f24]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 40px)` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
        <button onClick={() => navigate(-1)} className="absolute top-14 left-6 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 active:bg-black/60 transition-colors z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-4xl font-black text-white uppercase tracking-tight leading-none">{team.name}</h1>
        </div>
      </div>

      <div className="relative z-10 px-6 -mt-4">
        <div className="p-4 rounded-2xl bg-white/[0.05] border-2 border-white/[0.08] mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-black text-white">{team.record}</div>
              <div className="text-sm text-white/60">{team.division}</div>
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: team.color }}>
              <span className="text-sm font-black text-white">{team.abbr}</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xs text-white/40 uppercase tracking-widest font-bold mb-3">Recent Games</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {schedule.map((game, i) => (
              <div key={i} className={`flex-shrink-0 w-20 p-3 rounded-2xl text-center ${game.result === 'W' ? 'bg-green-500/10 border-2 border-green-500/20' : 'bg-red-500/10 border-2 border-red-500/20'}`}>
                <div className="text-xs text-white/40 mb-1">vs {game.opponent}</div>
                <div className={`text-sm font-black ${game.result === 'W' ? 'text-green-400' : 'text-red-400'}`}>{game.score}</div>
                <div className={`text-xs font-bold mt-1 ${game.result === 'W' ? 'text-green-400' : 'text-red-400'}`}>{game.result}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xs text-white/40 uppercase tracking-widest font-bold mb-3">Quick Access</h3>
          <div className="grid grid-cols-3 gap-3">
            <button onClick={() => navigate('/order-food')} className="p-4 rounded-2xl bg-cyan-500/10 border-2 border-cyan-500/20 hover:bg-cyan-500/20 transition-all text-center">
              <span className="text-3xl mb-2 block">🍔</span>
              <h3 className="text-xs font-bold text-white uppercase tracking-wide">Order Food</h3>
            </button>
            <button onClick={() => navigate('/live-venue')} className="p-4 rounded-2xl bg-red-500/10 border-2 border-red-500/20 hover:bg-red-500/20 transition-all text-center relative">
              <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/30 border border-red-500/40">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[8px] font-black text-red-400 uppercase">Live</span>
              </div>
              <span className="text-3xl mb-2 block">🚻</span>
              <h3 className="text-xs font-bold text-white uppercase tracking-wide">Wait Times</h3>
            </button>
            <button onClick={() => navigate('/stadium-map')} className="p-4 rounded-2xl bg-green-500/10 border-2 border-green-500/20 hover:bg-green-500/20 transition-all text-center">
              <span className="text-3xl mb-2 block">🗺️</span>
              <h3 className="text-xs font-bold text-white uppercase tracking-wide">Map</h3>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { icon: '📊', label: 'Stats' },
            { icon: '👥', label: 'Roster' },
            { icon: '📋', label: 'Depth Chart' },
            { icon: '🔄', label: 'Transactions' },
            { icon: '📰', label: 'Blog' },
            { icon: '🎫', label: 'Tickets' },
          ].map((tile) => (
            <button key={tile.label} className="p-5 rounded-2xl bg-white/[0.05] border-2 border-white/[0.08] hover:bg-white/10 transition-all text-center">
              <span className="text-2xl mb-2 block">{tile.icon}</span>
              <h3 className="text-xs font-bold text-white uppercase tracking-wide">{tile.label}</h3>
            </button>
          ))}
        </div>

        <div className="p-5 rounded-2xl bg-white/[0.05] border-2 border-white/[0.08]">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs text-white/40 uppercase tracking-widest font-bold">Home Stadium</h3>
            <button onClick={() => navigate('/venues')} className="text-xs text-cyan-400 font-bold">View →</button>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center"><span className="text-2xl">🏟️</span></div>
            <div>
              <p className="text-lg font-bold text-white">{team.stadium}</p>
              <p className="text-sm text-white/40">{team.city}</p>
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="profile" />
    </div>
  );
}
