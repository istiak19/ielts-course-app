import { FaCheck } from "react-icons/fa";
import type { SectionProps } from "../../interface/interface";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ExclusiveFeature = ({ sections }: SectionProps) => {
    const exclusives = sections.find((sec) => sec.type === "feature_explanations");
    if (!exclusives || !exclusives.values.length) return null;

    return (
        <section className="space-y-6 my-10">
            <h2 className="text-2xl font-bold text-gray-800">{exclusives.name}</h2>

            <div className="space-y-6 border border-gray-400 rounded-md">
                {exclusives.values.map((item: any) => (
                    <div
                        key={item.id}
                        className="bg-white p-5 flex flex-col md:flex-row items-start gap-6"
                    >
                        <div className="flex-1 space-y-3">
                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                            <ul className="space-y-2">
                                {item.checklist?.map((point: string, i: number) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                                        <FaCheck className="text-blue-500 mt-1" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {item.file_url && (
                            <div className="w-full md:w-60 shrink-0">
                                <img
                                    src={item.file_url}
                                    alt={item.title}
                                    className="w-full h-40 md:h-48 object-cover"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExclusiveFeature;