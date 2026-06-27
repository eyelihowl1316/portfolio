    const Navbar = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        });
    };

    return (
        <nav className="fixed top-0 left-1/2 z-[999] w-full -translate-x-1/2 border border-white/20 bg-white/80 px-8 py-6 backdrop-blur-md shadow-lg">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-wide text-[#5a88ef]">
            Jumita Paulina Blanzesky Tambunan
            </h1>

            <div className="flex items-center gap-10">
            <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-bold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#5a88ef]"
            >
                Home
            </button>

            <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-bold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#5a88ef]"
            >
                About Me
            </button>

            <button
                onClick={() => scrollToSection("project")}
                className="text-sm font-bold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#5a88ef]"
            >
                Glucare
            </button>

            <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-bold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#5a88ef]"
            >
                Contact
            </button>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;