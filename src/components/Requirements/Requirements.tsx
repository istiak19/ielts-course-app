import type { SectionProps } from "../../interface/interface";
import { FaCheck } from "react-icons/fa";

const Requirements = ({ sections }: SectionProps) => {
    const requirements = sections.find((sec) => sec.type === "requirements");
    if (!requirements) return null;

    const checklist = [
        "ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)",
        "স্মার্টফোন অথবা পিসি",
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{requirements.name}</h2>

            <div className="bg-white border border-gray-400 rounded-xl p-6 space-y-3 shadow-sm">
                {checklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 text-gray-800">
                        <FaCheck className="text-blue-500 mt-1" />
                        <span className="text-base">{item}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Requirements;