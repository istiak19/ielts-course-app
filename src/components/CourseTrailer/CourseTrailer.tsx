import { useState } from "react";
import type { MediaItem } from "../../interface/interface";

const CourseTrailer = ({ media }: { media: MediaItem[] }) => {
    const videoItems = media.filter((m) => m.resource_type === "video");
    const [selectedVideo, setSelectedVideo] = useState(videoItems[0]?.resource_value || "");

    if (!videoItems.length) return null;

    return (
        <section id="trailer" className="w-full mb-10">
            <div className="aspect-video w-full mb-6 overflow-hidden rounded-lg shadow-lg">
                <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                    title="Course Trailer"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                />
            </div>

            {videoItems.length > 1 && (
                <div className="ml-3">
                    {videoItems.map((video) => (
                        <button
                            key={video.resource_value}
                            onClick={() => setSelectedVideo(video.resource_value)}
                            className={`w-32 h-20 cursor-pointer rounded overflow-hidden border-2 ${selectedVideo === video.resource_value ? "border-green-500" : "border-transparent"
                                }`}
                            title="Watch this trailer"
                        >
                            <img
                                src={video.thumbnail_url || `https://img.youtube.com/vi/${video.resource_value}/mqdefault.jpg`}
                                alt="Trailer thumbnail"
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </section>
    );
};

export default CourseTrailer;