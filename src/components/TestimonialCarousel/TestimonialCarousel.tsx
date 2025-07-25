/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { FaPlay } from "react-icons/fa";
import type { SectionProps } from "../../interface/interface";

const TestimonialCarousel = ({ sections }: SectionProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const testimonials = sections.find((sec) => sec.type === "testimonials");
    if (!testimonials || !testimonials.values.length) return null;
    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -450, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 450, behavior: "smooth" });
    };

    return (
        <section className="my-16 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{testimonials.name}</h2>

            <div className="relative">
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-4"
                >
                    {testimonials.values.map((item: any) => (
                        <div
                            key={item.id}
                            className="min-w-[320px] md:min-w-[420px] bg-white rounded-2xl shadow-md border snap-start shrink-0"
                        >
                            <div className="p-4">
                                <div className="relative rounded-lg overflow-hidden">
                                    {item.thumb ? (
                                        <>
                                            <img
                                                src={item.thumb}
                                                alt={item.name}
                                                className="w-full h-48 object-cover rounded-md border"
                                            />
                                            {item.video_url && (
                                                <a
                                                    href={`https://www.youtube.com/watch?v=${item.video_url}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition"
                                                >
                                                    <FaPlay className="text-white text-4xl" />
                                                </a>
                                            )}
                                        </>
                                    ) : (
                                        <div className="flex items-center justify-center h-48 bg-gray-100 text-gray-400 text-xl">
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center gap-3 mt-4">
                                    <img
                                        src={item.profile_image}
                                        alt={item.name}
                                        className="w-10 h-10 rounded-full border object-cover"
                                    />
                                    <div>
                                        <p className="font-medium text-gray-900">{item.name}</p>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll Buttons */}
                <button
                    onClick={scrollLeft}
                    aria-label="Scroll left"
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-indigo-100 transition z-10"
                >
                    ❮
                </button>
                <button
                    onClick={scrollRight}
                    aria-label="Scroll right"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-indigo-100 transition z-10"
                >
                    ❯
                </button>
            </div>
        </section>
    );
};

export default TestimonialCarousel;