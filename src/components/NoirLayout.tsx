
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Disc, Music, User, BookOpen, Image as ImageIcon, ArrowUpLeft } from 'lucide-react';

const navItems = [
  { path: '/', label: 'البداية', icon: <Music size={16} /> },
  { path: '/biography', label: 'السيرة', icon: <User size={16} /> },
  { path: '/discography', label: 'الألحان', icon: <Disc size={16} /> },
  { path: '/legacy', label: 'الإرث', icon: <BookOpen size={16} /> },
  { path: '/gallery', label: 'العدسة', icon: <ImageIcon size={16} /> },
];

export const NoirLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative z-0 min-h-screen flex flex-col selection:bg-[#c9a84c] selection:text-[#0a0a0a]">
      {/* Noise Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      <header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(13, 13, 13, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : '1px solid transparent'
        }}
      >
        <div className="max-w-[1240px] mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="font-playfair text-2xl font-bold tracking-wider text-[#c9a84c]">O.K.</span>
            <span className="hidden md:block text-sm font-medium tracking-widest text-[#f0d78c] opacity-80 group-hover:opacity-100 transition-opacity">
              كوكب الشرق
            </span>
          </Link>

          <nav className="flex items-center gap-6 md:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`gold-underline text-sm md:text-base flex items-center gap-2 pb-1 transition-colors ${
                  location.pathname === item.path ? 'active text-[#f0d78c]' : 'text-[rgba(240,215,140,0.55)] hover:text-[#f0d78c]'
                }`}
              >
                <span className="hidden md:inline-block opacity-70">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
             <button 
               className="flex items-center gap-2 px-6 py-3 text-sm font-medium transition-transform hover:scale-105"
               style={{ background: 'transparent', border: '1px solid rgba(201,168,76,0.2)', color: '#f0d78c', borderRadius: '0px' }}
             >
               الإنضمام للنادي <ArrowUpLeft size={16} />
             </button>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {children}
      </main>

      <footer className="relative z-10 pt-32 pb-12 border-t" style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
        <div className="max-w-[1240px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-playfair text-4xl md:text-6xl text-[#c9a84c] mb-6">Umm Kulthum</h2>
              <p className="text-[rgba(240,215,140,0.55)] max-w-sm leading-[1.8] text-base">
                صوت يتردد في أروقة التاريخ، لا يحده زمان ولا مكان. الأسطورة التي وحدت العرب بكلمات الحب والوطن، وجعلت من كل أغنية ملحمة خالدة تعيش في وجدان الملايين.
              </p>
            </div>
            <div>
              <h4 className="text-[#f0d78c] font-semibold mb-6 flex items-center gap-2">
                <span className="font-playfair text-[#c9a84c] text-xs">I.</span> الملاذ
              </h4>
              <ul className="space-y-4 text-[rgba(240,215,140,0.55)]">
                <li><Link to="/biography" className="hover:text-[#c9a84c] transition-colors">عن حياتها</Link></li>
                <li><Link to="/discography" className="hover:text-[#c9a84c] transition-colors">الأرشيف الغنائي</Link></li>
                <li><Link to="/legacy" className="hover:text-[#c9a84c] transition-colors">الأثر الخالد</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#f0d78c] font-semibold mb-6 flex items-center gap-2">
                <span className="font-playfair text-[#c9a84c] text-xs">II.</span> التواصل
              </h4>
              <ul className="space-y-4 text-[rgba(240,215,140,0.55)]">
                <li><a href="#" className="hover:text-[#c9a84c] transition-colors">المتحف الرسمي</a></li>
                <li><a href="#" className="hover:text-[#c9a84c] transition-colors">إصدارات المؤسسة</a></li>
                <li><a href="#" className="hover:text-[#c9a84c] transition-colors">الصحافة</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between border-t pt-8 text-sm" style={{ borderColor: 'rgba(201,168,76,0.1)', color: 'rgba(240,215,140,0.55)' }}>
            <p>© {new Date().getFullYear()} إرث أم كلثوم. جميع الحقوق محفوظة.</p>
            <div className="flex gap-4 mt-4 md:mt-0 font-playfair">
              <span>NOIR</span>
              <span className="text-[#c9a84c]">&amp;</span>
              <span>GOLD</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
