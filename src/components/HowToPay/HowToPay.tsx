import { Link } from "react-router";
import type { SectionProps } from "../../interface/interface";

const HowToPay = ({ sections }: SectionProps) => {
    const howToPay = sections.find((sec) => sec.type === "how_to_pay");
    if (!howToPay) return null;

    const videoUrl = "https://youtu.be/5wfn60rmWX4";

    return (
        <section className="max-w-7xl mx-auto px-4 my-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{howToPay.name}</h2>

            <div className="bg-white border border-gray-400 rounded-xl p-6 shadow-sm">
                <p className="text-gray-800 text-base">
                    কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{" "}
                    <Link
                        to={videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 font-semibold underline hover:text-green-700"
                    >
                        এই ভিডিওটি দেখুন
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default HowToPay;