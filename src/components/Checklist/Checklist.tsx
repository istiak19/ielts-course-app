import type { FC } from "react";
import type { ChecklistProps } from "../../interface/interface";

const Checklist: FC<ChecklistProps> = ({ items }) => {
    if (!items || items.length === 0) return null;

    return (
        <section className="my-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">এই কোর্সে যা থাকছে</h2>
            <div className="*:text-black">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition"
                    >
                        <img
                            src={item.icon}
                            alt="checklist-icon"
                            className="w-5 h-5 object-contain mt-0.5"
                        />
                        <span className="text-gray-700 text-sm md:text-base">{item.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Checklist;