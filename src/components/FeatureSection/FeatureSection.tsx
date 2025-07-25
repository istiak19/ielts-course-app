import type { SectionProps } from "../../interface/interface";

/* eslint-disable @typescript-eslint/no-explicit-any */
const FeatureSection = ({ sections }: SectionProps) => {
    const features = sections.find((sec) => sec.type === "features");
    if (!features || !features.values.length) return null;

    return (
        <section className="space-y-4">
            <h2 className="font-semibold text-gray-800">{features.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl bg-black p-4">
                {features.values.map((item: any) => (
                    <div key={item.id} className="flex gap-4">
                        <img src={item.icon} alt="feature" className="w-12 h-12 object-contain" />
                        <div>
                            <h3 className="font-bold text-gray-300">{item.title}</h3>
                            <p className="text-gray-500 text-sm">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureSection;