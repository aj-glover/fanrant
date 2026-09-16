import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function NflTeams() {
  const navigate = useNavigate();
  const teams = [
    { id: '1', name: 'Cardinals', abbr: 'ARI', color: '#97233F' },
    { id: '2', name: 'Falcons', abbr: 'ATL', color: '#A71930' },
    { id: '3', name: 'Ravens', abbr: 'BAL', color: '#241773' },
    { id: '4', name: 'Bills', abbr: 'BUF', color: '#00338D' },
    { id: '5', name: 'Panthers', abbr: 'CAR', color: '#0085CA' },
    { id: '6', name: 'Bears', abbr: 'CHI', color: '#0B162A' },
    { id: '7', name: 'Bengals', abbr: 'CIN', color: '#FB4F14' },
    { id: '8', name: 'Browns', abbr: 'CLE', color: '#311D00' },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a1628] pb-24">
      <div className="sticky top-0 z-20 bg-[#0a1628]/95 backdrop-blur-xl border-b border-white/[0.06] safe-area-top">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          <button onClick={() => navigate('/sports')} className="w-11 h-11 rounded-full bg-white/[0.05] flex items-center justify-center text-white hover:bg-white/10 active:bg-white/15 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
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
        <div className="mb-6">
          <h1 className="text-4xl font-black text-white uppercase tracking-tight leading-none mb-2">NFL Teams</h1>
          <p className="text-base text-white/50">32 teams across the league</p>
        </div>
        <div className="mb-8">
          <div className="relative">
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder="Search NFL Teams" className="w-full pl-14 pr-5 py-4 bg-white/[0.05] border-2 border-white/10 rounded-full text-white placeholder-white/30 focus:border-white/30 focus:outline-none transition-colors text-base" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {teams.map((team) => (
            <button key={team.id} onClick={() => navigate(`/team/${team.id}`)} className="group flex flex-col items-center p-5 rounded-3xl bg-white/[0.03] border-2 border-white/[0.08] hover:bg-white/[0.06] hover:border-white/20 transition-all">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-lg" style={{ backgroundColor: team.color }}>
                <span className="text-lg font-black text-white">{team.abbr}</span>
              </div>
              <h3 className="text-base font-bold text-white text-center">{team.name}</h3>
            </button>
          ))}
        </div>
      </div>
      <BottomNav active="scores" />
    </div>
  );
}
