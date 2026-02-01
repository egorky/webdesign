import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function CustomerService() {
    const { t } = useTranslation();
    const useCases = [0, 1, 2, 3].map(i => ({
        title: t(`industryPages.customerService.useCase${i+1}.title`),
        description: t(`industryPages.customerService.useCase${i+1}.description`),
        details: t(`industryPages.customerService.useCase${i+1}.details`),
        benefits: t(`industryPages.customerService.useCase${i+1}.benefits`),
        image: i === 0 ? '/Users/ivangarcia/.gemini/antigravity/brain/407de219-f2f1-41be-a1f3-56cab62ad8c2/customer_service_automation_1769965350529.png' : null
    }));

    return (
        <div className="bg-background-light min-h-screen">
            <header className="relative overflow-hidden pt-24 pb-20 hero-pattern border-b-2 border-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="inline-block px-4 py-2 border-2 border-black bg-purple-300 font-black text-xs tracking-widest uppercase mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        {t('industries.customerService.benefitLabel')}: {t('industries.customerService.benefitValue')}
                    </div>
                    <h1 className="font-display text-5xl lg:text-7xl font-black leading-tight mb-8 tracking-tighter text-darkBlue">
                        {t('industryPages.customerService.hero.title')}
                    </h1>
                    <p className="text-xl text-darkBlue/80 max-w-3xl leading-relaxed font-medium">
                        {t('industryPages.customerService.hero.subtitle')}
                    </p>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-6 py-24">
                <div className="mb-20">
                    <h2 className="font-display text-4xl lg:text-5xl font-black mb-6 tracking-tight text-darkBlue uppercase">{t('industryPages.customerService.useCasesTitle')}</h2>
                    <div className="h-2 w-32 bg-primary"></div>
                </div>
                <div className="space-y-32">
                    {useCases.map((useCase, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="inline-block px-4 py-2 bg-primary text-white font-black text-xs tracking-widest uppercase mb-6">{t('industryPages.useCase')} {index + 1}</div>
                                <h3 className="text-3xl lg:text-4xl font-black mb-6 tracking-tight text-darkBlue">{useCase.title}</h3>
                                <p className="text-lg text-darkBlue/70 mb-6 font-medium leading-relaxed">{useCase.description}</p>
                                <p className="text-base text-darkBlue/60 mb-8 leading-relaxed">{useCase.details}</p>
                                <div className="bg-purple-50 b-solid p-6">
                                    <p className="font-black text-sm uppercase tracking-widest text-primary mb-3">{t('industryPages.keyBenefits')}</p>
                                    <p className="text-darkBlue/80 font-medium leading-relaxed">{useCase.benefits}</p>
                                </div>
                            </div>
                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                {useCase.image ? (
                                    <div className="bg-white b-solid p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"><img src={useCase.image} alt={useCase.title} className="w-full h-auto" /></div>
                                ) : (
                                    <div className="bg-purple-50 b-solid p-12 aspect-video flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"><span className="material-symbols-outlined text-9xl text-purple-600/30">support_agent</span></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <section className="mt-40 bg-darkBlue p-12 md:p-24 text-center text-white relative overflow-hidden border-4 border-black shadow-[20px_20px_0px_0px_rgba(255,255,255,1),20px_20px_0px_4px_rgba(0,0,0,1)]">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">{t('industryPages.cta.title')}</h2>
                        <p className="text-xl text-white/80 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">{t('industryPages.cta.description')}</p>
                        <Link to="/contact" className="inline-block bg-primary text-white px-12 py-6 border-4 border-black font-black uppercase text-lg tracking-tighter shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all">{t('industryPages.cta.button')}</Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
