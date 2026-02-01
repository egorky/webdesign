import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Security() {
    const { t } = useTranslation();
    return (
        <div className="bg-background-light min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white border-4 border-black p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
                    <h1 className="text-5xl font-black mb-6 uppercase tracking-tighter">{t('industriesPage.legal.security.title')}</h1>
                    <p className="text-xs font-black uppercase tracking-widest text-primary mb-10">{t('industriesPage.legal.security.lastUpdated')}</p>
                    <div className="prose prose-xl font-medium text-darkBlue/80 leading-relaxed">
                        <p>{t('industriesPage.legal.security.content')}</p>
                        <h2 className="text-2xl font-black text-darkBlue mt-12 mb-6 uppercase">Infrastructure</h2>
                        <p>Our AI core runs on isolated virtual machines with strict ingress/egress controls. All database connections use double-layered encryption (at rest and in transit).</p>
                        <h2 className="text-2xl font-black text-darkBlue mt-12 mb-6 uppercase">Compliance</h2>
                        <p>We are SOC2 Type I compliant and HIPAA-ready. Regular third-party audits ensure our security posture remains at the highest industry standard.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
