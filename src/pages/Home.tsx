
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Mic, Star, Globe, Clock, Quote, MoveUpLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MotionSection } from '@/components/MotionSection';
import { AuroraBackground } from '@/components/Backgrounds';
import { GlassCard } from '@/components/GlassCard';
import { SafeImage } from '@/components/SafeImage';
import { aiImage } from '@/lib/deapi';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [heroImg, setHeroImg] = useState('');
  useEffect(() => {
    aiImage("cinematic dark vintage microphone with gold accents, deep black background, dramatic lighting, luxury", {w: 1200, h: 800}).then(setHeroImg);
  }, []);

  return (
    <>
      <AuroraBackground />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20" style={{ background: 'transparent' }}>
        <motion.div style={{ y }} className="text-center z-10 px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-[clamp(44px,8vw,120px)] font-bold leading-[1.1] tracking-tight mb-6">
              <span className="block text-[#f0d78c] mb-2 font-playfair <i>">أنت</span>
              <span className="block text-[#c9a84c]">عــــمري</span>
            </h1>
            <p className="text-[clamp(16px,2vw,24px)] text-[rgba(240,215,140,0.7)] max-w-2xl mx-auto leading-[1.8] font-light">
              صوت يوقف الزمن، وحنجرة صاغت وجدان أمة بأكملها. اكتشف الإرث الفني لسيدة الغناء العربي في تجربة بصرية وسمعية راقية.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/discography">
                <button className="group flex items-center gap-3 px-8 py-4 transition-all" style={{ background: '#c9a84c', color: '#0a0a0a', borderRadius: '0px' }}>
                  <span className="font-semibold text-lg">استمع للروائع</span>
                  <MoveUpLeft className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1" />
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Introduction */}
      <MotionSection className="relative z-10 mx-auto max-w-[1240px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-playfair text-[#c9a84c] text-xl mb-4">I. The Voice of Egypt</div>
            <h2 className="text-[clamp(32px,4vw,56px)] leading-[1.2] font-bold mb-8 text-[#f0d78c]">
              حنجرة لا تجود بها الأيام إلا مرة واحدة
            </h2>
            <p className="text-[17px] leading-[1.9] text-[rgba(240,215,140,0.6)] mb-6">
              لم تكن أم كلثوم مجرد مطربة، بل كانت مؤسسة ثقافية، وظاهرة اجتماعية، وقوة ناعمة لا يستهان بها. منذ بداياتها المتواضعة في قرية طماي الزهايرة وحتى وقوفها على أرقى مسارح باريس، سطرت تاريخاً لا يُمحى في سجل الخلود.
            </p>
            <Link to="/biography" className="gold-underline text-[#c9a84c] text-lg font-medium inline-flex items-center gap-2 mt-4">
              اقرأ سيرتها <ArrowUpLeft className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border border-[#c9a84c] translate-x-4 -translate-y-4 opacity-30 pointer-events-none" style={{ borderRadius: '0px' }}></div>
            <SafeImage 
              src={heroImg} 
              fallbackSeed="vintage-microphone-gold"
              className="w-full h-auto aspect-[4/5] object-cover grayscale opacity-90 transition-opacity hover:opacity-100 hover:grayscale-0 duration-700"
              style={{ borderRadius: '0px' }}
            />
          </div>
        </div>
      </MotionSection>

      {/* 3. Live Stats */}
      <MotionSection className="border-y" style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
        <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center py-12">
          {[
            { label: 'أغنية مسجلة', value: '300+', icon: <Mic /> },
            { label: 'عام من العطاء', value: '50', icon: <Clock /> },
            { label: 'ملايين المستمعين', value: '∞', icon: <Globe /> },
            { label: 'قصيدة فصحى', value: '90+', icon: <BookOpen /> }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="text-[#c9a84c] opacity-50">{stat.icon}</div>
              <div className="font-playfair text-4xl md:text-5xl font-bold text-[#f0d78c]">{stat.value}</div>
              <div className="text-sm tracking-wide text-[rgba(240,215,140,0.5)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </MotionSection>

      {/* 4. Bento Grid: Masterpieces */}
      <MotionSection className="max-w-[1240px] mx-auto px-6">
        <div className="font-playfair text-[#c9a84c] text-xl mb-4">II. The Epics</div>
        <h2 className="text-[clamp(32px,4vw,56px)] leading-[1.2] font-bold mb-16 text-[#f0d78c] max-w-2xl">
          ألحان نسجت من خيوط الذهب
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="md:col-span-2 p-10 min-h-[400px] flex flex-col justify-end relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
            <SafeImage src={aiImage("abstract gold waves merging with dark smoke", {w:800, h:600})} fallbackSeed="gold-waves" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700" />
            <div className="relative z-20">
              <span className="text-xs font-bold tracking-widest text-[#c9a84c] mb-3 block">1964</span>
              <h3 className="text-3xl font-bold mb-4 font-playfair">أنت عمري</h3>
              <p className="text-[rgba(240,215,140,0.6)] leading-relaxed max-w-md">لقاء السحاب الذي جمع هرمي الفن المصري، الروعة اللحنية لمحمد عبدالوهاب وعبقرية الأداء الكلثومي.</p>
            </div>
          </GlassCard>

          <GlassCard className="p-10 min-h-[400px] flex flex-col justify-end relative group">
            <div className="relative z-20">
              <span className="text-xs font-bold tracking-widest text-[#c9a84c] mb-3 block">1969</span>
              <h3 className="text-2xl font-bold mb-4 font-playfair">ألف ليلة وليلة</h3>
              <p className="text-[rgba(240,215,140,0.6)] leading-relaxed text-sm">مقدمة موسيقية أسطورية لـ بليغ حمدي، أدخلت آلات جديدة وروحاً معاصرة للتخت الشرقي.</p>
            </div>
          </GlassCard>

          <GlassCard className="p-10 min-h-[400px] flex flex-col justify-end relative group">
            <div className="relative z-20">
              <span className="text-xs font-bold tracking-widest text-[#c9a84c] mb-3 block">1966</span>
              <h3 className="text-2xl font-bold mb-4 font-playfair">الأطلال</h3>
              <p className="text-[rgba(240,215,140,0.6)] leading-relaxed text-sm">قصيدة إبراهيم ناجي، تاج الأغنية الفصحى، تجلت فيها قدرات أم كلثوم الأوبرالية الخارقة.</p>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-2 p-10 min-h-[400px] flex flex-col justify-center items-center text-center">
            <Music className="w-12 h-12 text-[#c9a84c] mb-6 opacity-30" />
            <h3 className="text-xl text-[#f0d78c] mb-4">اكتشف المكتبة الصوتية الكاملة</h3>
            <Link to="/discography">
              <button className="px-6 py-2 border border-[rgba(201,168,76,0.5)] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a0a0a] transition-all" style={{ borderRadius: '0px' }}>
                تصفح الأغاني
              </button>
            </Link>
          </GlassCard>
        </div>
      </MotionSection>

      {/* 5. Full-Bleed Quote */}
      <MotionSection className="relative min-h-[70vh] flex items-center justify-center p-0" style={{ background: '#050505' }}>
        <div className="absolute inset-0 overflow-hidden">
          <SafeImage src={aiImage("dark cinematic stage with a single spotlight shining closely on an empty classic microphone stand, dust motes in the light", {w:1600,h:900})} fallbackSeed="stage-spotlight" className="w-full h-full object-cover opacity-20 grayscale" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <Quote className="w-16 h-16 mx-auto mb-8 text-[#c9a84c] opacity-40 rotate-180" />
          <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.6] font-playfair tracking-wide text-[#f0d78c]">
            "أعطني حريتي أطلق يديَّ<br/>
            إنني أعطيت ما استبقيت شيَّ<br/>
            آه من قيدك أدمى معصمي<br/>
            لِمَ أبقيه وما أبقى عليَّ؟"
          </h2>
          <div className="mt-12 text-[#c9a84c] tracking-[0.3em] font-light text-sm">
            الأطلال ـ رياض السنباطي
          </div>
        </div>
      </MotionSection>

      {/* 6. The Ensemble */}
      <MotionSection className="max-w-[1240px] mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div className="order-2 lg:order-1 flex flex-col justify-center gap-6">
          <div className="font-playfair text-[#c9a84c] text-xl">III. The Instruments</div>
          <h2 className="text-4xl font-bold">التخت الشرقي خلف الأسطورة</h2>
          <p className="text-[rgba(240,215,140,0.6)] leading-relaxed text-lg">
            لم يكتمل سحر أم كلثوم إلا بفرقتها الموسيقية الذهبية. عازفون أفذاذ كانوا يتحاورون مع صوتها، يعطونها إشارة البدء، ويملأون الفراغات بأشجان نغماتهم. 
          </p>
          <ul className="space-y-4 mt-4 text-[#f0d78c]">
            <li className="flex items-center gap-3 border-b border-[rgba(201,168,76,0.1)] pb-4">
              <span className="text-[#c9a84c] font-playfair w-6">01</span>
              <span>محمد القصبجي - العود الرصين</span>
            </li>
            <li className="flex items-center gap-3 border-b border-[rgba(201,168,76,0.1)] pb-4">
              <span className="text-[#c9a84c] font-playfair w-6">02</span>
              <span>أحمد الحفناوي - الكمان الناطق</span>
            </li>
            <li className="flex items-center gap-3 border-b border-[rgba(201,168,76,0.1)] pb-4">
              <span className="text-[#c9a84c] font-playfair w-6">03</span>
              <span>عبده داغر - عبقري الكمان</span>
            </li>
          </ul>
        </div>
        <div className="order-1 lg:order-2">
           <SafeImage src={aiImage("vintage classical middle eastern oud instrument glowing warmly in absolute darkness", {w:800,h:1000})} fallbackSeed="arab-oud" className="w-full h-full object-cover" style={{ borderRadius: '0px' }} />
        </div>
      </MotionSection>

      {/* 7. Global Impact */}
      <MotionSection className="bg-[rgba(255,255,255,0.01)] border-y border-[rgba(201,168,76,0.1)] py-32">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <Globe className="w-12 h-12 mx-auto text-[#c9a84c] mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#f0d78c]">صوت تجاوز حدود الشرق</h2>
          <p className="text-lg max-w-3xl mx-auto text-[rgba(240,215,140,0.6)] leading-relaxed mb-16">
            في عام 1967، وقفت أم كلثوم على مسرح الأولمبيا في باريس. بحضور شخصيات عالمية، غنت فأبكت وأطربت جمهوراً لم يكن يفهم العربية، محققة تواصلاً روحياً تجاوز حاجز اللغة، ليصفها شارل ديجول بأنها "لمسة لا تُنسى في قلب فرنسا".
          </p>
          <div className="flex justify-center gap-8">
            <GlassCard className="p-8 w-64 text-left">
              <h4 className="font-playfair text-[#c9a84c] mb-2 font-bold">PARIS</h4>
              <p className="text-sm text-[rgba(240,215,140,0.6)]">L'Olympia Concert (1967)</p>
            </GlassCard>
            <GlassCard className="p-8 w-64 text-left hidden md:block">
              <h4 className="font-playfair text-[#c9a84c] mb-2 font-bold">NEW YORK</h4>
              <p className="text-sm text-[rgba(240,215,140,0.6)]">Cultural Influence in the US</p>
            </GlassCard>
          </div>
        </div>
      </MotionSection>

      {/* 8. CTA */}
      <MotionSection className="max-w-[800px] mx-auto text-center px-6 pb-40">
        <h2 className="text-5xl font-playfair mb-6">احفظ الإرث</h2>
        <p className="text-[rgba(240,215,140,0.6)] mb-10 text-lg">
          رحلة العمر لا تنتهي بموت الجسد. انضم إلينا لاستكشاف مكتبة نادرة من التسجيلات، الصور، والمقالات التاريخية.
        </p>
        <button className="px-10 py-4 font-bold tracking-widest transition-transform hover:-translate-y-1" style={{ background: '#c9a84c', color: '#0a0a0a', borderRadius: '0px' }}>
          الدخول إلى المتحف الرقمي
        </button>
      </MotionSection>
    </>
  );
};
export default Home;
