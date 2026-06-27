    import { useEffect, useRef, useState } from "react";
    import profile from "../assets/profile.png"

    export default function AboutMe() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setVisible(true);
            }
        },
        { threshold: 0.2 }
        );

        if (sectionRef.current) {
        observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
        id="about"
        ref={sectionRef}
        className="min-h-screen bg-white flex items-center px-8 md:px-20 py-24 overflow-hidden"
        >
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">

           
            <div
            className={`flex-1 transition-all duration-700 ease-out ${
                visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
            >
            <p className="text-blue-500 font-semibold tracking-widest uppercase text-sm mb-3">
                About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Jumita Paulina<br />
                <span className="text-blue-500">Blanzesky Tambunan</span>
            </h2>
            <div className="w-12 h-1 bg-blue-500 mb-6 rounded-full" />
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Saya adalah mahasiswa Sistem Informasi yang memiliki minat di bidang{" "}
                <span className="text-blue-500 font-semibold">Full-Stack Web Development</span>.
                Saat ini saya terus mengembangkan kemampuan dalam membangun aplikasi web
                menggunakan berbagai teknologi frontend dan backend melalui proyek akademik
                maupun pembelajaran mandiri. Saya senang mempelajari teknologi baru,
                menyelesaikan masalah, dan mengubah ide menjadi solusi digital yang
                bermanfaat serta mudah digunakan.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
                {["React.js", "Node.js", "Tailwind CSS", "MySQL"].map((skill, index) => (
                <span
                    key={skill}
                    className={`px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100 transition-all duration-700 ${
                    visible
                        ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{transitionDelay: `${index * 150}ms`,}}
                >
                    {skill}
                </span>
                ))}
            </div>
            </div>

            <div className="relative">
                <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-blue-500 rounded-2xl z-0" />
                <div className="relative z-10 w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <img
                    src= {profile}
                    alt="Jumita Paulina Blanzesky Tambunan"
                    className="w-full h-full object-cover object-top"
                />
                </div>
            </div>
            </div>

        </section>
    );
}
