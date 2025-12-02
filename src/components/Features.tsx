import { Shield, Percent, Trophy } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Expert Legal Service",
        description: "Our team of elite lawyers brings decades of experience to your defense."
    },
    {
        icon: Percent,
        title: "Affordable Rates",
        description: "High-quality legal representation at competitive and transparent rates."
    },
    {
        icon: Trophy,
        title: "99% Case Won",
        description: "We have a proven track record of success in complex legal matters."
    }
];

export default function Features() {
    return (
        <section className="relative z-20 -mt-24 mb-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded shadow-lg hover:-translate-y-2 transition-transform duration-300 border-b-4 border-accent"
                        >
                            <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <feature.icon className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-primary mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
