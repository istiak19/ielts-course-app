/* eslint-disable @typescript-eslint/no-explicit-any */
const InstructorSection = ({ sections }: { sections: any[] }) => {
    const instructorSection = sections.find((s) => s.type === "instructors");
    const instructors = instructorSection?.values;

    if (!instructors || instructors.length === 0) return null;

    return (
        <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">{instructorSection.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {instructors.map((ins: any) => (
                    <div key={ins.slug} className="flex gap-4 p-4 bg-white shadow rounded">
                        <img
                            src={ins.image}
                            alt={ins.name}
                            className="w-20 h-20 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="font-bold text-gray-800">{ins.name}</h3>
                            <p className="text-sm text-gray-600">{ins.short_description}</p>
                            <div
                                className="prose prose-sm mt-2"
                                dangerouslySetInnerHTML={{ __html: ins.description }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InstructorSection;