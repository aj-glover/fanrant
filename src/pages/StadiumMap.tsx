import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BottomNav from '../components/BottomNav';

export default function StadiumMap() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All', icon: '🗺️' },
    { id: 'restroom', label: 'Restrooms', icon: '🚻' },
    { id: 'concession', label: 'Food', icon: '🍔' },
    { id: 'entrance', label: 'Entrances', icon: '🚪' },
    { id: 'parking', label: 'Parking', icon: '🅿️' },
  ];

  const locations = [
    { id: '1', type: 'restroom', name: 'Restroom A', section: '118', x: 25, y: 30, status: 'low' },
    { id: '2', type: 'restroom', name: 'Restroom B', section: '212', x: 75, y: 30, status: 'medium' },
    { id: '3', type: 'restroom', name: 'Restroom C', section: '305', x: 25, y: 70, status: 'low' },
    { id: '4', type: 'concession', name: 'Burger Stand', section: '115', x: 40, y: 25, waitTime: '3 min' },
    { id: '5', type: 'concession', name: 'BBQ House', section: '212', x: 60, y: 45, waitTime: '8 min' },
    { id: '6', type: 'concession', name: 'Pizza Place', section: '305', x: 40, y: 75, waitTime: '12 min' },
    { id: '7', type: 'entrance', name: 'Gate A', section: 'North', x: 50, y: 10 },
    { id: '8', type: 'entrance', name: 'Gate B', section: 'South', x: 50, y: 90 },
    { id: '9', type: 'parking', name: 'Lot A', section: 'North', x: 15, y: 15, available: 234 },
    { id: '10', type: 'parking', name: 'Lot B', section: 'East', x: 85, y: 50, available: 89 },
  ];

  const filteredLocations = selectedFilter === 'all' ? locations : locations.filter(loc => loc.type === selectedFilter);

  const getIcon = (type: string) => {
    switch (type) {
      case 'restroom': return '🚻';
      case 'concession': return '🍔';
      case 'entrance': return '🚪';
      case 'parking': return '🅿️';
      default: return '📍';
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'high': return 'bg-red-500';
      default: return 'bg-cyan-500';
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
        <div className="mb-6">
          <h1 className="text-4xl font-black text-white uppercase tracking-tight leading-none mb-2">Stadium Map</h1>
          <p className="text-base text-white/50">Interactive venue guide</p>
        </div>

        <div className="p-4 rounded-2xl bg-cyan-500/10 border-2 border-cyan-500/20 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center"><span className="text-2xl">📍</span></div>
            <div>
              <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider">You Are Here</p>
              <p className="text-lg font-bold text-white">Section 118 • Row F • Seat 12</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-5 py-3 rounded-full text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedFilter === filter.id ? 'bg-white text-black' : 'bg-white/[0.05] text-white/60 border-2 border-white/10 hover:bg-white/10'
              }`}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-[#0a1628] to-[#050a14] border-2 border-white/[0.08] overflow-hidden mb-6">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="absolute inset-8 rounded-[40%] border-4 border-white/[0.1] bg-white/[0.02]" />
          <div className="absolute inset-16 rounded-[40%] border-2 border-white/[0.05] bg-green-900/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-20 rounded border-2 border-green-500/30 bg-green-500/10" />

          {[
            { top: '15%', left: '50%', label: '101' },
            { top: '25%', left: '25%', label: '212' },
            { top: '25%', left: '75%', label: '215' },
            { top: '50%', left: '12%', label: '118' },
            { top: '50%', left: '88%', label: '120' },
            { top: '75%', left: '25%', label: '301' },
            { top: '75%', left: '75%', label: '305' },
            { top: '85%', left: '50%', label: '401' },
          ].map((section, i) => (
            <div
              key={i}
              className={`absolute w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold ${
                section.label === '118' ? 'bg-cyan-500/30 border-2 border-cyan-400 text-cyan-300' : 'bg-white/[0.05] border border-white/[0.1] text-gray-500'
              }`}
              style={{ top: section.top, left: section.left, transform: 'translate(-50%, -50%)' }}
            >
              {section.label}
            </div>
          ))}

          {filteredLocations.map((location) => (
            <div
              key={location.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ top: `${location.y}%`, left: `${location.x}%` }}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  {getIcon(location.type)}
                </div>
                {location.status && (
                  <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${getStatusColor(location.status)} border-2 border-[#0a1628]`} />
                )}
              </div>
            </div>
          ))}

          <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ top: '50%', left: '12%' }}>
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-cyan-500/30 border-2 border-cyan-400 flex items-center justify-center animate-pulse">
                <div className="w-6 h-6 rounded-full bg-cyan-400" />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-cyan-500/20 border border-cyan-500/30">
                <span className="text-[10px] font-bold text-cyan-300">YOU</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">Nearby</h2>
          <div className="space-y-2">
            {filteredLocations.slice(0, 5).map((location) => (
              <div key={location.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border-2 border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center text-2xl">{getIcon(location.type)}</div>
                  <div>
                    <h3 className="text-base font-bold text-white">{location.name}</h3>
                    <p className="text-sm text-white/60">Section {location.section}</p>
                  </div>
                </div>
                <div className="text-right">
                  {location.waitTime && <div className="text-sm font-bold text-yellow-400">{location.waitTime}</div>}
                  {location.available !== undefined && <div className="text-sm font-bold text-green-400">{location.available} spots</div>}
                  {location.status && <div className={`w-3 h-3 rounded-full ${getStatusColor(location.status)} ml-auto mt-1`} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="venues" />
    </div>
  );
}
