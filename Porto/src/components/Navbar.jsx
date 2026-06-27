import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const links = [
    { label: "Home", id: "home" },
    { label: "About Me", id: "about" },
    { label: "Glucare", id: "project" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-1/2 z-[999] w-full -translate-x-1/2 border border-white/20 bg-white/80 px-8 py-6 backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between">
        
        <h1 className="text-xl font-bold tracking-wide text-[#5a88ef] leading-tight">
          <span className="hidden sm:inline">Jumita Paulina Blanzesky Tambunan</span>
          <span className="sm:hidden">Jumita P. B. Tambunan</span>
        </h1>

        
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-bold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-[#5a88ef]"
            >
              {link.label}
            </button>
          ))}
        </div>

        
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#5a88ef] rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#5a88ef] rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#5a88ef] rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 pb-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-bold text-gray-700 text-left transition-all duration-300 hover:text-[#5a88ef]"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
