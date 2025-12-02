import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="relative h-12 w-40 block">
                    <Image
                        src="/images/logo.png"
                        alt="SRA Legal"
                        fill
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
                    <Link href="#" className="hover:text-accent transition-colors">Home</Link>
                    <Link href="#" className="hover:text-accent transition-colors">About</Link>
                    <Link href="#" className="hover:text-accent transition-colors">Practice Areas</Link>
                    <Link href="#" className="hover:text-accent transition-colors">Attorneys</Link>
                    <Link href="#" className="hover:text-accent transition-colors">Contact</Link>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="bg-accent text-white px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition-colors"
                    >
                        Free Consultation
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-primary">
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
