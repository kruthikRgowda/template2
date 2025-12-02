import Image from "next/image";

const clients = [
    "/images/client-1.png",
    "/images/client-2.png",
    "/images/client-3.png",
    "/images/client-1.png",
    "/images/client-2.png"
];

export default function Clients() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h5 className="text-accent font-semibold tracking-wider mb-2 uppercase">Trusted Partners</h5>
                    <h2 className="text-4xl font-serif font-bold text-primary">Our Famous Clients</h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="relative h-16 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300"
                        >
                            <Image
                                src={client}
                                alt={`Client ${index + 1}`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
