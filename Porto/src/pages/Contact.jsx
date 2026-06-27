import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.png";
import { useEffect } from "react";


function useScrollReveal() {
    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(28px);
            transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.reveal--visible {
            opacity: 1;
            transform: translateY(0);
        }
        .reveal-left {
            opacity: 0;
            transform: translateX(-32px);
            transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-left.reveal--visible {
            opacity: 1;
            transform: translateX(0);
        }
        .reveal-right {
            opacity: 0;
            transform: translateX(32px);
            transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-right.reveal--visible {
            opacity: 1;
            transform: translateX(0);
        }
        @media (prefers-reduced-motion: reduce) {
            .reveal, .reveal-left, .reveal-right {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            }
        }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal--visible");
            }
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    targets.forEach((el) => observer.observe(el));

    return () => {
        observer.disconnect();
        document.head.removeChild(style);
        };
    }, []);
}

export default function Contact() {
    useScrollReveal();

    return (
        <section
        id="contact"
        className="py-24 px-8 bg-gradient-to-b from-white to-blue-50"
        >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        
            <div>
            <p className="reveal text-blue-500 font-semibold tracking-[0.3em] uppercase text-sm">
                Kontak Saya
            </p>

            <h2
                className="reveal mt-3 text-5xl font-bold text-gray-800"
                style={{ transitionDelay: "80ms" }}
            >
                Mari Bekerja Sama
            </h2>

            <div
                className="reveal w-16 h-1 bg-blue-500 rounded-full mt-4 mb-8"
                style={{ transitionDelay: "160ms" }}
            />

            <p
                className="reveal text-lg text-gray-600 leading-relaxed"
                style={{ transitionDelay: "220ms" }}
            >
                Terima kasih telah mengunjungi portfolio saya. Saya terbuka untuk
                berdiskusi mengenai project, kolaborasi, maupun peluang karier di
                bidang
                <span className="font-semibold text-blue-500">
                {" "}Full-Stack Web Development.
                </span>
            </p>

            <div className="mt-10 space-y-4">
                <a
                href="mailto:emailkamu@gmail.com"
                className="reveal flex items-center gap-4 text-gray-700 hover:text-blue-500 transition"
                style={{ transitionDelay: "300ms" }}
                >
                <MdEmail size={22} />
                <span>jumitatambunan@gmail.com</span>
                </a>

                <a
                href="https://www.linkedin.com/in/jumita-tambunan-03b145413/"
                target="_blank"
                rel="noreferrer"
                className="reveal flex items-center gap-4 text-gray-700 hover:text-blue-500 transition"
                style={{ transitionDelay: "380ms" }}
                >
                <FaLinkedin size={22} />
                <span>Jumita Tambunan</span>
                </a>
            </div>
            </div>

        
            <div className="flex justify-center">
            <div
                className="reveal-right relative"
                style={{ transitionDelay: "150ms" }}
            >
                <img
                src={profile}
                alt="Jumita"
                className="relative z-10 w-[420px]"
                />
            </div>
            </div>
        </div>

        
        <div className="max-w-6xl mx-auto mt-20 border-t border-gray-200 pt-8">
            <p className="reveal text-center text-gray-500 text-sm" style={{ transitionDelay: "100ms" }}>
            © 2026 Jumita Paulina Blanzesky Tambunan. Built with React.js &
            Tailwind CSS.
            </p>
        </div>
    </section>
    );
}
