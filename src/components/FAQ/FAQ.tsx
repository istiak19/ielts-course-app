/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import type { SectionProps } from "../../interface/interface";

const FAQ = ({ sections }: SectionProps) => {
    const [openIndex, setOpenIndex] = useState<number>(0);
    const faqSection = sections.find((sec) => sec.type === "faq");
    if (!faqSection || !faqSection.values.length) return null;

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 my-12">
            <h2 className="text-2xl font-bold text-black mb-4">{faqSection.name}</h2>

            <div className="space-y-0 border border-gray-300 rounded-2xl divide-y divide-dashed px-4 divide-gray-300">
                {faqSection.values.map((item: any, index: number) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={item.id} className="overflow-hidden first:rounded-t-2xl last:rounded-b-2xl">
                            <button
                                className="w-full text-left p-5 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-black"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={isOpen}
                                aria-controls={`faq-${index}`}
                            >
                                <span className="font-semibold text-gray-900">{item.question}</span>
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
                                    id={`faq-${index}`}
                                    className="p-5 pt-0 text-gray-700 text-[15px] leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: item.answer }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FAQ;