import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BottomNav from '../components/BottomNav';

export default function OrderFood() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<{ id: string; name: string; price: number; qty: number }[]>([]);

  const menuItems = [
    { id: '1', name: 'Classic Burger', price: 12.99, time: '8 min', popular: true },
    { id: '2', name: 'BBQ Pulled Pork', price: 14.99, time: '12 min', popular: true },
    { id: '3', name: 'Pizza Slice', price: 6.99, time: '5 min', popular: false },
    { id: '4', name: 'Hot Dog', price: 7.99, time: '3 min', popular: false },
    { id: '5', name: 'Nachos', price: 9.99, time: '6 min', popular: true },
    { id: '6', name: 'Chicken Tenders', price: 11.99, time: '10 min', popular: false },
    { id: '7', name: 'Fries', price: 5.99, time: '4 min', popular: false },
    { id: '8', name: 'Beer', price: 9.99, time: '2 min', popular: true },
  ];

  const addToCart = (item: typeof menuItems[0]) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="relative min-h-screen bg-[#0a1628] pb-32">
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
          <h1 className="text-4xl font-black text-white uppercase tracking-tight leading-none mb-2">Order Food</h1>
          <p className="text-base text-white/50">Delivered to your seat</p>
        </div>

        <div className="p-4 rounded-2xl bg-cyan-500/10 border-2 border-cyan-500/20 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center"><span className="text-2xl">🪑</span></div>
            <div>
              <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider">Your Seat</p>
              <p className="text-lg font-bold text-white">Section 118 • Row F • Seat 12</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">Popular Now</h2>
          <div className="grid grid-cols-2 gap-3">
            {menuItems.filter(item => item.popular).map((item) => (
              <button key={item.id} onClick={() => addToCart(item)} className="p-4 rounded-2xl bg-white/[0.03] border-2 border-white/[0.08] hover:bg-white/[0.06] hover:border-white/20 transition-all text-left">
                <div className="text-3xl mb-2">🍔</div>
                <h3 className="text-sm font-bold text-white mb-1">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-base font-black text-cyan-400">${item.price}</span>
                  <span className="text-xs text-white/40">{item.time}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs text-white/40 uppercase tracking-widest font-bold mb-4">Full Menu</h2>
          <div className="space-y-2">
            {menuItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border-2 border-white/[0.06]">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white">{item.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-cyan-400 font-bold">${item.price}</span>
                    <span className="text-xs text-white/40">• {item.time} wait</span>
                  </div>
                </div>
                <button onClick={() => addToCart(item)} className="w-12 h-12 rounded-full bg-cyan-500/20 border-2 border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 active:bg-cyan-500/40 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-20 left-4 right-4 z-30">
          <button className="w-full p-5 rounded-3xl bg-cyan-500 text-black font-black text-lg uppercase tracking-wide shadow-2xl shadow-cyan-500/30 hover:bg-cyan-400 active:bg-cyan-600 transition-all flex items-center justify-between">
            <span>View Cart ({cart.reduce((sum, item) => sum + item.qty, 0)})</span>
            <span className="text-xl">${total.toFixed(2)}</span>
          </button>
        </div>
      )}
      <BottomNav active="live" />
    </div>
  );
}
