import { Link } from "react-router";

const Navbar = () => {
    return (
        <section className="bg-white shadow-md py-4 px-6 mb-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    10 Minute School
                </Link>
                <nav>
                    <ul className="flex space-x-4 text-gray-600 font-medium">
                        <li><a href="#course" className="hover:text-blue-500">Course</a></li>
                        <li><a href="#instructors" className="hover:text-blue-500">Instructors</a></li>
                        <li><a href="#checklist" className="hover:text-blue-500">Checklist</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;