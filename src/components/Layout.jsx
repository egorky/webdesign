import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/image.png';

export default function Layout({ children }) {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [industriesOpen, setIndustriesOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [companyOpen, setCompanyOpen] = useState(false);

    const getLink = (hash) => isHome ? hash : `/${hash}`;

    const toggleLanguage = () => {
        const currentLang = i18n.resolvedLanguage || i18n.language;
        const newLang = currentLang.startsWith('en') ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="font-sans bg-background-light text-darkBlue antialiased transition-colors duration-300">
            <nav className="sticky top-0 z-50 bg-white border-b-2 border-black">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link to="/">
                            <img src={logo} alt="SEMPITECNO Logo" className="h-10 object-contain" />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-10 font-bold text-sm uppercase tracking-wider">
                        <div
                            className="relative"
                            onMouseEnter={() => setSolutionsOpen(true)}
                            onMouseLeave={() => setSolutionsOpen(false)}
                        >
                            <button className="hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-wider font-bold">
                                {t('nav.solutions')}
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            {solutionsOpen && (
                                <div className="absolute top-full left-0 mt-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[240px]">
                                    <Link to="/solutions/whatsapp" className="block px-6 py-3 hover:bg-green-50 border-b border-black/10 font-bold uppercase text-[10px] tracking-wider">{t('solutions.whatsapp.title')}</Link>
                                    <Link to="/solutions/voice-ai" className="block px-6 py-3 hover:bg-yellow-50 border-b border-black/10 font-bold uppercase text-[10px] tracking-wider">{t('solutions.voice.title')}</Link>
                                    <Link to="/solutions/rpa-orchestrator" className="block px-6 py-3 hover:bg-orange-50 border-b border-black/10 font-bold uppercase text-[10px] tracking-wider">{t('solutions.rpa.title')}</Link>
                                    <Link to="/solutions/omnichannel" className="block px-6 py-3 hover:bg-purple-50 font-bold uppercase text-[10px] tracking-wider">{t('solutions.omnichannel.title')}</Link>
                                </div>
                            )}
                        </div>

                        <div
                            className="relative"
                            onMouseEnter={() => setIndustriesOpen(true)}
                            onMouseLeave={() => setIndustriesOpen(false)}
                        >
                            <Link to="/industries" className="hover:text-primary transition-colors flex items-center gap-1">
                                {t('nav.industries')}
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </Link>
                            {industriesOpen && (
                                <div className="absolute top-full left-0 mt-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[200px]">
                                    <Link to="/industries/healthcare" className="block px-6 py-3 hover:bg-cyan-50 border-b border-black/10 font-bold uppercase text-[10px] tracking-wider">{t('industries.healthcare.title')}</Link>
                                    <Link to="/industries/banking" className="block px-6 py-3 hover:bg-yellow-50 border-b border-black/10 font-bold uppercase text-[10px] tracking-wider">{t('industries.banking.title')}</Link>
                                    <Link to="/industries/retail" className="block px-6 py-3 hover:bg-orange-50 border-b border-black/10 font-bold uppercase text-[10px] tracking-wider">{t('industries.retail.title')}</Link>
                                    <Link to="/industries/customer-service" className="block px-6 py-3 hover:bg-purple-50 font-bold uppercase text-[10px] tracking-wider">{t('industries.customerService.title')}</Link>
                                </div>
                            )}
                        </div>
                        <a href={getLink("#features")} className="hover:text-primary transition-colors">{t('nav.features')}</a>
                        <Link to="/faq" className="hover:text-primary transition-colors">{t('nav.faq')}</Link>

                        <div
                            className="relative"
                            onMouseEnter={() => setCompanyOpen(true)}
                            onMouseLeave={() => setCompanyOpen(false)}
                        >
                            <button className="hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-wider font-bold">
                                {t('nav.company')}
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            {companyOpen && (
                                <div className="absolute top-full left-0 mt-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[180px]">
                                    <Link to="/about" className="block px-6 py-3 hover:bg-blue-50 border-b border-black/10 font-bold uppercase text-[10px] tracking-wider">{t('nav.about')}</Link>
                                    <Link to="/contact" className="block px-6 py-3 hover:bg-primary/10 font-bold uppercase text-[10px] tracking-wider">{t('nav.contact')}</Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="text-xs font-black border-2 border-black px-3 py-1 hover:bg-black hover:text-white transition-all uppercase tracking-widest"
                        >
                            {i18n.language === 'en' ? 'ES' : 'EN'}
                        </button>
                        <Link to="/contact" className="bg-primary border-2 border-black text-white px-8 py-3 font-black uppercase tracking-tighter hover:bg-opacity-90 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
                            {t('nav.getStarted')}
                        </Link>
                    </div>
                </div>
            </nav>

            <main>
                {children}
            </main>

            <footer className="bg-white border-t-2 border-black py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
                    <div className="col-span-2">
                        <img src={logo} alt="SEMPITECNO Logo" className="h-8 mb-8 object-contain" />
                        <p className="text-sm font-bold text-darkBlue/60 max-w-xs leading-relaxed mb-10 uppercase">
                            {t('footer.tagline')}
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="w-12 h-12 b-solid flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><span className="material-symbols-outlined">public</span></a>
                            <a href="#" className="w-12 h-12 b-solid flex items-center justify-center hover:bg-primary hover:text-white transition-colors"><span className="material-symbols-outlined">alternate_email</span></a>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-black mb-8 text-xs uppercase tracking-widest underline decoration-primary decoration-4 underline-offset-8">{t('footer.solutions')}</h5>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-wider text-darkBlue/80">
                            <li><Link to="/solutions/whatsapp" className="hover:text-primary transition-colors">{t('solutions.whatsapp.title')}</Link></li>
                            <li><Link to="/solutions/voice-ai" className="hover:text-primary transition-colors">{t('solutions.voice.title')}</Link></li>
                            <li><Link to="/solutions/rpa-orchestrator" className="hover:text-primary transition-colors">Orquestadores</Link></li>
                            <li><Link to="/solutions/omnichannel" className="hover:text-primary transition-colors">Omnicanalidad</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-black mb-8 text-xs uppercase tracking-widest underline decoration-primary decoration-4 underline-offset-8">{t('footer.industry')}</h5>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-wider text-darkBlue/80">
                            <li><Link to="/industries/retail" className="hover:text-primary transition-colors">{t('industries.retail.title')}</Link></li>
                            <li><Link to="/industries/healthcare" className="hover:text-primary transition-colors">{t('industries.healthcare.title')}</Link></li>
                            <li><Link to="/industries/customer-service" className="hover:text-primary transition-colors">{t('industries.customerService.title')}</Link></li>
                            <li><Link to="/industries/banking" className="hover:text-primary transition-colors">{t('industries.banking.title')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-black mb-8 text-xs uppercase tracking-widest underline decoration-primary decoration-4 underline-offset-8">{t('footer.company')}</h5>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-wider text-darkBlue/80">
                            <li><Link to="/about" className="hover:text-primary transition-colors">{t('nav.about')}</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-black mb-8 text-xs uppercase tracking-widest underline decoration-primary decoration-4 underline-offset-8">{t('footer.legal')}</h5>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-wider text-darkBlue/80">
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
                            <li><Link to="/security" className="hover:text-primary transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 mt-24 pt-12 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-darkBlue/40">
                    <p>{t('footer.copyright')}</p>
                    <div className="flex gap-12">
                        <span>{t('footer.future')}</span>
                        <span className="flex items-center gap-3">{t('footer.status')}: <div className="w-3 h-3 bg-green-500 b-solid"></div> {t('footer.online')}</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
