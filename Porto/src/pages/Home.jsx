import { motion } from "framer-motion";
import profile from "../assets/profile.png";
import Navbar from "../components/Navbar";

export default function App() {
  return (
    <section
      id="home"
      className="py-24 px-8 bg-gradient-to-b from-white to-blue-50"
    >
      <main className="relative h-screen overflow-hidden bg-[#ffff]">
        <Navbar />
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />

       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-[5rem] sm:top-[6rem] md:top-[8rem] left-0 w-full z-30 flex justify-center"
        >
          <h2
            className="w-full text-center uppercase text-[#5a88ef]"
            style={{
              fontFamily: "Source Sans 3",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 5vw, 6rem)",
              letterSpacing: "clamp(0.4rem, 1.5vw, 2.6rem)",
            }}
          >
            J U M I T A ' S
          </h2>
        </motion.div>

        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            right: "0",
            textAlign: "center",
            marginTop: "-0.5em",
            fontFamily: "Anton",
            fontSize: "clamp(5rem, 31vw, 20rem)",
            textShadow: "8px 8px 0 rgba(0,0,0,.12)",
            color: "#5a88ef",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            zIndex: 10,
            userSelect: "none",
          }}
        >
          PORTFOLIO
        </motion.h1>

       
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 50,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={profile}
              alt="Profile"
              style={{
                height: "clamp(55vh, 80vh, 100vh)",
                width: "auto",
                maxWidth: "90vw",
                objectFit: "contain",
                display: "block",
              }}
            />
          </motion.div>
        </div>
      </main>
    </section>
  );
}
