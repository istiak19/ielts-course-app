/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import fetchCourseData from "./utils/fetchCourseData/fetchCourseData";
import InstructorSection from "./components/InstructorSection/InstructorSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import PointerSection from "./components/PointerSection/PointerSection";
import ExclusiveFeature from "./components/ExclusiveFeature/ExclusiveFeature";
import AboutSection from "./components/AboutSection/AboutSection";
import CourseTrailer from "./components/CourseTrailer/CourseTrailer";
import Checklist from "./components/Checklist/Checklist";

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchCourseData("bn").then(setData).catch(console.error);
  }, []);

  if (!data) return <div className="p-8 text-center">Loading...</div>;

  const courseData = data.data;
  const { title, description, media, checklist, cta_text, sections } = courseData;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left column: Main content */}
      <div className="md:col-span-2 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800">{title}</h1>

        <div
          className="prose prose-sm md:prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <InstructorSection sections={sections} />
        <FeatureSection sections={sections} />
        <PointerSection sections={sections} />
        <ExclusiveFeature sections={sections} />
        <AboutSection sections={sections} />
      </div>

      {/* Right column: Trailer, CTA, Checklist */}
      <div className="space-y-6">
        <CourseTrailer media={media} />
        <button className="w-full bg-blue-600 text-white py-3 rounded text-lg font-semibold">
          {cta_text?.value || "কোর্সটি কিনুন"}
        </button>
        <Checklist items={checklist} />
      </div>
    </div>
  );
}

export default App;