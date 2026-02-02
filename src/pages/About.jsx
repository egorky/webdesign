import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function About() {
    const { t } = useTranslation();
    return (
        <div className="relative min-h-screen">
            <div className="grain"></div>
            <div className="fixed top-[-100px] left-[-100px] gradient-blur opacity-60 dark:opacity-40"></div>

            <main className="relative z-10">
                <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-brandDark dark:text-white uppercase italic">
                        {t('about.title')}
                    </h1>
                    <div className="h-2 w-32 bg-accent mx-auto mb-10"></div>
                </section>

                <section className="max-w-4xl mx-auto px-6 lg:px-12 pb-24">
                    <div className="bg-white dark:bg-gray-900 p-10 md:p-16 card-border shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)]">
                        <div className="prose prose-xl dark:prose-invert max-w-none">
                            {t('about.content').split('\n\n').map((paragraph, i) => (
                                <p key={i} className="text-lg md:text-xl font-medium leading-relaxed mb-8 last:mb-0 text-gray-800 dark:text-gray-200">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-primary p-12 card-border text-white">
                            <h3 className="text-3xl font-black uppercase mb-4">Our Vision</h3>
                            <p className="text-lg font-bold opacity-90 leading-relaxed uppercase">To become the global bridge between businesses and AI, making advanced automation accessible, ethical, and human-centric.</p>
                        </div>
                        <div className="bg-accent p-12 card-border text-black">
                            <h3 className="text-3xl font-black uppercase mb-4">Our Commitment</h3>
                            <p className="text-lg font-bold opacity-90 leading-relaxed uppercase">We don't just deliver technology; we partner with our clients to ensure long-term success and continuous innovation.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
