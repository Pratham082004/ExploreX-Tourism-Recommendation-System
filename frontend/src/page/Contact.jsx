import "../styles/Contact.css";

function Contact() {
    return (
        <div className="contact-container">
            <div className="text-center mb-16">
                <p className="text-pink-500 font-bold text-sm tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
                    <span className="w-6 h-[1px] bg-pink-500"></span>
                    Get In Touch
                    <span className="w-6 h-[1px] bg-pink-500"></span>
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                    Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Us</span>
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    Have questions about your next adventure? Our travel experts are here to help you plan the perfect trip.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Contact Info Cards */}
                <div className="w-full lg:w-1/3 flex flex-col gap-6">
                    <div className="contact-info-card group">
                        <div className="contact-info-icon bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </div>
                        <div>
                            <h3 className="contact-info-title">Phone</h3>
                            <p className="contact-info-desc">+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="contact-info-card group">
                        <div className="contact-info-icon bg-pink-50 text-pink-500 group-hover:bg-pink-500 group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                        </div>
                        <div>
                            <h3 className="contact-info-title">Email</h3>
                            <p className="contact-info-desc">hello@wandermatch.com</p>
                        </div>
                    </div>
                    <div className="contact-info-card group">
                        <div className="contact-info-icon bg-blue-50 text-blue-500 group-hover:bg-blue-500 group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div>
                            <h3 className="contact-info-title">Office</h3>
                            <p className="contact-info-desc">123 Travel Blvd, SF, CA</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full lg:w-2/3">
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                            Send a Message
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700">First Name</label>
                                <input type="text" placeholder="John" className="contact-input" required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700">Last Name</label>
                                <input type="text" placeholder="Doe" className="contact-input" required />
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-2 mb-6">
                            <label className="text-sm font-semibold text-slate-700">Email Address</label>
                            <input type="email" placeholder="john@example.com" className="contact-input" required />
                        </div>
                        
                        <div className="flex flex-col gap-2 mb-8">
                            <label className="text-sm font-semibold text-slate-700">Message</label>
                            <textarea placeholder="How can we help you plan your trip?" rows="4" className="contact-input resize-none" required></textarea>
                        </div>
                        
                        <button type="submit" className="contact-submit-btn">
                            Send Message
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
