import type { SectionProps } from "../../interface/interface";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AboutSection = ({ sections }: SectionProps) => {
    const about = sections.find((sec) => sec.type === "about");
    if (!about || !about.values.length) return null;

    return (
        <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">{about.name}</h2>
            <div className="space-y-6">
                {about.values.map((item: any) => (
                    <div key={item.id}>
                        <div
                            className="text-gray-700 prose prose-sm md:prose-base max-w-none"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                        <div
                            className="text-gray-600 prose prose-sm md:prose-base max-w-none"
                            dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutSection;