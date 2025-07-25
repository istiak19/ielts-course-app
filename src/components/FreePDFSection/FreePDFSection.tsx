import type { SectionProps } from "../../interface/interface";

const FreePDFSection = ({ sections }: SectionProps) => {
    const groupJoinSection = sections.find(
        (section) => section.type === "group_join_engagement"
    );

    if (!groupJoinSection) return null;

    const content = groupJoinSection.values?.[0];
    if (!content) return null;

    return (
        <section className="my-10">
            <div
                className="relative rounded-lg overflow-hidden shadow-lg text-white"
                style={{
                    backgroundImage: `url(${content.background?.image || ""})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="bg-black/40 backdrop-blur-sm p-6 md:p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Left Content */}
                        <div className="flex-1 md:pr-6">
                            {content.top_left_icon_img && (
                                <img
                                    src={content.top_left_icon_img}
                                    alt={content.name || content.title || "Icon"}
                                    className="w-36 h-10 mb-4"
                                />
                            )}

                            <h3
                                className="text-lg md:text-2xl font-bold mb-2"
                                style={{ color: content.title_color || "#fff" }}
                            >
                                {content.title || "Title"}
                            </h3>

                            <p
                                className="text-sm md:text-base mb-4"
                                style={{ color: content.description_color || "#ededed" }}
                            >
                                {content.description || "Description not available."}
                            </p>

                            {content.cta?.clicked_url && (
                                <a
                                    href={content.cta.clicked_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-green-500 text-white font-semibold px-5 py-2 border-b-4 border border-green-600 rounded hover:bg-blue-100 transition"
                                >
                                    {content.cta.text || "Download PDF"}
                                </a>
                            )}
                        </div>
                        {content.thumbnail && (
                            <div className="mt-6 md:mt-0 md:ml-6 flex-shrink-0">
                                <img
                                    src={content.thumbnail}
                                    alt="Thumbnail"
                                    className="w-72 h-auto rounded shadow-md"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreePDFSection;