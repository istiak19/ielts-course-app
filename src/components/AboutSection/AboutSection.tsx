/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import type { SectionProps } from "../../interface/interface";

const AboutSection = ({ sections }: SectionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const about = sections.find((sec) => sec.type === "about");
    if (!about || !about.values.length) return null;

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 my-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">{about.name}</h2>

            <div className="space-y-0 border border-gray-300 rounded-2xl divide-y divide-dashed divide-gray-300 px-4">
                {about.values.map((item: any, index: number) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={item.id}
                            className="overflow-hidden first:rounded-t-2xl last:rounded-b-2xl"
                        >
                            <button
                                className="w-full text-left py-5 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-black"
                                onClick={() => toggleItem(index)}
                                aria-expanded={isOpen}
                                aria-controls={`about-${index}`}
                            >
                                <span
                                    className="font-semibold text-black"
                                    dangerouslySetInnerHTML={{ __html: item.title }}
                                />
                                <span
                                    className={`transform transition-transform duration-300 cursor-pointer ${isOpen ? "rotate-180" : "rotate-0"}`}
                                >
                                    {isOpen ? (
                                        <ChevronUp className="w-5 h-5 text-black" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-black" />
                                    )}
                                </span>
                            </button>
                            {isOpen && (
                                <div
                                    id={`about-${index}`}
                                    className="pb-5 pt-0 text-gray-700 text-[15px] leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AboutSection;