import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-20 bg-white" id="contact">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="lg:w-1/3">
                        <h5 className="text-accent font-semibold tracking-wider mb-2 uppercase">Contact Us</h5>
                        <h2 className="text-4xl font-serif font-bold text-primary mb-6">Get A Free Consultation</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Reach out to us today to discuss your legal needs. We are here to help you navigate the complexities of the law.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-light-gray p-3 rounded-full text-accent">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-primary text-lg">Call Us</h4>
                                    <p className="text-gray-600">+91 9844055379</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-light-gray p-3 rounded-full text-accent">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-primary text-lg">Email Us</h4>
                                    <p className="text-gray-600">shwetha@sralegal.co.in</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-light-gray p-3 rounded-full text-accent">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-primary text-lg">Visit Us</h4>
                                    <p className="text-gray-600">No. 128, Sanskruti, Suvarna Badavane, 6th cross,<br />Nagarbhavi 1st stage, Bengaluru - 560072</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-2/3 bg-light-gray p-8 md:p-12 rounded">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:outline-none"
                                />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:outline-none"
                                />
                                <select className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:outline-none text-gray-500">
                                    <option>Select Topic</option>
                                    <option>Criminal Law</option>
                                    <option>Family Law</option>
                                    <option>Business Law</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <textarea
                                rows={5}
                                placeholder="Your Message"
                                className="w-full px-4 py-3 rounded border border-gray-300 focus:border-accent focus:outline-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-accent text-white px-8 py-4 rounded font-semibold hover:bg-yellow-600 transition-colors w-full md:w-auto"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
