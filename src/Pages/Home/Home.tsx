/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import fetchCourseData from "../../utils/fetchCourseData/fetchCourseData";
import InstructorSection from "../../components/InstructorSection/InstructorSection";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import PointerSection from "../../components/PointerSection/PointerSection";
import ExclusiveFeature from "../../components/ExclusiveFeature/ExclusiveFeature";
import AboutSection from "../../components/AboutSection/AboutSection";
import CourseTrailer from "../../components/CourseTrailer/CourseTrailer";
import Checklist from "../../components/Checklist/Checklist";
import { useLang } from "../../context/LangContext";
import FreePDFSection from "../../components/FreePDFSection/FreePDFSection";
import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel";
import Requirements from "../../components/Requirements/Requirements";
import HowToPay from "../../components/HowToPay/HowToPay";
import FAQ from "../../components/FAQ/FAQ";

const Home = () => {
    const { lang } = useLang();
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetchCourseData(lang).then(setData).catch(console.error);
    }, [lang]);

    if (!data) return <div className="p-8 text-center">Loading...</div>;

    const courseData = data.data;
    const { title, description, media, checklist, cta_text, sections } = courseData;

    return (
        <div className="max-w-7xl mx-auto px-2 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column: Main content */}
            <div className="md:col-span-2 space-y-8">
                <h1 className="text-3xl font-bold text-gray-800">{title}</h1>

                <div
                    className="prose prose-sm md:prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: description }}
                />

                <InstructorSection sections={sections} />
                <FeatureSection sections={sections} />
                <FreePDFSection sections={sections} />
                <PointerSection sections={sections} />
                <AboutSection sections={sections} />
                <ExclusiveFeature sections={sections} />
                <TestimonialCarousel sections={sections} />
                <Requirements sections={sections} />
                <HowToPay sections={sections} />
                <FAQ sections={sections} />
            </div>

            {/* Right column: Trailer, CTA, Checklist */}
            <div className="space-y-6 p-1">
                <div className="border border-green-300 rounded p-4">
                    <CourseTrailer media={media} />
                    <button className="w-full bg-green-500 border-b-4 border-green-600 text-white py-3 rounded text-lg font-semibold cursor-pointer">
                        {cta_text?.name || cta_text?.value}
                    </button>
                    <div>
                        <Checklist items={checklist} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;