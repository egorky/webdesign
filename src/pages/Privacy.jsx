import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Privacy() {
    const { t } = useTranslation();
    return (
        <div className="bg-background-light min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white border-4 border-black p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                    <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter">{t('legal.privacy.title')}</h1>
                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-10">{t('legal.privacy.lastUpdated')}</p>
                    <div className="prose prose-xl font-medium text-darkBlue/80 leading-relaxed">
                        <p>{t('legal.privacy.content')}</p>
                        <h2 className="text-2xl font-black text-darkBlue mt-12 mb-6 uppercase">Data Collection</h2>
                        <p>We collect only what is necessary for our AI models to perform their tasks. This includes communication logs, intent metadata, and specific database fields you explicitly share with our agents.</p>
                        <h2 className="text-2xl font-black text-darkBlue mt-12 mb-6 uppercase">Data Usage</h2>
                        <p>Your data is used exclusively to improve the performance of your dedicated AI agents. We do not share training weights or proprietary business logic across client instances.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
