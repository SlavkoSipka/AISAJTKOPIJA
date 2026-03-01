import { useEffect, useRef, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Clock, Monitor, User, Wrench, Target, Zap, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { SEOHelmet } from '../seo/SEOHelmet';
import { getCaseStudyBySlug, caseStudies } from '../../data/caseStudies';
import { trackCTAClick } from '../../utils/analytics';

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const study = getCaseStudyBySlug(slug || '');

  // Scroll animations
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-animate');
            if (id) {
              setVisibleSections((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [study]);

  const registerRef = (id: string) => (el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el);
  };

  const isVisible = (id: string) => visibleSections.has(id);

  // 404 — study not found
  if (!study) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'sr' ? 'Case Study nije pronađen' : 'Case Study Not Found'}
            </h1>
            <p className="text-gray-600 mb-8">
              {language === 'sr' ? 'Projekat koji tražite ne postoji.' : 'The project you are looking for does not exist.'}
            </p>
            <Link
              to="/#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-violet-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              {language === 'sr' ? 'Nazad na Portfolio' : 'Back to Portfolio'}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const t = (obj: { sr: string; en: string }) => obj[language] || obj.en;

  // Find next case study for the "next project" link
  const currentIdx = caseStudies.findIndex((cs) => cs.slug === slug);
  const nextStudy = caseStudies[(currentIdx + 1) % caseStudies.length];

  const statIcons = [Clock, Monitor, User, Wrench];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEOHelmet
        title={t(study.seo.title)}
        description={t(study.seo.description)}
        keywords={t(study.seo.keywords)}
        canonicalUrl={`https://aisajt.com/portfolio/${study.slug}`}
        ogImage={study.heroImage}
        includeBusinessSchema={true}
      />

      <Navbar />

      <main id="main-content">

        {/* ═══════════════════════════════════════════════════════════
            PART 1 — HERO + NAVIGATION
        ═══════════════════════════════════════════════════════════ */}
        <section className="pt-28 md:pt-36 pb-12 md:pb-20 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />

          {/* Animated blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 -left-20 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 -right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Back link */}
            <div className="max-w-5xl mx-auto mb-8 md:mb-12">
              <Link
                to="/#portfolio"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                {language === 'sr' ? 'Portfolio' : 'Portfolio'}
              </Link>
            </div>

            <div className="max-w-5xl mx-auto text-center">
              {/* Meta pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6 md:mb-8">
                <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 font-medium">
                  {study.metaTags.client}
                </span>
                <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300 font-medium">
                  {study.metaTags.year}
                </span>
                <span className="px-4 py-1.5 bg-violet-500/20 backdrop-blur-sm border border-violet-400/20 rounded-full text-sm text-violet-300 font-medium">
                  {t(study.metaTags.services)}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 px-2">
                {t(study.projectTitle)}
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12 px-4">
                {t(study.tagline)}
              </p>

              {/* Visit site button */}
              <a
                href={study.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm"
              >
                {language === 'sr' ? 'Posetite Sajt' : 'Visit Website'}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Hero Image */}
            <div className="max-w-5xl mx-auto mt-10 md:mt-14">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                <img
                  src={study.heroImage}
                  alt={`${study.metaTags.client} — ${t(study.projectTitle)}`}
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                {/* Subtle overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════
            PART 2 — PROJECT OVERVIEW
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div
              ref={registerRef('overview')}
              data-animate="overview"
              className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible('overview') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
                {/* Left — The Brief */}
                <div>
                  <p className="text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">
                    {language === 'sr' ? 'O Projektu' : 'The Brief'}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    {language === 'sr' ? 'Kratak Opis' : 'Project Brief'}
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {t(study.brief)}
                  </p>
                </div>

                {/* Right — Stat boxes */}
                <div className="grid grid-cols-2 gap-4">
                  {study.stats.map((stat, i) => {
                    const Icon = statIcons[i] || Target;
                    return (
                      <div
                        key={i}
                        className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-violet-200 hover:shadow-md transition-all duration-300"
                      >
                        <Icon className="w-5 h-5 text-violet-600 mb-3" />
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-1">
                          {t(stat.label)}
                        </p>
                        <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════
            PART 3 — CHALLENGE & GOAL
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div
              ref={registerRef('challenge')}
              data-animate="challenge"
              className={`max-w-5xl mx-auto transition-all duration-700 delay-100 ${isVisible('challenge') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* The Challenge */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {language === 'sr' ? 'Izazov' : 'The Challenge'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t(study.challenge)}
                  </p>
                </div>

                {/* The Goal */}
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {language === 'sr' ? 'Cilj' : 'The Goal'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t(study.goal)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════
            PART 4 — PROCESS (alternating layout)
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Section header */}
              <div
                ref={registerRef('process-header')}
                data-animate="process-header"
                className={`text-center mb-12 md:mb-20 transition-all duration-700 ${isVisible('process-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <p className="text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">
                  {language === 'sr' ? 'Naš Pristup' : 'Our Approach'}
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  {language === 'sr' ? 'Proces Izrade' : 'The Process'}
                </h2>
              </div>

              {/* Process Steps */}
              <div className="space-y-16 md:space-y-24">
                {study.processSteps.map((step, i) => {
                  const id = `step-${i}`;
                  const isReversed = i % 2 === 1;

                  return (
                    <div
                      key={i}
                      ref={registerRef(id)}
                      data-animate={id}
                      className={`transition-all duration-700 ${isVisible(id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${isReversed ? 'md:direction-rtl' : ''}`}>
                        {/* Text side */}
                        <div className={`${isReversed ? 'md:order-2' : 'md:order-1'}`}>
                          <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                              {t(step.title)}
                            </h3>
                          </div>
                          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                            {t(step.description)}
                          </p>
                        </div>

                        {/* Image side */}
                        <div className={`${isReversed ? 'md:order-1' : 'md:order-2'}`}>
                          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                            <img
                              src={step.image}
                              alt={t(step.title)}
                              className="w-full h-auto object-cover"
                              loading="lazy"
                            />
                          </div>
                          {step.caption && (
                            <p className="text-sm text-gray-500 mt-3 text-center italic">
                              {t(step.caption)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════
            PART 5 — RESULTS
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/15 via-transparent to-transparent" />

          <div className="container mx-auto px-4 relative z-10">
            <div
              ref={registerRef('results')}
              data-animate="results"
              className={`max-w-5xl mx-auto transition-all duration-700 ${isVisible('results') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <p className="text-violet-400 font-semibold text-sm uppercase tracking-wider text-center mb-3">
                {language === 'sr' ? 'Rezultati' : 'Results'}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-12 md:mb-16">
                {language === 'sr' ? 'Ostvareni Rezultati' : 'Achieved Results'}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {study.results.map((result, i) => (
                  <div
                    key={i}
                    className="text-center group"
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {result.value}
                    </div>
                    <p className="text-gray-400 text-sm md:text-base font-medium">
                      {t(result.label)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════
            PART 5b — CTA
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/30 to-white" />

          <div className="container mx-auto px-4 relative z-10">
            <div
              ref={registerRef('cta')}
              data-animate="cta"
              className={`max-w-3xl mx-auto text-center transition-all duration-700 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {language === 'sr'
                  ? 'Spremni da Pokrenete Vaš Projekat?'
                  : 'Ready to Start Your Project?'
                }
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                {language === 'sr'
                  ? 'Zakažite besplatnu konsultaciju i dobijte personalizovanu ponudu za vaš web projekat.'
                  : 'Schedule a free consultation and get a personalized quote for your web project.'
                }
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => {
                    trackCTAClick('Case Study CTA', `case_study_${study.slug}`, language);
                    navigate('/funnel');
                  }}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-violet-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  {language === 'sr' ? 'Zakažite Konsultaciju' : 'Schedule Consultation'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/#portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  {language === 'sr' ? 'Svi Projekti' : 'All Projects'}
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════
            NEXT PROJECT LINK
        ═══════════════════════════════════════════════════════════ */}
        {nextStudy && nextStudy.slug !== study.slug && (
          <section className="py-12 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4">
              <Link
                to={`/portfolio/${nextStudy.slug}`}
                className="max-w-3xl mx-auto flex items-center justify-between group hover:bg-white rounded-2xl p-6 transition-all duration-300"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-1">
                    {language === 'sr' ? 'Sledeći Projekat' : 'Next Project'}
                  </p>
                  <p className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors">
                    {t(nextStudy.projectTitle)}
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}
