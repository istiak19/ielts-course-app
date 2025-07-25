import { useState } from "react";
import { Link } from "react-router";

const Navbar = ({ onChange }: { onChange: (lang: string) => void }) => {
    const [activeLang, setActiveLang] = useState("bn");
    const handleLangChange = (lang: string) => {
        setActiveLang(lang);
        onChange(lang);
    };

    return (
        <header className="bg-white shadow-md py-4 px-4 md:px-6 mb-6 sticky top-0 z-50 border-b border-blue-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-green-500">
                    IELTS Course
                </Link>

                {/* Nav Links And Language Toggle */}
                <div className="flex justify-center items-center gap-2">
                    <div className="flex gap-2">
                        <button
                            onClick={() => handleLangChange("en")}
                            className={`px-3 py-1 rounded border text-sm cursor-pointer ${activeLang === "en"
                                ? "bg-green-500 text-white border-green-500"
                                : "text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => handleLangChange("bn")}
                            className={`px-3 py-1 rounded border cursor-pointer text-sm ${activeLang === "bn"
                                ? "bg-green-500 text-white border-green-500"
                                : "text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            BN
                        </button>
                    </div>
                    <nav className="flex space-x-4 text-gray-600 font-medium">
                        <a href="#course" className="hover:text-green-500">Course</a>
                        <a href="#instructors" className="hover:text-green-500">Instructors</a>
                        <a href="#checklist" className="hover:text-green-500">Checklist</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;