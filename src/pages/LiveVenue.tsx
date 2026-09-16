import { useNavigate } from 'react-router-dom';

export default function LiveVenue() {
  const navigate = useNavigate();

  const restrooms = [
    { id: '1', location: 'Section 118 - Women', available: 6, total: 8, waitTime: '1 min', status: 'low' },
    { id: '2', location: 'Section 118 - Men', available: 4, total: 6, waitTime: '2 min', status: 'low' },
    { id: '3', location: 'Section 212 - Women', available: 2, total: 8, waitTime: '5 min', status: 'medium' },
    { id: '4', location: 'Section 212 - Men', available: 1, total: 6, waitTime: '8 min', status: 'high' },
  ];

  const concessions = [
    { id: '1', name: 'Burger Stand', location: 'Section 115', waitTime: '3 min', queue: 12, status: 'low' },
    { id: '2', name: 'BBQ House', location: 'Section 212', waitTime: '8 min', queue: 24, status: 'medium' },
    { id: '3', name: 'Pizza Place', location: 'Section 305', waitTime: '12 min', queue: 35, status: 'high' },
    { id: '4', name: 'Hot Dogs', location: 'Section 118', waitTime: '2 min', queue: 8, status: 'low' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'low': return 'text-green-400 bg-green-500/10 border-green-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'high': return 'text-red-400 bg-red-500/10 border-red-500/20';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a1628] pb-24">
      <div className="sticky top-0 z-20 bg-[#0a1628]/95 backdrop-blur-xl border-b border-white/[0.06] safe-area-top">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          <button onClick={() => navigate(-1)} className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center text-white hover:bg-white/10 active:bg-white/15 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18 3a1 1 0 00-1 1v16a1 1 0 001.55.832l3-2A1 1 0 0022 18V6a1 1 0 00-.45-.832l-3-2A1 1 0 0018 3zM3 7a1 1 0 011-1h4a5 5 0 015 5v2a5 5 0 01-5 5H4a1 1 0 01-1-1V7zm1 2v6h3a3 3 0 003-3V9a3 3 0 00-3-3H4z" /></svg>
            </div>
            <span className="text-lg font-black text-white tracking-tight lowercase">fanrant</span>
          </div>
          <div className="w-12" />
        </div>
      </div>

      <div className="relative z-10 px-6 pt-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-black text-white uppercase tracking-tight leading-none">Live Venue</h1>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border-2 border-red-500/30">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-black text-red-400 uppercase tracking-wider">Live</span>
            </div>
          </div>
          <p className="text-base text-white/50">Real-time wait times & availability</p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="p-4 rounded-2xl bg-white/[0.03] border-2 border-white/[0.06] text-center">
            <div className="text-2xl font-black text-green-400">42</div>
            <div className="text-xs text-white/40 uppercase tracking-wider mt-1">Stalls Open</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border-2 border-white/[0.06] text-center">
            <div className="text-2xl font-black text-yellow-400">5</div>
            <div className="text-xs text-white/40 uppercase tracking-wider mt-1">Avg Wait</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border-2 border-white/[0.06] text-center">
            <div className="text-2xl font-black text-cyan-400">5</div>
            <div className="text-xs text-white/40 uppercase tracking-wider mt-1">Concessions</div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">Restrooms</h2>
          <div className="space-y-3">
            {restrooms.map((restroom) => (
              <div key={restroom.id} className="p-4 rounded-2xl bg-white/[0.03] border-2 border-white/[0.06]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white mb-1">{restroom.location}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-white/60">{restroom.available}/{restroom.total} available</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1.5 rounded-full border-2 ${getStatusColor(restroom.status)}`}>
                    <span className="text-xs font-black uppercase tracking-wider">{restroom.waitTime}</span>
                  </div>
                </div>
                <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all ${restroom.status === 'low' ? 'bg-green-500' : restroom.status === 'medium' ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${(restroom.available / restroom.total) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">Concessions</h2>
          <div className="space-y-3">
            {concessions.map((concession) => (
              <div key={concession.id} className="p-4 rounded-2xl bg-white/[0.03] border-2 border-white/[0.06]">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white mb-1">{concession.name}</h3>
                    <p className="text-sm text-white/60">{concession.location}</p>
                  </div>
                  <div className={`px-3 py-1.5 rounded-full border-2 ${getStatusColor(concession.status)}`}>
                    <span className="text-xs font-black uppercase tracking-wider">{concession.waitTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span>{concession.queue} people in line</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
