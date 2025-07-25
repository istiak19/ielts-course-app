import type { FC } from "react";
import type { ChecklistProps } from "../../interface/interface";

const Checklist: FC<ChecklistProps> = ({ items }) => {
    if (!items || items.length === 0) return null;

    return (
        <section id="checklist" className="my-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">কোর্সে যা থাকছে</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-start space-x-4 bg-gray-50 p-4 rounded-md shadow-sm"
                    >
                        <img
                            src={item.icon}
                            alt="checklist-icon"
                            className="w-10 h-10 object-contain"
                        />
                        <p className="text-gray-800 font-medium">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Checklist;