import React from 'react';

export default function Home() {
    return (
        <>
            <header className="relative overflow-hidden pt-24 pb-32 hero-pattern">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-4 py-2 border-2 border-black bg-yellow-300 font-black text-xs tracking-widest uppercase mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            Next-Gen AI Automation
                        </div>
                        <h1 className="font-display text-6xl lg:text-8xl font-black leading-[0.95] mb-10 tracking-tighter text-darkBlue">
                            YOUR CUSTOMERS' <br />
                            <span className="text-primary italic">FAVOURITE</span> AI AGENT
                        </h1>
                        <p className="text-xl text-darkBlue/80 mb-12 max-w-lg leading-relaxed font-medium">
                            SEMPITECNO automates your WhatsApp interactions and phone calls with human-like AI bots that schedule, qualify, and convert leads 24/7.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <button className="w-full sm:w-auto bg-darkBlue text-white px-10 py-5 b-solid font-black text-lg uppercase tracking-tighter shadow-[6px_6px_0px_0px_rgba(124,58,237,1)] hover:-translate-y-1 transition-all">
                                GET STARTED
                            </button>
                            <button className="w-full sm:w-auto flex items-center justify-center gap-3 font-black text-lg uppercase tracking-tighter hover:text-primary transition-colors">
                                SEE FOR YOURSELF
                                <span className="material-symbols-outlined font-bold">arrow_right_alt</span>
                            </button>
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
                                <span className="text-[10px] font-black uppercase tracking-widest">AI DASHBOARD v2.0</span>
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
                                <h3 className="font-display font-black text-xl uppercase mb-2">Attention to detail</h3>
                                <p className="text-sm font-medium leading-relaxed opacity-70">Every interaction is fine-tuned to match your brand's unique voice and tone.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-4xl text-primary font-bold">psychology</span>
                            <div>
                                <h3 className="font-display font-black text-xl uppercase mb-2">No headaches</h3>
                                <p className="text-sm font-medium leading-relaxed opacity-70">Plug-and-play integration. Our AI starts learning from your data in minutes.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-4xl text-primary font-bold">bolt</span>
                            <div>
                                <h3 className="font-display font-black text-xl uppercase mb-2">Fast execution</h3>
                                <p className="text-sm font-medium leading-relaxed opacity-70">Instant responses to every customer query, ensuring no lead goes cold.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-4xl text-primary font-bold">security</span>
                            <div>
                                <h3 className="font-display font-black text-xl uppercase mb-2">Easy and reliable</h3>
                                <p className="text-sm font-medium leading-relaxed opacity-70">GDPR-compliant and built on secure infrastructure you can trust.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-white" id="solutions">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-24">
                        <h2 className="font-display text-5xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">Omnichannel AI Orchestration</h2>
                        <div className="h-2 w-32 bg-primary mb-8"></div>
                        <p className="text-darkBlue/70 max-w-2xl text-xl font-medium leading-relaxed">
                            Deploy intelligent agents where your customers already are. From instant messaging to real-time voice calls.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="group bg-white b-solid p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(34,197,94,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-20 h-20 b-solid bg-green-50 flex items-center justify-center">
                                    <span className="material-symbols-outlined font-bold text-5xl text-green-600">chat</span>
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest text-green-600 bg-green-50 px-3 py-1 b-solid">WhatsApp Verified</span>
                            </div>
                            <h3 className="font-display text-4xl font-black mb-6 uppercase tracking-tight">WhatsApp AI Agent</h3>
                            <p className="text-darkBlue/70 mb-10 text-lg font-medium">
                                The smartest conversational assistant for your official WhatsApp Business account.
                            </p>
                            <ul className="space-y-6 mb-12">
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">Automated Scheduling & CRM Sync</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">24/7 Multi-language Support</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">Intelligent Lead Qualification</span>
                                </li>
                            </ul>
                            <div className="bg-slate-50 p-8 b-solid relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full -mr-12 -mt-12"></div>
                                <div className="space-y-6 relative">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 b-solid bg-white flex items-center justify-center font-black text-xs shrink-0">U</div>
                                        <div className="bg-white b-solid px-5 py-3 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                            Hi, I'd like to book a property viewing for Saturday.
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 justify-end">
                                        <div className="bg-primary text-white b-solid px-5 py-3 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] order-1">
                                            Great! I have 10:00 AM or 2:00 PM available for Oak Ridge Villa. Which works best?
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
                                <span className="text-xs font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 b-solid">Voice Core</span>
                            </div>
                            <h3 className="font-display text-4xl font-black mb-6 uppercase tracking-tight">Voice AI Bot</h3>
                            <p className="text-darkBlue/70 mb-10 text-lg font-medium">
                                Natural-sounding voice bots that handle complex calls with zero latency.
                            </p>
                            <ul className="space-y-6 mb-12">
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">Inbound Call Routing & Resolution</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">Outbound Sales & Follow-ups</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="material-symbols-outlined text-primary font-bold">check_box</span>
                                    <span className="font-bold uppercase text-sm tracking-wide">Hyper-realistic Human Speech</span>
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
                                    <span>Frequency Monitor</span>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                        LIVE
                                    </div>
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
                            <h2 className="font-display text-5xl lg:text-6xl font-black mb-8 tracking-tighter uppercase leading-none">Built for your industry</h2>
                            <p className="text-darkBlue/70 text-xl font-medium">Tailored AI models trained on specific domain knowledge to ensure maximum accuracy and value.</p>
                        </div>
                        <button className="bg-white b-solid px-8 py-4 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Explore All</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white p-10 b-solid shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            <div className="w-16 h-16 b-solid bg-orange-50 text-orange-600 flex items-center justify-center mb-10">
                                <span className="material-symbols-outlined text-3xl font-bold">shopping_bag</span>
                            </div>
                            <h4 className="font-display font-black text-2xl mb-6 uppercase tracking-tight">Retail & E-commerce</h4>
                            <p className="text-darkBlue/70 mb-10 font-medium leading-relaxed">
                                Track orders, handle returns, and offer personalized product recommendations directly through chat.
                            </p>
                            <div className="pt-8 border-t-2 border-black">
                                <span className="text-xs font-black text-primary tracking-widest uppercase mb-2 block">Key Benefit</span>
                                <p className="text-lg font-black uppercase">40% reduction in support tickets</p>
                            </div>
                        </div>
                        <div className="bg-white p-10 b-solid shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            <div className="w-16 h-16 b-solid bg-cyan-50 text-cyan-600 flex items-center justify-center mb-10">
                                <span className="material-symbols-outlined text-3xl font-bold">medical_services</span>
                            </div>
                            <h4 className="font-display font-black text-2xl mb-6 uppercase tracking-tight">Healthcare</h4>
                            <p className="text-darkBlue/70 mb-10 font-medium leading-relaxed">
                                HIPAA-ready appointment scheduling, medication reminders, and basic triage automation.
                            </p>
                            <div className="pt-8 border-t-2 border-black">
                                <span className="text-xs font-black text-primary tracking-widest uppercase mb-2 block">Key Benefit</span>
                                <p className="text-lg font-black uppercase">Instant patient response 24/7</p>
                            </div>
                        </div>
                        <div className="bg-white p-10 b-solid shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                            <div className="w-16 h-16 b-solid bg-purple-50 text-purple-600 flex items-center justify-center mb-10">
                                <span className="material-symbols-outlined text-3xl font-bold">home_work</span>
                            </div>
                            <h4 className="font-display font-black text-2xl mb-6 uppercase tracking-tight">Real Estate</h4>
                            <p className="text-darkBlue/70 mb-10 font-medium leading-relaxed">
                                Instant lead qualification, automated showing schedules, and property detail delivery.
                            </p>
                            <div className="pt-8 border-t-2 border-black">
                                <span className="text-xs font-black text-primary tracking-widest uppercase mb-2 block">Key Benefit</span>
                                <p className="text-lg font-black uppercase">3x higher lead conversion rate</p>
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
                                <div className="text-xs font-black text-black uppercase tracking-widest">Satisfaction Rate</div>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-display text-5xl lg:text-6xl font-black mb-10 tracking-tighter uppercase leading-[0.9]">Information-rich automation that scales.</h2>
                            <p className="text-darkBlue/70 text-xl font-medium mb-12 leading-relaxed">
                                We don't just provide bots; we provide strategic AI infrastructure. Our solutions are designed to handle thousands of concurrent conversations without losing the human touch.
                            </p>
                            <div className="grid grid-cols-2 gap-12">
                                <div className="b-solid p-6 bg-purple-50">
                                    <div className="text-4xl font-black mb-2 tracking-tighter">50+</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-darkBlue/60">Native Integrations</div>
                                </div>
                                <div className="b-solid p-6 bg-purple-50">
                                    <div className="text-4xl font-black mb-2 tracking-tighter">120+</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-darkBlue/60">Languages Supported</div>
                                </div>
                                <div className="b-solid p-6 bg-purple-50">
                                    <div className="text-4xl font-black mb-2 tracking-tighter">&lt; 2s</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-darkBlue/60">Response Time</div>
                                </div>
                                <div className="b-solid p-6 bg-purple-50">
                                    <div className="text-4xl font-black mb-2 tracking-tighter">10M+</div>
                                    <div className="text-xs font-black uppercase tracking-widest text-darkBlue/60">Messages Processed</div>
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
                            <h2 className="font-display text-5xl lg:text-8xl font-black mb-10 uppercase tracking-tighter leading-[0.85]">Ready to automate your growth?</h2>
                            <p className="text-white/80 text-xl lg:text-2xl mb-16 font-medium">
                                Join the hundreds of companies already using SEMPITECNO to redefine their customer experience.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                                <button className="w-full sm:w-auto bg-white text-darkBlue px-12 py-6 b-solid font-black text-xl uppercase tracking-tighter shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                                    START FREE TRIAL
                                </button>
                                <button className="w-full sm:w-auto bg-darkBlue text-white px-12 py-6 b-solid font-black text-xl uppercase tracking-tighter shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all">
                                    BOOK A DEMO
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
