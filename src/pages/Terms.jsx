import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Terms() {
    const { t } = useTranslation();
    return (
        <div className="bg-background-light min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white border-4 border-black p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                    <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter">{t('industriesPage.legal.terms.title')}</h1>
                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-10">{t('industriesPage.legal.terms.lastUpdated')}</p>
                    <div className="prose prose-xl font-medium text-darkBlue/80 leading-relaxed">
                        <p>{t('industriesPage.legal.terms.content')}</p>
                        <h2 className="text-2xl font-black text-darkBlue mt-12 mb-6 uppercase">Service Level</h2>
                        <p>Sempitecno guarantees a 99.9% uptime for all AI agent endpoints. Maintenance windows are scheduled during off-peak hours and communicated 48 hours in advance.</p>
                        <h2 className="text-2xl font-black text-darkBlue mt-12 mb-6 uppercase">User Responsibility</h2>
                        <p>Users are responsible for ensuring the data provided to AI agents does not violate any local or international laws. Sempitecno reserves the right to suspend agents engaging in malicious activities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
