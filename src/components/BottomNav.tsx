import { useNavigate } from 'react-router-dom';

interface BottomNavProps {
  active: string;
}

export default function BottomNav({ active }: BottomNavProps) {
  const navigate = useNavigate();

  const tabs = [
    { id: 'feed', label: 'Feed', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ), route: '/feed' },
    { id: 'teams', label: 'Teams', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ), route: '/nfl-teams' },
    { id: 'venues', label: 'Venues', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ), route: '/venues' },
    { id: 'live', label: 'Live', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ), route: '/live-venue' },
    { id: 'profile', label: 'Profile', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ), route: '/team/1' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
      <div className="bg-[#0a1628]/98 backdrop-blur-2xl border-t-2 border-white/[0.08]">
        <div className="flex items-stretch justify-around px-1 py-2 max-w-lg mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => navigate(tab.route)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 py-2 px-1 rounded-2xl transition-all min-h-[60px] ${
                active === tab.id ? 'text-white bg-white/[0.05]' : 'text-white/40 hover:text-white/70 active:bg-white/[0.03]'
              }`}
            >
              {tab.icon}
              <span className="text-[10px] font-black uppercase tracking-wider leading-tight">{tab.label}</span>
              {active === tab.id && <div className="w-1 h-1 rounded-full bg-cyan-400" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
