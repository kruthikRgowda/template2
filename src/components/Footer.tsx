import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: About */}
                    <div>
                        <Link href="/" className="relative h-12 w-40 block mb-6">
                            <Image
                                src="/images/logo.png"
                                alt="SRA Legal"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            We are a full-service law firm dedicated to providing professional and effective legal representation to our clients.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white/10 p-2 rounded hover:bg-accent transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="bg-white/10 p-2 rounded hover:bg-accent transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="bg-white/10 p-2 rounded hover:bg-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="bg-white/10 p-2 rounded hover:bg-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-xl font-serif font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Home</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> About Us</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Attorneys</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Blog</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Practice Areas */}
                    <div>
                        <h4 className="text-xl font-serif font-bold mb-6">Practice Areas</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Family Law</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Criminal Law</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Business Law</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Personal Injury</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors flex items-center"><ArrowRight className="w-4 h-4 mr-2" /> Real Estate</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-xl font-serif font-bold mb-6">Newsletter</h4>
                        <p className="text-gray-400 mb-6">
                            Subscribe to our newsletter to get the latest legal news and updates.
                        </p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white focus:border-accent focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-accent text-white px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition-colors w-full"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Auctor Law Firm. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
