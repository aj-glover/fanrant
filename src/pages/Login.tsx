import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#0a1628]">
      <div className="relative z-10 flex flex-col min-h-screen px-8 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.05] text-white hover:bg-white/10 active:bg-white/15 transition-colors mb-12"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-10 shadow-2xl shadow-cyan-500/30">
            <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 3a1 1 0 00-1 1v16a1 1 0 001.55.832l3-2A1 1 0 0022 18V6a1 1 0 00-.45-.832l-3-2A1 1 0 0018 3zM3 7a1 1 0 011-1h4a5 5 0 015 5v2a5 5 0 01-5 5H4a1 1 0 01-1-1V7zm1 2v6h3a3 3 0 003-3V9a3 3 0 00-3-3H4z" />
            </svg>
          </div>

          <h1 className="text-4xl font-black text-white uppercase tracking-tight text-center leading-tight mb-4">
            Welcome to<br /><span className="text-cyan-400">FanRant</span>
          </h1>
          <p className="text-lg text-white/60 text-center max-w-xs leading-relaxed mb-12">
            Your complete guide to the live fan experience. Never miss a moment.
          </p>

          <button
            onClick={() => navigate('/sports')}
            className="w-full py-5 bg-white text-black font-bold text-lg uppercase tracking-wide rounded-full hover:bg-gray-100 transition-colors shadow-2xl mb-4"
          >
            Sign Up
          </button>

          <button
            onClick={() => navigate('/sports')}
            className="text-white/60 hover:text-white transition-colors text-base"
          >
            Already have an account? <span className="font-bold text-white">Login</span>
          </button>
        </div>
      </div>
    </div>
  );
}
