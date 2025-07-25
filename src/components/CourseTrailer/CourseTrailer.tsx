interface MediaItem {
    resource_type: string;
    resource_value: string;
    thumbnail_url?: string;
}

const CourseTrailer = ({ media }: { media: MediaItem[] }) => {
    const trailer = media.find((m) => m.resource_type === "video");

    if (!trailer) return null;

    return (
        <div className="aspect-video w-full">
            <iframe
                src={`https://www.youtube.com/embed/${trailer.resource_value}`}
                title="Course Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow"
            />
        </div>
    );
};

export default CourseTrailer;