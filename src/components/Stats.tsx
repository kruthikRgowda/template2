export default function Stats() {
    return (
        <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    <div className="p-4">
                        <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">1,500+</div>
                        <div className="text-gray-300 uppercase tracking-wider text-sm">Happy Clients</div>
                    </div>
                    <div className="p-4">
                        <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">95%</div>
                        <div className="text-gray-300 uppercase tracking-wider text-sm">Success Rate</div>
                    </div>
                    <div className="p-4">
                        <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">20+</div>
                        <div className="text-gray-300 uppercase tracking-wider text-sm">Years Experience</div>
                    </div>
                    <div className="p-4">
                        <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">30+</div>
                        <div className="text-gray-300 uppercase tracking-wider text-sm">Expert Attorneys</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
