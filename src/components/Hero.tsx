import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center text-white">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/images/hero-bg.png')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl">
                    <h5 className="text-accent font-semibold tracking-wider mb-4 uppercase">
                        Expert Legal Guidance
                    </h5>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
                        We Fight For <br />
                        <span className="text-white">Your Justice</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                        Experienced attorneys providing top-tier legal solutions. We are dedicated to protecting your rights and securing the best possible outcome for your case.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#contact"
                            className="bg-accent text-white px-8 py-4 rounded font-semibold text-center hover:bg-yellow-600 transition-colors"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="#practice-areas"
                            className="border-2 border-white text-white px-8 py-4 rounded font-semibold text-center hover:bg-white hover:text-primary transition-colors"
                        >
                            Practice Areas
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
