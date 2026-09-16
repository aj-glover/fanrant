import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import BottomNav from '../components/BottomNav';

export default function VideoPlayer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);

  const video = { title: 'Superbowl XXI Highlights', duration: '05:02', currentTime: '01:34', progress: 30 };

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
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-black mb-6 border-2 border-white/[0.08]">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-800 to-yellow-600 opacity-40" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button onClick={() => setIsPlaying(!isPlaying)} className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center hover:bg-white/20 transition-all">
              {isPlaying ? (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
              ) : (
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              )}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-cyan-500 rounded-full" style={{ width: `${video.progress}%` }} />
            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg" style={{ left: `${video.progress}%`, transform: 'translate(-50%, -50%)' }} />
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-white/60 font-bold">{video.currentTime}</span>
            <span className="text-sm text-white/60 font-bold">{video.duration}</span>
          </div>
        </div>

        <h1 className="text-2xl font-black text-white uppercase tracking-tight leading-tight mb-8">{video.title}</h1>

        <div className="flex items-center justify-center gap-8 mb-8">
          <button className="w-14 h-14 rounded-full bg-white/[0.05] border-2 border-white/[0.08] flex items-center justify-center text-white hover:bg-white/10 transition-all">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" /></svg>
          </button>
          <button onClick={() => setIsPlaying(!isPlaying)} className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-black hover:scale-105 transition-transform shadow-2xl">
            {isPlaying ? (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /></svg>
            ) : (
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            )}
          </button>
          <button className="w-14 h-14 rounded-full bg-white/[0.05] border-2 border-white/[0.08] flex items-center justify-center text-white hover:bg-white/10 transition-all">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="py-5 rounded-2xl bg-white/[0.05] border-2 border-white/[0.08] text-white font-bold text-base uppercase tracking-wide hover:bg-white/10 transition-all flex items-center justify-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
            Share
          </button>
          <button className="py-5 rounded-2xl bg-white/[0.05] border-2 border-white/[0.08] text-white font-bold text-base uppercase tracking-wide hover:bg-white/10 transition-all flex items-center justify-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            Like
          </button>
        </div>
      </div>
      <BottomNav active="feed" />
    </div>
  );
}
