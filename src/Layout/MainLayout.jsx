import { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navber/Navber/Navber";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

function BackgroundDots() {
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  // Moving dots effect
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);

  // Dot color changing effect
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["rgba(79, 240, 183, 0.3)", "rgba(255, 50, 50, 0.3)"]);

  return (
    <motion.div
      ref={ref}
      className="background-dots"
      style={{
        backgroundImage: `radial-gradient(circle, ${backgroundColor} 2px, transparent 2px)`,
        backgroundSize: "20px 20px",
        backgroundPosition: backgroundPosition,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        filter: "blur(5px)",
        transition: "background-color 0.3s ease",
      }}
    />
  );
}




function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cursorSize = 20;


  return (
    <div className="fixed w-screen h-screen">
    {/* Blob follows the cursor */}
    <motion.div
      className="fixed"
      style={{
        width: `${cursorSize * 2}px`, // Blob size
        height: `${cursorSize * 2}px`,
        backgroundColor: "rgba(79, 240, 183, 0.7)", // Soft green glow
        borderRadius: "50%",
        position: "absolute",
        filter: "blur(80px)", // Glowing effect
        pointerEvents: "none",
      }}
      animate={{
        x: cursorPosition.x - cursorSize * 3.5, // Position to center the blob
        y: cursorPosition.y - cursorSize * 3.5, // Position to center the blob
      }}
      transition={{
        type: "spring", // Smooth, natural movement
        stiffness: 100, // Controls the "tightness" of the spring
        damping: 20,// Controls how much it slows down
        restDelta: 0.1, // When the movement is considered "finished"
      }}
    />
  </div>
  );
}






function MainLayout() {

  const [openMenu, setMenu] = useState(false)
  return (
    <>
      {/* Navbar */}
      <Navbar openMenu={openMenu} setMenu={setMenu}   />

      {/* Background Dot Effect */}
      <BackgroundDots />
      
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Content */}
      <div onClick={() => setMenu(false)} className="main-layout">
        <Outlet />
        <Footer />
      </div>

      <style>{`
        html { scroll-behavior: smooth; }
        .background-dots {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-attachment: fixed;
        }
        .main-layout {
          position: relative;
          min-height: 100vh;
          padding-top: 60px;
        }
      `}</style>
    </>
  );
}

export default MainLayout;
