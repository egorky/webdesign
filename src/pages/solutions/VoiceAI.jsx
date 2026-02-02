import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function VoiceAI() {
    const { t } = useTranslation();
    return (
        <div className="relative min-h-screen">
            <div className="grain"></div>
            <main className="relative z-10">
                <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block bg-yellow-400 text-black px-4 py-1.5 border-2 border-black font-black uppercase tracking-widest text-[10px] mb-6">
                                {t('solutions.voice.title')}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9] uppercase">
                                {t('solutions.voice.hero')}
                            </h1>
                            <p className="text-xl text-darkBlue/70 font-bold leading-relaxed mb-10 max-w-xl">
                                {t('solutions.voice.details')}
                            </p>
                            <Link to="/contact" className="b-solid bg-yellow-400 text-black px-10 py-4 font-black uppercase text-sm tracking-widest hover:brightness-110 transition-all inline-block shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                {t('nav.getStarted')}
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="card-border bg-white p-8 aspect-square flex items-center justify-center shadow-[16px_16px_0px_0px_rgba(250,204,21,0.2)]">
                                <span className="material-symbols-outlined text-[120px] text-yellow-500">mic</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-t-2 border-black/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t('solutions.voice.features', { returnObjects: true }).map((feature, i) => (
                            <div key={i} className="card-border bg-white p-8 hover:-translate-y-2 transition-transform">
                                <span className="material-symbols-outlined text-yellow-500 mb-6">volume_up</span>
                                <h3 className="text-lg font-black uppercase mb-2">{feature}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
