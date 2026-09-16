import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-black">
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `radial-gradient(ellipse at 50% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 60%),
                             radial-gradient(ellipse at 80% 70%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`,
          }} />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-between px-8 py-16">
        <div className="text-center flex-1 flex flex-col items-center justify-center">
          <div className="inline-block mb-8">
            <h1 className="text-[7rem] sm:text-[8rem] leading-none font-black text-white tracking-tighter lowercase">
              fanrant
            </h1>
          </div>
          <div className="flex items-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-white" />
            <div className="w-2 h-2 rounded-full bg-white/40" />
            <div className="w-2 h-2 rounded-full bg-white/40" />
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/login')}
            className="w-full py-5 bg-white text-black font-bold text-lg uppercase tracking-wide rounded-full hover:bg-gray-100 transition-colors shadow-2xl"
          >
            Get Started
          </button>
          <p className="text-center text-sm text-white/70 pt-4">
            Know Before You Go. Know Where to Go. Enjoy the Show.
          </p>
        </div>
      </div>
    </div>
  );
}
