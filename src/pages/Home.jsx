import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();
    return (
        <>
            <header className="relative overflow-hidden pt-24 pb-32 hero-pattern">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-4 py-2 border-2 border-black bg-yellow-300 font-black text-xs tracking-widest uppercase mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            {t('home.badge')}
                        </div>
                        <h1 className="font-display text-6xl lg:text-8xl font-black leading-[0.95] mb-10 tracking-tighter text-darkBlue">
                            <Trans
                                i18nKey="home.title"
                                components={{
                                    br: <br />,
                                    italic: <span className="text-primary italic" />
                                }}
                            />
                        </h1>
                        <p className="text-xl text-darkBlue/80 mb-12 max-w-lg leading-relaxed font-medium">
                            {t('home.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link to="/contact" className="w-full sm:w-auto bg-darkBlue text-white px-10 py-5 b-solid font-black text-lg uppercase tracking-tighter shadow-[6px_6px_0px_0px_rgba(124,58,237,1)] hover:-translate-y-1 transition-all text-center">
                                {t('home.cta')}
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto flex items-center justify-center gap-3 font-black text-lg uppercase tracking-tighter hover:text-primary transition-colors">
                                {t('home.secondaryCta')}
                                <span className="material-symbols-outlined font-bold">arrow_right_alt</span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white b-solid shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-2">
                            <div className="bg-black text-white p-3 flex items-center justify-between mb-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest">{t('home.dashboardVersion')}</span>
                            </div>
                            <img alt="Dashboard Visualization" className="w-full h-[450px] object-cover b-solid" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAue2ZNf74BaSBay9VeRcgpOmqFvcXhINklpcJyIt63p6ns0idmYu30AiZK1ktlVe56UWaBs8H3nq33bNQCC0izOkVJ0nNakY7SsVmZHRpNAj6qKrA_XExbau3qisVFOXt8C60v0oLL8DIxx3WJ45LzRfdF1irL4G2Htzu2T5nUFvDTIWIn3YmIsyClfE5Zh7btQhv33kwUXvVMrH7kol8XvMqWyTb157GW-hAgnx-wwruOhAWx-HWVgs-yE4cLDdxekINNQVRQhECz" />
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-16 border-y-2 border-black bg-purple-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-4xl text-primary font-bold">verified</span>
                            <div>
                                <h3 className="font-display font-black text-xl uppercase mb-2">{t('home.features.detail.title')}</h3>
                                <p className="text-sm font-medium leading-relaxed opacity-70">{t('home.features.detail.description')}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-4xl text-primary font-bold">psychology</span>
                            <div>
                                <h3 className="font-display font-black text-xl uppercase mb-2">{t('home.features.noHeadaches.title')}</h3>
                                <p className="text-sm font-medium leading-relaxed opacity-70">{t('home.features.noHeadaches.description')}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-4xl text-primary font-bold">bolt</span>
                            <div>
                                <h3 className="font-display font-black text-xl uppercase mb-2">{t('home.features.fastExecution.title')}</h3>
                                <p className="text-sm font-medium leading-relaxed opacity-70">{t('home.features.fastExecution.description')}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-4xl text-primary font-bold">security</span>
                            <div>
                                <h3 className="font-display font-black text-xl uppercase mb-2">{t('home.features.reliable.title')}</h3>
                                <p className="text-sm font-medium leading-relaxed opacity-70">{t('home.features.reliable.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-white" id="solutions">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-24">
                        <h2 className="font-display text-5xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">{t('home.solutions.title')}</h2>
                        <div className="h-2 w-32 bg-primary mb-8"></div>
                        <p className="text-darkBlue/70 max-w-2xl text-xl font-medium leading-relaxed">
                            {t('home.solutions.subtitle')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="group bg-white b-solid p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-20 h-20 b-solid bg-green-50 flex items-center justify-center">
                                    <span className="material-symbols-outlined font-bold text-5xl text-green-600">chat</span>
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-green-600 bg-green-50 px-3 py-1 b-solid">{t('home.solutions.whatsapp.badge')}</span>
                            </div>
                            <h3 className="font-display text-4xl font-black mb-6 uppercase tracking-tight">{t('home.solutions.whatsapp.title')}</h3>
                            <p className="text-darkBlue/70 mb-10 text-lg font-medium">
                                {t('home.solutions.whatsapp.description')}
                            </p>
                            <ul className="space-y-6 mb-12">
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">{t('home.solutions.whatsapp.feature1')}</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">{t('home.solutions.whatsapp.feature2')}</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">{t('home.solutions.whatsapp.feature3')}</span>
                                </li>
                            </ul>
                            <div className="bg-slate-50 p-8 b-solid relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full -mr-12 -mt-12"></div>
                                <div className="space-y-6 relative">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 b-solid bg-white flex items-center justify-center font-black text-xs shrink-0">U</div>
                                        <div className="bg-white b-solid px-5 py-3 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                            {t('home.solutions.whatsapp.chat.user')}
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 justify-end">
                                        <div className="bg-primary text-white b-solid px-5 py-3 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] order-1">
                                            {t('home.solutions.whatsapp.chat.bot')}
                                        </div>
                                        <div className="w-10 h-10 b-solid bg-primary text-white flex items-center justify-center shrink-0 order-2">
                                            <span className="material-symbols-outlined text-sm font-bold">auto_awesome</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group bg-white b-solid p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-20 h-20 b-solid bg-blue-50 flex items-center justify-center">
                                    <span className="material-symbols-outlined font-bold text-5xl text-blue-600">call</span>
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 b-solid">{t('home.solutions.voice.badge')}</span>
                            </div>
                            <h3 className="font-display text-4xl font-black mb-6 uppercase tracking-tight">{t('home.solutions.voice.title')}</h3>
                            <p className="text-darkBlue/70 mb-10 text-lg font-medium">
                                {t('home.solutions.voice.description')}
                            </p>
                            <ul className="space-y-6 mb-12">
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">{t('home.solutions.voice.feature1')}</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">{t('home.solutions.voice.feature2')}</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">{t('home.solutions.voice.feature3')}</span>
                                </li>
                            </ul>
                            <div className="relative bg-darkBlue b-solid aspect-video overflow-hidden">
                                <img alt="Voice AI Bot Visualization" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXucVnIBSEZZ1LTNA9RVCA9TAKuybOYHKLwwDeykYln9h_Gy-Vb3h5AO5ZAhyXqSY_BhZRRCIeB5rei_0Q1_ctOLCpPYK7XOS4gtFKMr20TyRxGDthnqgVBs4G58An0fEbN97kNXQoGRrvJEdz5TbGjrmK47xS0LaqcBgJzPPVTsM99coRU6Ul7wLq7eSX-3GLoElCjytFvjknrSnyKXEs1I8HflRy4HhtHdaNau8NLhOjnhWizFbELHBtz9vk2IhR1M7J57WquD61" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                    <div className="flex gap-2 items-center">
                                        <div className="w-2 h-8 bg-primary b-solid"></div>
                                        <div className="w-2 h-16 bg-white b-solid"></div>
                                        <div className="w-2 h-12 bg-primary b-solid"></div>
                                        <div className="w-2 h-20 bg-white b-solid"></div>
                                        <div className="w-2 h-10 bg-primary b-solid"></div>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[10px] text-white font-black uppercase tracking-widest">
                                    <span>{t('home.solutions.voice.monitor')}</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                        LIVE
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group bg-white b-solid p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(124,58,237,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-20 h-20 b-solid bg-purple-50 flex items-center justify-center">
                                    <span className="material-symbols-outlined font-bold text-5xl text-primary">settings_suggest</span>
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-primary bg-purple-50 px-3 py-1 b-solid">RPA CORE</span>
                            </div>
                            <h3 className="font-display text-4xl font-black mb-6 uppercase tracking-tight">{t('home.rpa.title')}</h3>
                            <p className="text-darkBlue/70 mb-10 text-lg font-medium">
                                {t('home.rpa.description')}
                            </p>
                            <ul className="space-y-6 mb-12">
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">Cross-Platform Orchestration</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">Zero-API Legacy Sync</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">Autonomous Process Mining</span>
                                </li>
                            </ul>
                            <div className="relative bg-slate-900 b-solid aspect-video overflow-hidden flex items-center justify-center">
                                <div className="grid grid-cols-3 gap-4 w-full px-8">
                                    <div className="h-2 bg-primary/40 rounded animate-pulse"></div>
                                    <div className="h-2 bg-white/20 rounded"></div>
                                    <div className="h-2 bg-primary/60 rounded animate-pulse delay-75"></div>
                                    <div className="h-2 bg-white/10 rounded"></div>
                                    <div className="h-2 bg-primary/50 rounded animate-pulse delay-150"></div>
                                    <div className="h-2 bg-white/30 rounded"></div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white/20 text-6xl animate-spin-slow">sync</span>
                                </div>
                            </div>
                        </div>
                        <div className="group bg-white b-solid p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(236,72,153,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-20 h-20 b-solid bg-pink-50 flex items-center justify-center">
                                    <span className="material-symbols-outlined font-bold text-5xl text-pink-600">hub</span>
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-pink-600 bg-pink-50 px-3 py-1 b-solid">{t('home.solutions.omnichannel.badge')}</span>
                            </div>
                            <h3 className="font-display text-4xl font-black mb-6 uppercase tracking-tight">{t('home.solutions.omnichannel.title')}</h3>
                            <p className="text-darkBlue/70 mb-10 text-lg font-medium">
                                {t('home.solutions.omnichannel.description')}
                            </p>
                            <ul className="space-y-6 mb-12">
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">{t('home.solutions.omnichannel.feature1')}</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">{t('home.solutions.omnichannel.feature2')}</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">{t('home.solutions.omnichannel.feature3')}</span>
                                </li>
                            </ul>
                            <div className="relative bg-slate-50 b-solid aspect-video overflow-hidden flex items-center justify-center p-8">
                                <div className="flex gap-4 items-center justify-center w-full">
                                    <div className="w-16 h-16 bg-white b-solid shadow-sm flex items-center justify-center">
                                        <span className="material-symbols-outlined text-3xl text-green-600">chat</span>
                                    </div>
                                    <div className="w-12 h-1 bg-black/10"></div>
                                    <div className="w-20 h-20 bg-darkBlue b-solid shadow-lg flex items-center justify-center text-white relative">
                                        <span className="material-symbols-outlined text-4xl">hub</span>
                                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                    </div>
                                    <div className="w-12 h-1 bg-black/10"></div>
                                    <div className="w-16 h-16 bg-white b-solid shadow-sm flex items-center justify-center">
                                        <span className="material-symbols-outlined text-3xl text-blue-600">call</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 text-[10px] font-black uppercase tracking-widest text-darkBlue/40">
                                    {t('home.solutions.omnichannel.monitor')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-slate-50 border-y-2 border-black" id="industries">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
                        <div className="max-w-2xl">
                            <h2 className="font-display text-5xl lg:text-6xl font-black mb-8 tracking-tighter uppercase leading-none">{t('industries.title')}</h2>
                            <p className="text-darkBlue/70 text-xl font-medium">{t('industries.subtitle')}</p>
                        </div>
                        <button className="bg-white b-solid px-8 py-4 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">{t('industries.cta')}</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white p-10 b-solid shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            <div className="w-16 h-16 b-solid bg-orange-50 text-orange-600 flex items-center justify-center mb-10">
                                <span className="material-symbols-outlined text-3xl font-bold">shopping_bag</span>
                            </div>
                            <h4 className="font-display font-black text-2xl mb-6 uppercase tracking-tight">{t('industries.retail.title')}</h4>
                            <p className="text-darkBlue/70 mb-10 font-medium leading-relaxed">
                                {t('industries.retail.description')}
                            </p>
                            <div className="pt-8 border-t-2 border-black">
                                <span className="text-xs font-black text-primary tracking-widest uppercase mb-2 block">{t('industries.retail.benefitLabel')}</span>
                                <p className="text-lg font-black uppercase">{t('industries.retail.benefitValue')}</p>
                            </div>
                        </div>
                        <div className="bg-white p-10 b-solid shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            <div className="w-16 h-16 b-solid bg-cyan-50 text-cyan-600 flex items-center justify-center mb-10">
                                <span className="material-symbols-outlined text-3xl font-bold">medical_services</span>
                            </div>
                            <h4 className="font-display font-black text-2xl mb-6 uppercase tracking-tight">{t('industries.healthcare.title')}</h4>
                            <p className="text-darkBlue/70 mb-10 font-medium leading-relaxed">
                                {t('industries.healthcare.description')}
                            </p>
                            <div className="pt-8 border-t-2 border-black">
                                <span className="text-xs font-black text-primary tracking-widest uppercase mb-2 block">{t('industries.healthcare.benefitLabel')}</span>
                                <p className="text-lg font-black uppercase">{t('industries.healthcare.benefitValue')}</p>
                            </div>
                        </div>
                        <div className="bg-white p-10 b-solid shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            <div className="w-16 h-16 b-solid bg-purple-50 text-purple-600 flex items-center justify-center mb-10">
                                <span className="material-symbols-outlined text-3xl font-bold">support_agent</span>
                            </div>
                            <h4 className="font-display font-black text-2xl mb-6 uppercase tracking-tight">{t('industries.customerService.title')}</h4>
                            <p className="text-darkBlue/70 mb-10 font-medium leading-relaxed">
                                {t('industries.customerService.description')}
                            </p>
                            <div className="pt-8 border-t-2 border-black">
                                <span className="text-xs font-black text-primary tracking-widest uppercase mb-2 block">{t('industries.customerService.benefitLabel')}</span>
                                <p className="text-lg font-black uppercase">{t('industries.customerService.benefitValue')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-white" id="features">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="b-solid p-2 bg-white shadow-[16px_16px_0px_0px_rgba(124,58,237,1)]">
                                <img alt="Team working" className="w-full b-solid grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwnzPCQQub0JXeKefdMo902un_co9txLdKxcjdeJdSTIiWtMSUvFqx9cH5XNSvvVDJOZjHyHQFHTZ_75aXpcWS7YDpw4kh4R3W4i98do3ovH_WaPk77CXgLRuRLV9jH-nwO89RNpN5zkB1UVmJuJzEgN3FNEsNTLHZnRVJUuy2hLPkYEwZVFe4ZWdFMDWkjcsCry0oKBeEXxNw2Ku5gwahVNw9kJRy2SA4tvIZ3vvZmI8-d4UxnzjaWgYuou640S8eI8_feCrhJ8pI" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-yellow-300 p-8 b-solid shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-20">
                                <div className="text-6xl font-black text-black mb-1">98%</div>
                                <div className="text-xs font-black text-black uppercase tracking-widest">{t('scale.satisfaction')}</div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-display text-5xl lg:text-6xl font-black mb-10 tracking-tighter uppercase leading-[0.9]">{t('scale.title')}</h2>
                            <p className="text-darkBlue/70 text-xl font-medium mb-12 leading-relaxed">
                                {t('scale.description')}
                            </p>
                            <div className="grid grid-cols-2 gap-12">
                                <div className="b-solid p-6 bg-purple-50">
                                    <div className="text-4xl font-black mb-2 tracking-tighter">50+</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-darkBlue/60">{t('scale.integrations')}</div>
                                </div>
                                <div className="b-solid p-6 bg-purple-50">
                                    <div className="text-4xl font-black mb-2 tracking-tighter">120+</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-darkBlue/60">{t('scale.languages')}</div>
                                </div>
                                <div className="b-solid p-6 bg-purple-50">
                                    <div className="text-4xl font-black mb-2 tracking-tighter">&lt; 2s</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-darkBlue/60">{t('scale.responseTime')}</div>
                                </div>
                                <div className="b-solid p-6 bg-purple-50">
                                    <div className="text-4xl font-black mb-2 tracking-tighter">10M+</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-darkBlue/60">{t('scale.processed')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-darkBlue">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-primary b-solid p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-[16px_16px_0px_0px_rgba(255,255,255,0.1)]">
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="font-display text-5xl lg:text-8xl font-black mb-10 uppercase tracking-tighter leading-[0.85]">{t('ctaSection.title')}</h2>
                            <p className="text-white/80 text-xl lg:text-2xl mb-16 font-medium">
                                {t('ctaSection.description')}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                                <Link to="/contact" className="w-full sm:w-auto bg-white text-darkBlue px-12 py-6 b-solid font-black text-xl uppercase tracking-tighter shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all text-center">
                                    {t('ctaSection.trial')}
                                </Link>
                                <Link to="/contact" className="w-full sm:w-auto bg-darkBlue text-white px-12 py-6 b-solid font-black text-xl uppercase tracking-tighter shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all text-center">
                                    {t('ctaSection.demo')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
