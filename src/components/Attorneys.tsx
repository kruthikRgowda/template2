import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const attorneys = [
    {
        name: "Johnathan Doe",
        role: "Senior Partner",
        image: "/images/about-lawyer.png" // Reusing the one from About
    },
    {
        name: "Sarah Smith",
        role: "Family Law Specialist",
        image: "/images/lawyer-female.png"
    },
    {
        name: "Michael Brown",
        role: "Criminal Defense Attorney",
        image: "/images/about-lawyer.png" // Reusing for demo
    }
];

export default function Attorneys() {
    return (
        <section className="py-20 bg-light-gray" id="attorneys">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h5 className="text-accent font-semibold tracking-wider mb-2 uppercase">Expert Team</h5>
                    <h2 className="text-4xl font-serif font-bold text-primary">Meet Our Attorneys</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {attorneys.map((attorney, index) => (
                        <div key={index} className="bg-white group">
                            <div className="relative h-96 w-full overflow-hidden">
                                <Image
                                    src={attorney.image}
                                    alt={attorney.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Social Overlay */}
                                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    <a href="#" className="bg-white p-2 rounded-full hover:bg-accent hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                                    <a href="#" className="bg-white p-2 rounded-full hover:bg-accent hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                                    <a href="#" className="bg-white p-2 rounded-full hover:bg-accent hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                                </div>
                            </div>
                            <div className="p-6 text-center border-b-4 border-transparent group-hover:border-accent transition-colors">
                                <h3 className="text-xl font-serif font-bold text-primary mb-1">{attorney.name}</h3>
                                <p className="text-accent uppercase text-sm tracking-wider">{attorney.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
