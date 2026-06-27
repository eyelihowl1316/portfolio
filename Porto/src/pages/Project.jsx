import mockup from "../assets/mockup.png"
import prediksiAI from "../assets/prediksiAI.png"
import rencana90day from "../assets/renacan90day.png"
import analisis from "../assets/analisis.png"
import hasilanalisis from "../assets/hasilanalisis.png"
import hasilmonitoring from "../assets/hasilmonitoring.png"
import settingandprofile from "../assets/settingAndProfile.png"
import dashboard from "../assets/dashboard2.png"
import { Brain, TrendingUp, Activity, MonitorSmartphone } from "lucide-react";
import { useEffect, useRef } from "react";


function useScrollReveal() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .reveal {
        opacity: 0;
        transform: translateY(32px);
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


function staggerStyle(index, base = 0) {
  return { transitionDelay: `${base + index * 100}ms` };
}

export default function GluCare() {
  useScrollReveal();

  const features = [
    {
      icon: <Brain size={32} />,
      title: "AI Diabetes Risk Analysis",
      description:
        "Menganalisis risiko diabetes berdasarkan data kesehatan pengguna menggunakan teknologi Artificial Intelligence.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "AI 30-Day Prediction",
      description:
        "Memprediksi kemungkinan kondisi kesehatan membaik atau memburuk dalam 30 hari ke depan berdasarkan pola data pengguna.",
    },
    {
      icon: <Activity size={32} />,
      title: "90-Day Monitoring",
      description:
        "Memantau perkembangan kondisi kesehatan pengguna secara berkala selama 90 hari untuk membantu pencegahan diabetes.",
    },
    {
      icon: <MonitorSmartphone size={32} />,
      title: "Responsive Design",
      description:
        "Dirancang agar dapat digunakan dengan nyaman pada perangkat desktop, tablet, maupun smartphone.",
    },
  ];

  const roles = [
    {
      number: "01",
      title: "Frontend Development",
      description: "Membangun antarmuka pengguna menggunakan Recat.js dan Tailwind CSS.",
    },
    {
      number: "02",
      title: "Database Design",
      description: "Merancang struktur database dan relasi data menggunakan MySQL.",
    },
    {
      number: "03",
      title: "Backend Development",
      description: "Mengembangkan REST API menggunakan Node.js dan Express.js",
    },
    {
      number: "04",
      title: "API Integration",
      description: "Menghubungkan frontend dengan backend API untuk pertukaran data secara real-time.",
    },
  ];

  const gallery = [
    {
      title: "Dashboard",
      description:
        "Dashboard utama yang menampilkan ringkasan kondisi kesehatan pengguna, status analisis, serta akses cepat ke seluruh fitur Glucare.",
      image: dashboard,
    },
    {
      title: "Analisis",
      description:
        "pengguna mengisi data kesehatan melalui kuesioner maupun hasil laboratorium untuk dianalisis menggunakan AI.",
      image: analisis,
    },
    {
      title: "Hasil Analisis",
      description:
        "Menampilkan hasil analisis resiko beserta rekomendasi mengikuti monitoring 90 hari,",
      image: hasilanalisis,
    },
    {
      title: "Rencana 90 Hari",
      description:
        "Memantau perkembangan kondisi kesehatan pengguna selama 90 hari secara berkala",
      image: rencana90day,
    },
    {
      title: "Prediksi di hari ke-30",
      description:
        "AI memprediksi kemungkinan kondisi kesehatan pengguna akan membaik atau memburuk untuk di hari ke 90 ke depan",
      image: prediksiAI,
    },
    {
      title: "Hasil 90 hari",
      description:
        "Visualisasi perkembangan kesehatan pengguna berdasarkan monitoring yang telah dilakukan sekaligus pembuktian prediksi AI di hari ke 30 yang lalu.",
      image: hasilmonitoring,
    },
    {
      title: "Profile dan Pengaturan",
      description: "Halaman profil untuk mengelola informasi pengguna",
      image: settingandprofile,
    },
  ];

  return (
    <section
      id="project"
      className="bg-gradient-to-b from-white to-blue-50 py-18 px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
       
        <p className="reveal text-blue-500 font-semibold tracking-[0.3em] uppercase text-sm">
          Project
        </p>

        
        <h2 className="reveal mt-2 text-5xl md:text-6xl font-bold text-gray-800" style={staggerStyle(1)}>
          PERKENALKAN
        </h2>

        <h2 className="reveal text-5xl md:text-6xl font-bold text-blue-500 mt-2" style={staggerStyle(2)}>
          GLUCARE
        </h2>

       
        <div className="reveal mt-2 flex justify-center" style={staggerStyle(3)}>
          <img
            src={mockup}
            alt="GluCare"
            className="w-full max-w-2xl drop-shadow-2xl"
          />
        </div>

        
        <p className="reveal max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed mt-4" style={staggerStyle(4)}>
          GluCare adalah platform kesehatan digital yang membantu mendeteksi
          risiko diabetes sejak dini melalui analisis kesehatan berbasis
          kuesioner maupun data laboratorium, memberikan rekomendasi gaya hidup
          yang personal, serta memantau kondisi pengguna secara berkala selama
          90 hari untuk mendukung pencegahan diabetes secara lebih konsisten dan
          preventif.
        </p>

        
        <div className="mt-16 relative overflow-hidden">
          <div className="marquee whitespace-nowrap">
            {[
              "React.js","Tailwind CSS","Node.js","Express.js","MySQL",
              "Visual Studio Code","GitHub","XAMPP","Postman",
              "React.js","Tailwind CSS","Node.js","Express.js","MySQL",
              "Visual Studio Code","GitHub","XAMPP","Postman",
            ].map((tech, i) => (
              <span key={i} className="mx-8 text-blue-500 font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto mt-20">
        <div className="mb-16">
          <h2 className="reveal mt-3 text-4xl md:text-5xl font-bold text-gray-800">
            Fitur <span className="text-blue-500"> Utama </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal group p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={staggerStyle(index, 50)}
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

     
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          
          <div className="sticky top-32">
            <h2 className="reveal-left mt-12 text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Kontribusi Saya di
              <span className="text-blue-500"> GluCare</span>
            </h2>

            <div className="reveal-left w-16 h-1 bg-blue-500 rounded-full mt-4 mb-6" style={staggerStyle(1)} />

            <p className="reveal-left text-gray-600 text-lg leading-relaxed" style={staggerStyle(2)}>
              Sebagai{" "}
              <span className="font-semibold text-blue-500">Full-Stack Web Developer</span>,
              saya berkontribusi dalam pengembangan frontend, backend, perancangan
              database, serta integrasi API untuk membangun platform kesehatan
              digital yang responsif dan mudah digunakan.
            </p>
          </div>

          
          <div className="space-y-6 mt-12">
            {roles.map((role, i) => (
              <div
                key={role.number}
                className="reveal-right group bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={staggerStyle(i, 80)}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-500 text-white font-bold flex items-center justify-center">
                    {role.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{role.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{role.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="mb-20">
        <h2 className="reveal mt-4 text-4xl md:text-5xl font-bold text-gray-800">
          Jelajahi <span className="text-blue-500"> GluCare</span>
        </h2>
        <div className="reveal w-16 h-1 bg-blue-500 rounded-full mt-4" style={staggerStyle(1)} />
      </div>

      <div className="space-y-28">
        {gallery.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                !isEven ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              
              <div className={isEven ? "reveal-left" : "reveal-right"}>
                <span className="text-6xl font-bold text-blue-100">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-3xl font-bold text-gray-800 -mt-4">{item.title}</h3>
                <p className="mt-5 text-gray-600 leading-relaxed text-lg">{item.description}</p>
              </div>

              
              <div
                className={`${isEven ? "reveal-right" : "reveal-left"} rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300`}
                style={staggerStyle(1, 100)}
              >
                <img src={item.image} alt={item.title} className="w-full object-cover" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
