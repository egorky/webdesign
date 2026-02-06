import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function Pricing() {
    const { t } = useTranslation();
    return (
        <div className="relative min-h-screen">
            <div className="grain"></div>
            <div className="fixed top-[-100px] left-[-100px] gradient-blur opacity-60 dark:opacity-40"></div>
            <div className="fixed bottom-[-200px] right-[-100px] gradient-blur opacity-60 dark:opacity-40" style={{ background: 'radial-gradient(circle, rgba(112, 65, 255, 0.2) 0%, rgba(0, 29, 61, 0.1) 50%, rgba(255, 255, 255, 0) 100%)' }}></div>

            <main className="relative z-10">
                <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-brandDark dark:text-white">
                        {t('faq.title')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t('faq.subtitle')}
                    </p>
                </section>

                <section className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
                    <div className="space-y-6">
                        <details className="group bg-white dark:bg-white/5 overflow-hidden card-border" open>
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-black uppercase tracking-tight">{t('faq.questions.0.q')}</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-accent font-bold">keyboard_arrow_down</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t-2 border-black pt-6">
                                {t('faq.questions.0.a')}
                            </div>
                        </details>
                        <details className="group bg-white dark:bg-white/5 overflow-hidden card-border">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-black uppercase tracking-tight">{t('faq.questions.1.q')}</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-accent font-bold">keyboard_arrow_down</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t-2 border-black pt-6">
                                {t('faq.questions.1.a')}
                            </div>
                        </details>
                        <details className="group bg-white dark:bg-white/5 overflow-hidden card-border">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-black uppercase tracking-tight">{t('faq.questions.2.q')}</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-accent font-bold">keyboard_arrow_down</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t-2 border-black pt-6">
                                {t('faq.questions.2.a')}
                            </div>
                        </details>
                        <details className="group bg-white dark:bg-white/5 overflow-hidden card-border">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-black uppercase tracking-tight">{t('faq.questions.3.q')}</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-accent font-bold">keyboard_arrow_down</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t-2 border-black pt-6">
                                {t('faq.questions.3.a')}
                            </div>
                        </details>
                        <details className="group bg-white dark:bg-white/5 overflow-hidden card-border">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-black uppercase tracking-tight">{t('faq.questions.4.q')}</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-accent font-bold">keyboard_arrow_down</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t-2 border-black pt-6">
                                {t('faq.questions.4.a')}
                            </div>
                        </details>
                        <details className="group bg-white dark:bg-white/5 overflow-hidden card-border">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-black uppercase tracking-tight">{t('faq.questions.5.q')}</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-accent font-bold">keyboard_arrow_down</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t-2 border-black pt-6">
                                {t('faq.questions.5.a')}
                            </div>
                        </details>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
                    <div className="bg-brandDark p-12 md:p-20 text-center text-white relative overflow-hidden card-border">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">{t('faq.cta.title')}</h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-xl mx-auto font-medium">{t('faq.cta.description')}</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <button className="bg-white text-black px-10 py-4 border-2 border-black font-black uppercase text-sm tracking-[0.2em] hover:bg-accent hover:text-white transition-all card-border">
                                    {t('faq.cta.contact')}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
