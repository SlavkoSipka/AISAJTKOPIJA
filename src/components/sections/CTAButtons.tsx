import { Users, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { trackCTAClick } from '../../utils/analytics';

export function CTAButtons() {
  const { language } = useLanguage();

  const handleTeamClick = () => {
    trackCTAClick('Upoznaj AiSajt Tim', '/funnel', language);
  };

  const handleConsultationClick = () => {
    trackCTAClick('Besplatna Konsultacija', '/funnel', language);
  };

  return (
    <section className="py-8 md:py-12 bg-gradient-to-r from-violet-50 via-indigo-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Mobile & Desktop Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* Dugme 1 - Upoznaj Tim */}
            <Link
              to="/funnel"
              onClick={handleTeamClick}
              className="group relative block bg-white hover:bg-gradient-to-br hover:from-violet-50 hover:to-indigo-50 rounded-2xl p-6 md:p-8 border-2 border-violet-200 hover:border-violet-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-400/10 to-indigo-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <Sparkles className="w-5 h-5 text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                  {language === 'sr' ? '👋 Upoznaj AiSajt Tim' : '👋 Meet AiSajt Team'}
                </h3>
                
                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                  {language === 'sr' 
                    ? 'Saznaj više o nama, našem radu i kako pomažemo biznisima da rastu online'
                    : 'Learn more about us, our work and how we help businesses grow online'
                  }
                </p>
                
                <div className="flex items-center text-violet-600 font-semibold text-sm md:text-base group-hover:gap-3 gap-2 transition-all">
                  <span>{language === 'sr' ? 'Pogledaj Portfolio' : 'View Portfolio'}</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Dugme 2 - Besplatna Konsultacija */}
            <Link
              to="/funnel"
              onClick={handleConsultationClick}
              className="group relative block bg-gradient-to-br from-violet-600 to-indigo-700 hover:from-violet-700 hover:to-indigo-800 rounded-2xl p-6 md:p-8 border-2 border-violet-600 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/50 hover:-translate-y-1 text-left overflow-hidden"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold">
                    {language === 'sr' ? 'BESPLATNO' : 'FREE'}
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {language === 'sr' ? '🚀 Zakaži Besplatnu Konsultaciju' : '🚀 Schedule Free Consultation'}
                </h3>
                
                <p className="text-sm md:text-base text-white/90 mb-4 leading-relaxed">
                  {language === 'sr' 
                    ? 'Pričaj sa našim stručnjacima o tvom projektu. Bez obaveze, potpuno besplatno.'
                    : 'Talk to our experts about your project. No obligation, completely free.'
                  }
                </p>
                
                <div className="flex items-center text-white font-semibold text-sm md:text-base group-hover:gap-3 gap-2 transition-all">
                  <span>{language === 'sr' ? 'Pošalji Poruku' : 'Send Message'}</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Pulse effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-pulse opacity-0 group-hover:opacity-100"></div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}

