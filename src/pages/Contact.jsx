import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Client-side validation
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
            // Reset form after 3 seconds
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', company: '', phone: '', message: '' });
            }, 3000);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const whatsappNumber = '593999989522';
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <div className="bg-background-light min-h-screen">
            <header className="relative overflow-hidden pt-24 pb-20 hero-pattern border-b-2 border-black">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="font-display text-5xl lg:text-7xl font-black leading-tight mb-8 tracking-tighter text-darkBlue">
                        {t('contact.hero.title')}
                    </h1>
                    <p className="text-xl text-darkBlue/80 max-w-3xl mx-auto leading-relaxed font-medium">
                        {t('contact.hero.subtitle')}
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="bg-white b-solid p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h2 className="font-display text-3xl font-black mb-8 uppercase tracking-tight">
                            {t('contact.form.title')}
                        </h2>

                        {submitted ? (
                            <div className="bg-green-50 border-2 border-green-600 p-8 text-center">
                                <span className="material-symbols-outlined text-6xl text-green-600 mb-4 block">check_circle</span>
                                <p className="font-black text-xl text-green-600 uppercase">
                                    {t('contact.form.success')}
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-black uppercase tracking-widest mb-2">
                                        {t('contact.form.name')} *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full b-solid px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-black uppercase tracking-widest mb-2">
                                        {t('contact.form.email')} *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full b-solid px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-black uppercase tracking-widest mb-2">
                                        {t('contact.form.company')}
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full b-solid px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-black uppercase tracking-widest mb-2">
                                        {t('contact.form.phone')}
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full b-solid px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-black uppercase tracking-widest mb-2">
                                        {t('contact.form.message')} *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full b-solid px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-darkBlue text-white px-8 py-4 b-solid font-black uppercase tracking-widest hover:bg-primary transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                                >
                                    {t('contact.form.submit')}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* WhatsApp Section */}
                    <div className="space-y-8">
                        <div className="bg-green-50 b-solid p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(34,197,94,1)]">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="material-symbols-outlined text-5xl text-green-600">chat</span>
                                <h2 className="font-display text-3xl font-black uppercase tracking-tight">
                                    {t('contact.whatsapp.title')}
                                </h2>
                            </div>
                            <p className="text-darkBlue/70 text-lg font-medium mb-8 leading-relaxed">
                                {t('contact.whatsapp.description')}
                            </p>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 b-solid font-black uppercase tracking-widest hover:bg-green-700 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                            >
                                <span className="material-symbols-outlined text-2xl">chat</span>
                                {t('contact.whatsapp.button')}
                            </a>
                            <p className="mt-6 text-sm font-bold text-darkBlue/60">
                                {t('contact.whatsapp.number')}: +{whatsappNumber}
                            </p>
                        </div>

                        <div className="bg-white b-solid p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="font-display text-2xl font-black mb-6 uppercase tracking-tight">
                                {t('contact.info.title')}
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary">schedule</span>
                                    <div>
                                        <p className="font-black text-sm uppercase tracking-wide mb-1">
                                            {t('contact.info.hours.label')}
                                        </p>
                                        <p className="text-darkBlue/70 font-medium">
                                            {t('contact.info.hours.value')}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary">language</span>
                                    <div>
                                        <p className="font-black text-sm uppercase tracking-wide mb-1">
                                            {t('contact.info.languages.label')}
                                        </p>
                                        <p className="text-darkBlue/70 font-medium">
                                            {t('contact.info.languages.value')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
