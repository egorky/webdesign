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
                        <Trans
                            i18nKey="pricing.hero.title"
                            components={{
                                underline: <span className="underline decoration-4 decoration-accent" />,
                                br: <br />
                            }}
                        />
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t('pricing.hero.subtitle')}
                    </p>
                </section>

                <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
                        <div className="bg-white dark:bg-gray-900 p-8 flex flex-col transition-all card-border dark:border-white">
                            <div className="mb-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-2 block">{t('pricing.plans.starter.name')}</span>
                                <h3 className="text-4xl font-black mb-4">{t('pricing.plans.starter.price')}<span className="text-lg font-medium text-gray-500">/mo</span></h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t('pricing.plans.starter.description')}</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium">{t('pricing.plans.starter.features.0')}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium">{t('pricing.plans.starter.features.1')}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium">{t('pricing.plans.starter.features.2')}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-400">
                                    <span className="material-symbols-outlined">block</span>
                                    <span className="line-through">{t('pricing.plans.starter.features.3')}</span>
                                </li>
                            </ul>
                            <button className="w-full bg-transparent border-2 border-black py-3 font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">
                                {t('pricing.plans.starter.cta')}
                            </button>
                        </div>
                        <div className="relative bg-white dark:bg-primary p-8 flex flex-col transition-all card-border md:-translate-y-4">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-5 py-1.5 font-black uppercase tracking-widest text-[10px] border-2 border-black">
                                {t('pricing.plans.growth.popular_tag')}
                            </div>
                            <div className="mb-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent dark:text-accent mb-2 block">{t('pricing.plans.growth.name')}</span>
                                <h3 className="text-4xl font-black mb-4 dark:text-white">{t('pricing.plans.growth.price')}<span className="text-lg font-medium text-gray-500 dark:text-gray-400">/mo</span></h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{t('pricing.plans.growth.description')}</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium dark:text-white">{t('pricing.plans.growth.features.0')}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium dark:text-white">{t('pricing.plans.growth.features.1')}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium dark:text-white">{t('pricing.plans.growth.features.2')}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium dark:text-white">{t('pricing.plans.growth.features.3')}</span>
                                </li>
                            </ul>
                            <button className="w-full bg-accent text-white py-4 border-2 border-black font-black uppercase text-xs tracking-widest hover:brightness-110 transition-all">
                                {t('pricing.plans.growth.cta')}
                            </button>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-8 flex flex-col transition-all card-border dark:border-white">
                            <div className="mb-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-2 block">{t('pricing.plans.enterprise.name')}</span>
                                <h3 className="text-4xl font-black mb-4">{t('pricing.plans.enterprise.price')}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t('pricing.plans.enterprise.description')}</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium">{t('pricing.plans.enterprise.features.0')}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium">{t('pricing.plans.enterprise.features.1')}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium">{t('pricing.plans.enterprise.features.2')}</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium">{t('pricing.plans.enterprise.features.3')}</span>
                                </li>
                            </ul>
                            <button className="w-full bg-transparent border-2 border-black py-3 font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">
                                {t('pricing.plans.enterprise.cta')}
                            </button>
                        </div>
                    </div>
                </section>

                <section className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black tracking-tight mb-4 text-brandDark dark:text-white">{t('pricing.faq.title')}</h2>
                        <div className="h-1.5 w-24 bg-accent mx-auto mb-6"></div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">{t('pricing.faq.subtitle')}</p>
                    </div>
                    <div className="space-y-6">
                        <details className="group bg-white dark:bg-white/5 overflow-hidden card-border" open>
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-black uppercase tracking-tight">{t('pricing.faq.questions.0.q')}</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-accent font-bold">keyboard_arrow_down</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t-2 border-black pt-6">
                                {t('pricing.faq.questions.0.a')}
                            </div>
                        </details>
                        <details className="group bg-white dark:bg-white/5 overflow-hidden card-border">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-black uppercase tracking-tight">{t('pricing.faq.questions.1.q')}</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-accent font-bold">keyboard_arrow_down</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t-2 border-black pt-6">
                                {t('pricing.faq.questions.1.a')}
                            </div>
                        </details>
                        <details className="group bg-white dark:bg-white/5 overflow-hidden card-border">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-black uppercase tracking-tight">{t('pricing.faq.questions.2.q')}</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-accent font-bold">keyboard_arrow_down</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t-2 border-black pt-6">
                                {t('pricing.faq.questions.2.a')}
                            </div>
                        </details>
                        <details className="group bg-white dark:bg-white/5 overflow-hidden card-border">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-black uppercase tracking-tight">{t('pricing.faq.questions.3.q')}</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-accent font-bold">keyboard_arrow_down</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t-2 border-black pt-6">
                                {t('pricing.faq.questions.3.a')}
                            </div>
                        </details>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
                    <div className="bg-brandDark p-12 md:p-20 text-center text-white relative overflow-hidden card-border">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">{t('pricing.cta.title')}</h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-xl mx-auto font-medium">{t('pricing.cta.description')}</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <button className="bg-white text-black px-10 py-4 border-2 border-black font-black uppercase text-sm tracking-[0.2em] hover:bg-accent hover:text-white transition-all card-border">
                                    {t('pricing.cta.trial')}
                                </button>
                                <button className="bg-transparent border-2 border-white px-10 py-4 font-black uppercase text-sm tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                                    {t('pricing.cta.demo')}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
