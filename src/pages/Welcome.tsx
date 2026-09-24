import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#071b30]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(78,126,176,0.35),transparent_24%),linear-gradient(90deg,#071a2f_0%,#0f233d_28%,#101d37_52%,#201f45_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_60%,rgba(170,112,255,0.22),transparent_26%),radial-gradient(circle_at_35%_75%,rgba(56,189,248,0.15),transparent_22%)]" />
        <div className="absolute inset-0 opacity-90" style={{
          backgroundImage: 'radial-gradient(ellipse at center, rgba(74, 99, 150, 0.2) 0%, rgba(7, 27, 48, 0.02) 55%, rgba(7, 27, 48, 0.0) 100%)',
        }} />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-between px-4 pb-10 pt-8 sm:px-8 sm:pb-12 sm:pt-10">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="select-none text-[5.2rem] font-black lowercase leading-none tracking-[-0.08em] text-white sm:text-[8.5rem] md:text-[11rem] lg:text-[15rem]">
            fanrant
          </h1>

          <div className="mt-8 flex items-center gap-3 sm:gap-4">
            <span className="h-3 w-3 rounded-full bg-white/90" />
            <span className="h-3 w-3 rounded-full bg-white/35" />
            <span className="h-3 w-3 rounded-full bg-white/35" />
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1180px] pb-4">
          <button
            onClick={() => navigate('/login')}
            className="flex w-full items-center justify-center rounded-full bg-white px-8 py-6 text-center text-[1.05rem] font-black uppercase tracking-[0.06em] text-black shadow-[0_18px_48px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gray-100 sm:py-7 sm:text-[1.5rem]"
          >
            Get Started
          </button>

          <p className="mt-6 text-center text-sm font-medium text-white/80 sm:text-base">
            Know Before You Go. Know Where to Go. Enjoy the Show.
          </p>
        </div>
      </div>
    </div>
  );
}
