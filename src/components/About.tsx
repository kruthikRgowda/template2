import Image from "next/image";
import Link from "next/link";

import WhisperText from "@/components/ui/whisper-text";

export default function About() {
    return (
        <section className="py-20 bg-white" id="about">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-stretch gap-0">
                    {/* Image Side - Full height, no card */}
                    <div className="lg:w-1/2 relative min-h-[600px]">
                        <Image
                            src="https://staticservedev.blob.core.windows.net/clients-logos/image%20(3).png"
                            alt="Advocate"
                            fill
                            className="object-cover"
                        />
                        {/* Decorative Element */}
                        <div className="absolute bottom-8 left-8 bg-accent text-white p-8 rounded">
                            <p className="text-4xl font-serif font-bold">18+</p>
                            <p className="text-sm uppercase tracking-wider">Years Experience</p>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="lg:w-1/2 bg-light-gray p-12 lg:p-16 flex flex-col justify-center">
                        <WhisperText
                            text="About Us"
                            className="text-accent font-semibold tracking-wider mb-2 uppercase block"
                            delay={50}
                        />

                        <div className="mb-6">
                            <WhisperText
                                text="Realize your constitutional right with qualified help"
                                className="text-4xl font-serif font-bold text-primary"
                                delay={30}
                            />
                        </div>

                        <div className="mb-6">
                            <WhisperText
                                text="We pair courtroom craftsmanship with business fluency to deliver precise, decisive results for clients who expect more."
                                className="text-gray-600 leading-relaxed"
                                delay={20}
                            />
                        </div>

                        <div className="mb-8">
                            <WhisperText
                                text="Our experienced legal team combines strategic thinking with compassionate guidance to ensure your rights are protected at every step."
                                className="text-gray-600 leading-relaxed"
                                delay={20}
                            />
                        </div>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 text-gray-700">
                                <div className="text-accent">—</div>
                                <WhisperText text="Pre-file Investigation" delay={30} />
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <div className="text-accent">—</div>
                                <WhisperText text="Probation Violations" delay={30} />
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <div className="text-accent">—</div>
                                <WhisperText text="Illegal Search & Seizure" delay={30} />
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <div className="text-accent">—</div>
                                <WhisperText text="Professional liability" delay={30} />
                            </div>
                        </div>

                        <Link
                            href="#contact"
                            className="bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-accent transition-colors inline-block w-fit"
                        >
                            READ MORE
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
