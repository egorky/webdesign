import React from 'react';

export default function Pricing() {
    return (
        <div className="relative min-h-screen">
            <div className="grain"></div>
            <div className="fixed top-[-100px] left-[-100px] gradient-blur opacity-60 dark:opacity-40"></div>
            <div className="fixed bottom-[-200px] right-[-100px] gradient-blur opacity-60 dark:opacity-40" style={{ background: 'radial-gradient(circle, rgba(112, 65, 255, 0.2) 0%, rgba(0, 29, 61, 0.1) 50%, rgba(255, 255, 255, 0) 100%)' }}></div>

            <main className="relative z-10">
                <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-brandDark dark:text-white">
                        Transparent <span className="underline decoration-4 decoration-accent">pricing</span><br />for every scale.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Choose a plan that fits your current needs and scale seamlessly as your AI ecosystem evolves.
                    </p>
                </section>

                <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
                        <div className="bg-white dark:bg-gray-900 p-8 flex flex-col transition-all card-border dark:border-white">
                            <div className="mb-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-2 block">Starter</span>
                                <h3 className="text-4xl font-black mb-4">$49<span className="text-lg font-medium text-gray-500">/mo</span></h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Perfect for individuals and small projects getting started with AI automation.</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium">Up to 5,000 AI interactions</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium">Standard CRM integration</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium">Community support</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-400">
                                    <span className="material-symbols-outlined">block</span>
                                    <span className="line-through">Custom security protocols</span>
                                </li>
                            </ul>
                            <button className="w-full bg-transparent border-2 border-black py-3 font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">
                                Get Started
                            </button>
                        </div>
                        <div className="relative bg-white dark:bg-primary p-8 flex flex-col transition-all card-border md:-translate-y-4">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-5 py-1.5 font-black uppercase tracking-widest text-[10px] border-2 border-black">
                                Most Popular
                            </div>
                            <div className="mb-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent dark:text-accent mb-2 block">Growth</span>
                                <h3 className="text-4xl font-black mb-4 dark:text-white">$199<span className="text-lg font-medium text-gray-500 dark:text-gray-400">/mo</span></h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">Scalable infrastructure for growing teams focused on deep CRM integration.</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium dark:text-white">Unlimited AI interactions</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium dark:text-white">Advanced CRM & ERP Sync</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium dark:text-white">Priority 24/7 support</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium dark:text-white">Basic Security Compliance</span>
                                </li>
                            </ul>
                            <button className="w-full bg-accent text-white py-4 border-2 border-black font-black uppercase text-xs tracking-widest hover:brightness-110 transition-all">
                                Go Pro Now
                            </button>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-8 flex flex-col transition-all card-border dark:border-white">
                            <div className="mb-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-2 block">Enterprise</span>
                                <h3 className="text-4xl font-black mb-4">Custom</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Full-suite enterprise solutions with dedicated infrastructure and security.</p>
                            </div>
                            <ul className="space-y-4 mb-10 flex-grow">
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium">Dedicated AI Instance</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium">On-premise deployment</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium">White-label capabilities</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm">
                                    <span className="material-symbols-outlined text-accent font-bold">check_circle</span>
                                    <span className="font-medium">SOC2 Type II Compliance</span>
                                </li>
                            </ul>
                            <button className="w-full bg-transparent border-2 border-black py-3 font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </section>

                <section className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black tracking-tight mb-4 text-brandDark dark:text-white">Frequently Asked Questions</h2>
                        <div className="h-1.5 w-24 bg-accent mx-auto mb-6"></div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">Everything you need to know about Sempitecno AI solutions.</p>
                    </div>
                    <div className="space-y-6">
                        <details className="group bg-white dark:bg-white/5 overflow-hidden card-border" open>
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-black uppercase tracking-tight">How does Sempitecno ensure AI security?</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-accent font-bold">keyboard_arrow_down</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t-2 border-black pt-6">
                                We prioritize data privacy through end-to-end encryption and anonymization protocols. For Enterprise clients, we offer on-premise deployments and isolated AI instances to ensure your proprietary data never leaves your infrastructure. We are currently pursuing SOC2 Type II certification.
                            </div>
                        </details>
                        <details className="group bg-white dark:bg-white/5 overflow-hidden card-border">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-black uppercase tracking-tight">Can it integrate with my existing CRM?</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-accent font-bold">keyboard_arrow_down</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t-2 border-black pt-6">
                                Yes, Sempitecno features native connectors for Salesforce, HubSpot, and Microsoft Dynamics. Our API-first approach allows for seamless two-way synchronization, ensuring your customer data is always up-to-date across all platforms.
                            </div>
                        </details>
                        <details className="group bg-white dark:bg-white/5 overflow-hidden card-border">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-black uppercase tracking-tight">What is the typical setup time?</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-accent font-bold">keyboard_arrow_down</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t-2 border-black pt-6">
                                Starter and Growth plans can be up and running in under 24 hours. Enterprise deployments, which often include custom training and security audits, typically range from 2 to 4 weeks depending on complexity.
                            </div>
                        </details>
                        <details className="group bg-white dark:bg-white/5 overflow-hidden card-border">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <span className="text-lg font-black uppercase tracking-tight">Is there a discount for annual billing?</span>
                                <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-accent font-bold">keyboard_arrow_down</span>
                            </summary>
                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t-2 border-black pt-6">
                                Absolutely. When you choose annual billing, you receive two months free (roughly 17% savings) compared to month-to-month subscriptions.
                            </div>
                        </details>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
                    <div className="bg-brandDark p-12 md:p-20 text-center text-white relative overflow-hidden card-border">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">Ready to evolve?</h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-xl mx-auto font-medium">Join 500+ forward-thinking companies building the next generation of AI-driven business.</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <button className="bg-white text-black px-10 py-4 border-2 border-black font-black uppercase text-sm tracking-[0.2em] hover:bg-accent hover:text-white transition-all card-border">
                                    Start Your Free Trial
                                </button>
                                <button className="bg-transparent border-2 border-white px-10 py-4 font-black uppercase text-sm tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                                    Book a Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
