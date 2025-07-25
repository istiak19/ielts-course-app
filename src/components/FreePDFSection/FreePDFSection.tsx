import type { SectionProps } from "../../interface/interface";

const FreePDFSection = ({ sections }: SectionProps) => {
    const groupJoinSection = sections.find(
        (section) => section.type === "group_join_engagement"
    );

    if (!groupJoinSection) return null;

    // Extract content from values array
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
                {/* Top-left Icon */}
                {content.top_left_icon_img && (
                    <img
                        src={content.top_left_icon_img}
                        alt={content.name || content.title || "Icon"}
                        className="absolute top-4 left-4 w-12 h-12"
                    />
                )}

                <div className="p-6 md:p-8 bg-black/40 backdrop-blur-sm">
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
                            className="inline-block bg-white text-blue-600 font-semibold px-5 py-2 rounded hover:bg-blue-100 transition"
                        >
                            {content.cta.text || "Download PDF"}
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FreePDFSection;