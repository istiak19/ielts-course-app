import type { SectionProps } from "../../interface/interface";

/* eslint-disable @typescript-eslint/no-explicit-any */
const PointerSection = ({ sections }: SectionProps) => {
    const pointers = sections.find((sec) => sec.type === "pointers");
    if (!pointers || !pointers.values.length) return null;

    return (
        <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">{pointers.name}</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {pointers.values.map((item: any) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </section>
    );
};

export default PointerSection;