import type { SectionProps } from "../../interface/interface";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ExclusiveFeature = ({ sections }: SectionProps) => {
    const exclusives = sections.find((sec) => sec.type === "feature_explanations");
    if (!exclusives || !exclusives.values.length) return null;

    return (
        <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">{exclusives.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {exclusives.values.map((item: any) => (
                    <div key={item.id} className="bg-gray-50 p-4 rounded shadow">
                        <img src={item.file_url} alt={item.title} className="w-full h-48 object-cover rounded" />
                        <h3 className="text-lg font-bold mt-3">{item.title}</h3>
                        <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm space-y-1">
                            {item.checklist.map((point: string, i: number) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExclusiveFeature;