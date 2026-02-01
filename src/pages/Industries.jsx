import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

export default function Industries() {
    const { t } = useTranslation();

    const sectors = ['retail', 'healthcare', 'realEstate', 'banking'];

    return (
        <div className="bg-background-light min-h-screen">
            <header className="relative overflow-hidden pt-24 pb-20 hero-pattern border-b-2 border-black">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="font-display text-5xl lg:text-7xl font-black leading-tight mb-8 tracking-tighter text-darkBlue">
                        <Trans
                            i18nKey="industriesPage.hero.title"
                            components={{
                                italic: <span className="text-primary italic" />,
                                br: <br />
                            }}
                        />
                    </h1>
                    <p className="text-xl text-darkBlue/80 max-w-3xl mx-auto leading-relaxed font-medium">
                        {t('industriesPage.hero.subtitle')}
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-24">
                <div className="space-y-32">
                    {sectors.map((sector, index) => (
                        <section id={sector} key={sector} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="inline-block px-4 py-2 border-2 border-black bg-yellow-300 font-black text-xs tracking-widest uppercase mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    {t(`home.industries.${sector === 'banking' ? 'realEstate' : sector}.benefitLabel`)}: {t(`home.industries.${sector === 'banking' ? 'realEstate' : sector}.benefitValue`)}
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight text-darkBlue">
                                    {t(`industriesPage.sectors.${sector}.title`)}
                                </h2>
                                <p className="text-lg text-darkBlue/70 mb-10 font-bold leading-relaxed">
                                    {t(`industriesPage.sectors.${sector}.description`)}
                                </p>

                                <div className="space-y-8">
                                    {[0, 1, 2, 3].map((i) => (
                                        <div key={i} className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="w-10 h-10 bg-primary text-white flex items-center justify-center font-black border-2 border-black">
                                                    {i + 1}
                                                </span>
                                                <h3 className="text-xl font-black uppercase tracking-tight">
                                                    {t(`industriesPage.sectors.${sector}.useCases.${i}.title`)}
                                                </h3>
                                            </div>
                                            <p className="text-darkBlue/80 font-medium leading-relaxed">
                                                {t(`industriesPage.sectors.${sector}.useCases.${i}.description`)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="bg-white border-4 border-black p-4 shadow-[16px_16px_0px_0px_rgba(124,58,237,1)]">
                                    <div className="bg-black text-white p-4 flex items-center justify-between mb-4">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest">
                                            {t('home.dashboardVersion')}
                                        </span>
                                    </div>
                                    {/* Placeholder for industry-specific visualization */}
                                    <div className="bg-gray-100 h-[600px] border-2 border-black flex items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                                        <span className="material-symbols-outlined text-9xl text-darkBlue/20 group-hover:scale-110 transition-transform duration-500">
                                            {sector === 'retail' ? 'shopping_cart' :
                                                sector === 'healthcare' ? 'medical_services' :
                                                    sector === 'realEstate' ? 'apartment' : 'account_balance'}
                                        </span>
                                        <div className="absolute bottom-10 left-10 right-10 bg-white border-2 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                            <p className="text-xs font-black uppercase text-primary mb-2 tracking-widest">Live Integration</p>
                                            <p className="font-bold text-darkBlue italic">"AI Agent is now processing {sector} workflows..."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                <section className="mt-40 bg-darkBlue p-12 md:p-24 text-center text-white relative overflow-hidden border-4 border-black shadow-[20px_20px_0px_0px_rgba(255,255,255,1),20px_20px_0px_4px_rgba(0,0,0,1)]">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">
                            {t('industriesPage.cta.title')}
                        </h2>
                        <p className="text-xl text-white/80 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
                            {t('industriesPage.cta.description')}
                        </p>
                        <button className="bg-primary text-white px-12 py-6 border-4 border-black font-black uppercase text-lg tracking-tighter shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all active:translate-y-0 active:shadow-none">
                            {t('industriesPage.cta.button')}
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
