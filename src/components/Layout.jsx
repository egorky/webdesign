import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/image.png';

export default function Layout({ children }) {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const isHome = location.pathname === '/';

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
                        <a href={getLink("#solutions")} className="hover:text-primary transition-colors">{t('nav.solutions')}</a>
                        <Link to="/industries" className="hover:text-primary transition-colors">{t('nav.industries')}</Link>
                        <a href={getLink("#features")} className="hover:text-primary transition-colors">{t('nav.features')}</a>
                        <Link to="/pricing" className="hover:text-primary transition-colors">{t('nav.pricing')}</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="text-xs font-black border-2 border-black px-3 py-1 hover:bg-black hover:text-white transition-all uppercase tracking-widest"
                        >
                            {i18n.language === 'en' ? 'ES' : 'EN'}
                        </button>
                        <a href="#" className="bg-primary border-2 border-black text-white px-8 py-3 font-black uppercase tracking-tighter hover:bg-opacity-90 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
                            {t('nav.getStarted')}
                        </a>
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
                            <li><a href={getLink("#solutions")} className="hover:text-primary transition-colors">WhatsApp Agent</a></li>
                            <li><a href={getLink("#solutions")} className="hover:text-primary transition-colors">Voice Bot</a></li>
                            <li><a href={getLink("#solutions")} className="hover:text-primary transition-colors">Integrations</a></li>
                            <li><a href={getLink("#solutions")} className="hover:text-primary transition-colors">API Reference</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-black mb-8 text-xs uppercase tracking-widest underline decoration-primary decoration-4 underline-offset-8">{t('footer.industry')}</h5>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-wider text-darkBlue/80">
                            <li><Link to="/industries#retail" className="hover:text-primary transition-colors">Retail</Link></li>
                            <li><Link to="/industries#healthcare" className="hover:text-primary transition-colors">Healthcare</Link></li>
                            <li><Link to="/industries#realEstate" className="hover:text-primary transition-colors">Real Estate</Link></li>
                            <li><Link to="/industries#banking" className="hover:text-primary transition-colors">Banking</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-black mb-8 text-xs uppercase tracking-widest underline decoration-primary decoration-4 underline-offset-8">{t('footer.company')}</h5>
                        <ul className="space-y-4 text-sm font-bold uppercase tracking-wider text-darkBlue/80">
                            <li><Link to="/" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/pricing" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link to="/industries" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><a href="mailto:info@sempitecno.com" className="hover:text-primary transition-colors">Contact</a></li>
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
