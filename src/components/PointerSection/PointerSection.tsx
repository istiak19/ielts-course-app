/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaCheckCircle } from "react-icons/fa";
import type { SectionProps } from "../../interface/interface";

const PointerSection = ({ sections }: SectionProps) => {
    const pointers = sections.find((sec) => sec.type === "pointers");
    if (!pointers || !pointers.values.length) return null;

    return (
        <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">{pointers.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border p-5 rounded-xl border-gray-400">
                {pointers.values.map((item: any) => (
                    <div key={item.id} className="flex items-start space-x-2">
                        <FaCheckCircle className="text-green-500 mt-1 text-xl" />
                        <p className="text-gray-700">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PointerSection;