import { Gavel, Scale, Users, Car, Briefcase, Heart } from "lucide-react";

const practices = [
    {
        icon: Gavel,
        title: "Criminal Law",
        description: "Defending your rights with aggressive and strategic representation in all criminal matters."
    },
    {
        icon: Scale,
        title: "Civil Litigation",
        description: "Resolving disputes effectively through negotiation, mediation, or courtroom litigation."
    },
    {
        icon: Users,
        title: "Family Law",
        description: "Compassionate guidance for divorce, child custody, and other sensitive family issues."
    },
    {
        icon: Car,
        title: "Car Accident",
        description: "Helping victims of auto accidents recover the compensation they deserve for their injuries."
    },
    {
        icon: Briefcase,
        title: "Business Law",
        description: "Comprehensive legal support for businesses, from formation to contract disputes."
    },
    {
        icon: Heart,
        title: "Insurance Law",
        description: "Fighting for policyholders to ensure fair treatment and proper claim settlements."
    }
];

export default function PracticeAreas() {
    return (
        <section className="py-20 bg-white" id="practice-areas">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h5 className="text-accent font-semibold tracking-wider mb-2 uppercase">Practice Areas</h5>
                    <h2 className="text-4xl font-serif font-bold text-primary">How We Can Help You</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {practices.map((practice, index) => (
                        <div
                            key={index}
                            className="group p-8 border border-gray-100 rounded bg-white hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="mb-6 inline-block p-4 rounded-full bg-light-gray group-hover:bg-accent group-hover:text-white transition-colors">
                                <practice.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                                {practice.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                {practice.description}
                            </p>
                            <a href="#" className="text-sm font-bold uppercase tracking-wider text-primary group-hover:text-accent flex items-center gap-2">
                                Read More <span className="text-lg">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
